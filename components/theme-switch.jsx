"use client";

import React from "react";
import {BsMoonFill, BsSunFill} from "react-icons/bs";
import {useThemeContext} from "@/context/theme-context";

export default function ThemeSwitch()
{
    const {theme, toggleTheme} = useThemeContext();

    return (
        <button onClick={toggleTheme} className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] borderWhite rounded-full flex items-center justify-center hover:rotate-[360deg] transition-all dark:bg-gray-900">
            {theme === "light" ? (<BsSunFill />) : (<BsMoonFill />)}
        </button>
    )
}