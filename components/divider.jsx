"use client";

import React from "react";
import {motion} from "framer-motion";

export default function Divider()
{
    return (
        <motion.div
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{delay: 0.3}}
            className="bg-gray-200 my-24 h-[5rem] w-1 rounded-full hidden sm:block dark:bg-opacity-20"
        ></motion.div>
    )
}