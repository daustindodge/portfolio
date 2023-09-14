import './globals.css'
import { Inter } from 'next/font/google'
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import {Toaster} from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: "Austin's Portfolio",
    description: 'Austin is a developer with 8 years of experience.',
}

export default function RootLayout({ children })
{
    return (
        <html lang="en" className="!scroll-smooth">
            <body className={`${inter.className} bg-slate-50 text-gray-950 relative pt-28 sm:pt-40 dark:bg-gray-950 dark:text-gray-50`}>
                <div className="bg-[#5de0e6] dark:bg-[#317478] blur-[10rem] bg-opacity-90 absolute -z-10 rounded-full top-[-7rem] h-[20rem] w-[55%] right-[6%] "></div>
                <div className="bg-[#5d5fbc] dark:bg-[#323375] blur-[10rem] bg-opacity-90 absolute -z-10 rounded-full top-[-3rem] h-[20rem] w-[55%] left-[2%] "></div>
                <div className="bg-[#ab4d7d] dark:bg-[#632c49] blur-[10rem] bg-opacity-90 absolute -z-10 rounded-full top-[-10rem] h-[20rem] w-[20%] left-1/2 -translate-x-1/2 "></div>

                <ThemeContextProvider>
                    <ActiveSectionContextProvider>
                        <Header />
                        {children}
                        <Footer />
                        <ThemeSwitch />
                        <Toaster position="bottom-right" />
                    </ActiveSectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    )
}
