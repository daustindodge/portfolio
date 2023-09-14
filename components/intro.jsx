"use client";

import React from "react";
import Image from "next/image";
import profileImage from "@/public/profile.jpg";
import {motion} from "framer-motion";
import Link from "next/link";
import {HiArrowNarrowRight, HiDownload} from "react-icons/hi";
import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import {useSectionInView} from "@/lib/hooks";
import {useActiveSectionContext} from "@/context/active-section-context";

const date = new Date();
const experience = date.getFullYear() - 2019;

export default function Intro()
{
    const {ref} = useSectionInView("Home", 0.5);
    const {setActiveSection, setTimeOfLastClick} = useActiveSectionContext();

    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[80rem]">
            <div className="flex items-center justify-center">
                <div className="relative mb-10">
                    <motion.div
                        initial={{opacity: 0, scale: 0.75}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}
                    >
                        <Image
                            src={profileImage}
                            alt="Austin Portrait"
                            width="192"
                            height="192"
                            quality="95"
                            priority={true}
                            className="h-28 w-28 rounded-full object-cover border-[0.15rem] border-white/40 shadow-xl"
                        />
                    </motion.div>
                    <motion.span
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: [0, 1, 1, 1, 1, 1],
                            rotate: [0, 15, -35, 20, -10, 0]
                        }}
                        transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
                        }}
                        className="text-4xl absolute bottom-0 right-0"
                    >
                        🖐🏻
                    </motion.span>
                </div>
            </div>
            <motion.h1
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1}}
                className="mb-12 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
            >
                <strong>Hey there, I'm Austin.</strong> I'm a <strong>full-stack developer</strong> with <strong>{experience} years</strong> of full-time experience.
                I enjoy building <em>sites, apps, & integrations</em>. My focus is <u>React</u> (Frontend) and <u>Laravel</u> (Backend).
            </motion.h1>
            <motion.div
                initial={{opacity: 0, y: 10}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.2,}}
                className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            >
                <Link
                    href="/#contact"
                    onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                    className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:bg-gray-700 active:scale-95 transition-all dark:focus:bg-gray-800"
                >
                    Contact me here
                    <HiArrowNarrowRight className="group-hover:translate-x-1 transition" />
                </Link>
                <a href="/resume.pdf" className="group bg-white borderWhite px-7 py-3 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:bg-gray-200 active:scale-95 transition dark:text-gray-800 dark:bg-gray-400 dark:focus:bg-gray-600" download>
                    Résumé
                    <HiDownload className="group-hover:translate-y-0.5 transition" />
                </a>
                <a
                    className="group bg-white borderWhite text-gray-700 p-4 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:bg-gray-200 active:scale-95 transition dark:text-gray-800 dark:bg-gray-400 dark:focus:bg-gray-600"
                    href="https://www.linkedin.com/in/daustindodge/"
                    target="_blank"
                >
                    <FaLinkedin className="group-hover:text-gray-400 dark:group-hover:text-gray-200 transition" />
                </a>
                <a
                    className="group bg-white borderWhite text-gray-700 p-4 flex items-center gap-2 rounded-full cursor-pointer outline-none focus:bg-gray-200 active:scale-95 transition dark:text-gray-800 dark:bg-gray-400 dark:focus:bg-gray-600"
                    href="https://github.com/daustindodge"
                    target="_blank"
                >
                    <FaGithubSquare className="group-hover:text-gray-400 dark:group-hover:text-gray-200 transition" />
                </a>
            </motion.div>
        </section>
    )
}