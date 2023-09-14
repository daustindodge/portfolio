"use client";

import React from "react";
import Heading from "@/components/heading";
import {projectData} from "@/lib/data";
import Project from "@/components/project";
import {useSectionInView} from "@/lib/hooks";

export default function Projects()
{
    const {ref} = useSectionInView("Projects", 0.5);

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <Heading>My Projects</Heading>
            <div>
                {
                    projectData.map((project, index) => (
                        <React.Fragment key={index}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}