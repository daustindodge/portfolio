"use client";

import React from "react";
import Heading from "@/components/heading";
import {useSectionInView} from "@/lib/hooks";
import {motion} from "framer-motion";
import {sendEmail} from "@/actions/sendEmail";
import SubmitBtn from "@/components/submit-btn";
import toast from "react-hot-toast";
import {TbMailCheck, TbMailQuestion, TbMailX} from "react-icons/tb";

const customToast = (type, message = "Something's not right...") =>
{
    let icon;

    if (type === "success")
    {
        icon = <p className="text-3xl text-green-700"><TbMailCheck /></p>;
    }
    else if (type === "error")
    {
        icon = <p className="text-3xl text-red-700"><TbMailX /></p>;
    }
    else
    {
        icon = <p className="text-3xl text-yellow-700"><TbMailQuestion /></p>;
    }

    toast.custom((t) => (
        <div
            className={`${
                t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5 dark:bg-gray-800 dark:text-white`}
        >
            <div className="flex-1 w-0 p-4">
                <div className="flex items-start items-center">
                    <div className="flex-shrink-0 pt-0.5 px-2">
                        {icon}
                    </div>
                    <div className="ml-3 flex-1">
                        {message}
                    </div>
                </div>
            </div>
            <div className="flex border-l border-gray-200 dark:border-gray-900">
                <button
                    onClick={() => toast.dismiss(t.id)}
                    className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                    Close
                </button>
            </div>
        </div>
    ));
}

export default function Contact()
{
    const {ref} = useSectionInView("Contact");

    return (
        <motion.section
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1}}
            viewport={{once: true}}
            ref={ref}
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        >
            <Heading>Contact Me</Heading>
            <p className="text-gray-700 dark:text-white/80">Please contact me directly at <a className="underline" href="mailto:daustindodge@gmail.com">daustindodge@gmail.com</a> or through this form.</p>
            <form
                className="flex flex-col mt-5 dark:text-black"
                action={async (formData) => {
                    const {data, error} = await sendEmail(formData);

                    if (error)
                    {
                        customToast("error", error);

                        return;
                    }

                    customToast("success", "Email sent successfully!");
                }}
            >
                <input type="email" name="emailAddress" required maxLength={500} placeholder="Your email" className="h-14 px-4 rounded-lg borderBlack transition-all dark:bg-gray-900 dark:bg-opacity-80 dark:focus:bg-gray-700 dark:outline-none" />
                <textarea name="emailMessage" required maxLength={500} placeholder="Your message" className="h-[20rem] my-3 rounded-lg borderBlack p-4 transition-all dark:bg-gray-900 dark:bg-opacity-80 dark:focus:bg-gray-700 dark:outline-none" />
                <SubmitBtn />
            </form>
        </motion.section>
    )
}