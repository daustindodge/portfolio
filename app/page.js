import Image from 'next/image'
import Header from "@/components/header";
import Intro from "@/components/intro";
import Divider from "@/components/divider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home()
{
    return (
        <main className="flex flex-col items-center px-4">
            <Intro />
            <Divider />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Divider />
            <Contact />
        </main>
    )
}
