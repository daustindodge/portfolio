import React from "react";
import {FaGraduationCap, FaLaptopCode, FaReact} from "react-icons/fa";
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
        description: "In May, I received a Bachelor of Interdisciplinary Studies with a concentration in Computer Science and Engineering.",
        icon: React.createElement(FaGraduationCap),
        date: "2023",
    },
    {
        title: "Application Developer",
        location: "Western Nevada College",
        description: "Responsibilities include developing and managing RESTful APIs with third-party vendors (such as Google accounts, Active Directory, PeopleSoft, Workday, etc) using Lumen, developing full-stack CRUD applications with REACT and Laravel, managing MySQL and SQL Server, managing versioning of our applications using Git and of our dependancies/packages using Composer and npm. I also assisted in a data warehouse migration, in which we moved from MySQL to SQL Server. Lastly, I am responsible for managing student workers' schedules and projects.",
        icon: React.createElement(FaLaptopCode),
        date: "2022",
    },
    {
        title: "Completed My Associate",
        location: "Western Nevada College",
        description: "In December, I received an Associate of Arts after reverse transferring credits from my studies while still in my undergrad.",
        icon: React.createElement(FaGraduationCap),
        date: "2020",
    },
    {
        title: "Junior Programmer Analyst",
        location: "Western Nevada College",
        description: "Responsibilities included working with a senior programmer, developing integrations and other projects using SFTP and working with the Webmaster on WordPress plugins. I also became familiarized with RHEL Linux, MySQL, some Apache, and PHP. I used PHP for both front-end and back-end web development.",
        icon: React.createElement(FaLaptopCode),
        date: "2019",
    },
    {
        title: "IT Support",
        location: "Western Nevada College",
        description: "I started working at WNC in the Application Support & Development department. I supported the help desk, updated/created OnBase eForms, Workflows, and custom queries, wrote simple php scripts, and took inventory. I also set up and managed meetings with other departments during OnBase project development. I was also tasked with writing basic PHP logic for the college's website in conjunction with our Webmaster.",
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
        tags: ["React", "Next.js", "React Email", "Resend", "Framer Motion", "Tailwind", "AWS Amplify"],
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
    "SQL Server",
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