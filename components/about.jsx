"use client";

import React from "react";
import Heading from "@/components/heading";
import {motion} from "framer-motion";
import {useSectionInView} from "@/lib/hooks";

export default function About()
{
    const {ref} = useSectionInView("About");

    return (
        <motion.section
            ref={ref}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.4}}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            id="about"
        >
            <Heading>About Me</Heading>
            <p className="mb-3">
                I'm a <strong>Reno, NV</strong> local and a <strong>UNR</strong> Alumnus. I'm a hard worker, a team player, and self-motivated.
                I enjoy working with diverse people and learning and collaborating with others. <em>The best part of programming</em> is the problem-solving aspect -
                I <strong>love</strong> the feeling of finally figuring out a solution to a problem.
                My frontend stack is <strong>React, NextJS, & NodeJS</strong>. My api stack is <strong>Linux, Apache, MySQL, & PHP</strong>. I am also familiar with C++ and Java,
                and I'm always looking to learn new technologies. I am currently looking for a <strong>full-time position</strong> as a software developer.
            </p>
            <p>
                <em>When I'm not coding</em>, I enjoy making music, learning languages, playing tennis, and playing video games.
                I am also a classically trained saxophonist. I have been playing for 15 years and I have recently started learning the violin.
            </p>
        </motion.section>
    )
}