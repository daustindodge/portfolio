"use client";

import React, {useRef} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import Image from "next/image";

export default function Project({title, description, tags, imageUrl})
{
    const ref = useRef(null);
    const {scrollYProgress} =useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
        >
            <section style={{scale: scrollYProgress, opacity: scrollYProgress}} className="relative bg-gray-100 max-w-[42rem] borderBlack rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] sm:group-odd:pl-8 hover:bg-gray-200 transition dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white">
                <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-odd:ml-[18rem]">
                    <h3 className="text-2xl">{title}</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {
                            tags.map((tag, index) => (
                                <li key={index} className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70">{tag}</li>
                            ))
                        }
                    </ul>
                </div>
                <Image
                    src={imageUrl}
                    alt={title}
                    uality={95}
                    className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
                    group-odd:right-[initial]
                    group-odd:-left-40
                    group-odd:group-hover:translate-x-3
                    group-odd:group-hover:rotate-2
                    group-hover:-translate-x-3
                    group-hover:translate-y-3
                    group-hover:-rotate-2
                    group-hover:scale-[1.04]
                    transition"
                />
            </section>
        </motion.div>
    )
}