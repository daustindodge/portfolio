import React from "react";

export default function Footer()
{
    const date = new Date();

    return (
        <footer className="relative mt-10 pb-10 px-4 text-center text-gray-500">
            <div className="bg-[#5de0e6] dark:bg-[#317478] blur-[5rem] bg-opacity-90 absolute -z-10 rounded-full bottom-[0rem] h-[3rem] w-[55%] right-[6%] "></div>
            <div className="bg-[#5d5fbc] dark:bg-[#323375] blur-[5rem] bg-opacity-90 absolute -z-10 rounded-full bottom-[0rem] h-[3rem] w-[55%] left-[2%] "></div>
            <div className="bg-[#ab4d7d] dark:bg-[#632c49] blur-[7rem] bg-opacity-90 absolute -z-10 rounded-full bottom-[0rem] h-[4rem] w-[20%] left-1/2 -translate-x-1/2 "></div>
            <small className="mb-2 text-xs block">
                &copy; {date.getFullYear()} Austin Dodge. All rights reserved.
            </small>
            <p className="text-xs">
                <strong>About this website:</strong> built with React & Next.js, TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, AWS hosting.
            </p>
        </footer>
    )
}