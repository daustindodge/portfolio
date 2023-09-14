import React from "react";
import {FaGraduationCap, FaLaptopCode, FaReact} from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import blackBoxViz from "@/public/blackboxvis.png";
import portfolio from "@/public/portfolio.png";
import recordCoupons from "@/public/recordcoupons.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
];

export const experienceData = [
    {
        title: "Completed My Bachelor",
        location: "University of Nevada, Reno",
        description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another. I also upskilled to the full stack.",
        icon: React.createElement(FaGraduationCap),
        date: "2023",
    },
    {
        title: "Application Developer",
        location: "Western Nevada College",
        description: "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(FaLaptopCode),
        date: "2022",
    },
    {
        title: "Completed My Associate",
        location: "Western Nevada College",
        description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another. I also upskilled to the full stack.",
        icon: React.createElement(FaGraduationCap),
        date: "2020",
    },
    {
        title: "Junior Programmer Analyst",
        location: "Western Nevada College",
        description: "I worked as a front-end developer for 2 years in 1 job and 1 year in another. I also upskilled to the full stack.",
        icon: React.createElement(FaLaptopCode),
        date: "2019",
    },
    {
        title: "IT Support",
        location: "Western Nevada College",
        description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, Typescript, and Tailwind",
        icon: React.createElement(FaLaptopCode),
        date: "2016",
    },
];

export const projectData = [
    {
        title: "BlackBoxVis",
        description: "This is an algorithm visualiser application. Currently, there are sorting algorithms and will soon have pathfinding and searching algorithms.",
        tags: ["React", "Redux", "Bootstrap", "AWS S3", "AWS CloudFront"],
        imageUrl: blackBoxViz,
    },
    {
        title: "RecordCoupons",
        description: "This is a coupon tracker for vinyl records for my family and friends. I built this to make it easier to track coupons that I give out for people.",
        tags: ["React", "Laravel", "LAMP", "Bootstrap", "SQLite"],
        imageUrl: recordCoupons,
    },
    {
        title: "Portfolio",
        description: "This is the current site which is my portfolio website.",
        tags: ["React", "Next.js", "React Email", "Resend", "Framer Motion", "Tailwind", "AWS CloudFormation", "AWS RDS"],
        imageUrl: portfolio,
    },
];

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "PHP",
    "Laravel/Lumen",
    "Tailwind",
    "Bootstrap",
    "MySQL",
    "MSSQL Server",
    "Redux",
    "Ajax",
    "Java",
    "C++",
    "Linux",
    "Git",
    "AWS",
    "RESTful APIs",
    "CICD",
    "OAuth2",
    "SAML",
    "CRUD"
];