"use client";

import React from "react";
import Heading from "@/components/heading";
import {useSectionInView} from "@/lib/hooks";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {experienceData} from "@/lib/data";
import {useThemeContext} from "@/context/theme-context";

export default function Experience()
{
    const {ref} = useSectionInView("Experience", 0.35);
    const {theme} = useThemeContext();

    return (
        <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
            <Heading>My Experience</Heading>
            <VerticalTimeline lineColor="">
                {experienceData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                            contentStyle={{
                                background: theme === "light" ? "#f3f4f6" : "#111827",
                                boxShadow: "none",
                                border: "1px solid rgba(0, 0, 0, 0.05)",
                                textAlign: "left",
                                padding: "1.3rem 2rem",
                            }}
                            contentArrowStyle={{
                                borderRight: theme === "light" ? "0.4rem solid #9ca3af" :"0.4rem solid #111827",
                            }}
                            date={item.date}
                            icon={item.icon}
                            iconStyle={{
                                background: theme === "light" ? "white" : "#111827",
                                fontSize: "1.5rem",
                            }}
                        >
                            <h3 className="font-semibold capatalize">{item.title}</h3>
                            <p className="font-normal !mt-0">{item.location}</p>
                            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))}
            </VerticalTimeline>
        </section>
    )
}