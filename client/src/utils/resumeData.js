import React from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';


let about_me =
    ["Highly motivated and detail-oriented with over 6 years of experience in IT industry.",
    "Strong foundation in web development and a passion for creating innovative and user-friendly applications.",
    "Proficient in front-end stack such as HTML, CSS, JavaScript, React, Angular, Bootstrap and Material UI as well as back-end stack such as Java, Spring Boot, Node.js and Express.js.",
    "Solid understanding of both SQL and NoSQL databases, RESTful APIs, and version control systems.",
    "Experienced in developing web applications such as a web crawler and a photo sharing application for a private group and websites.",
    "Experienced in providing cloud application support and performing data migrations.",
    "Skilled in troubleshooting hardware and software problems.",
    "Excellent problem-solving skills and a collaborative team player with strong communication abilities.",
    "Knowledgeable in cloud platforms such as Amazon S3, AWS EC2, and Nginx server."]

let resumeData = {
    name: 'Saidur Rahman',
    title: 'Full Stack Developer',

    birthday: 'February 5',
    email: 'saidur.rahmann@gmail.com',

    socials: {
        Linkedin: {
            link: "https://www.linkedin.com/in/saidur-rahman1/",
            text: "linkedin.com/in/saidur-rahman1",
            icon: <LinkedInIcon />
        },
        Github: {
            link: "https://www.github.com/saidur-rahman1",
            text: "github.com/saidur-rahman1",
            icon: <GitHubIcon />
        }
    },

    experiences: [
        {
            title: "Technical Support Representative",
            institute: "Fusion BPO Services Inc.",
            time: "August 2017 - Present",
            description: 
            `Responsibilities:
            • Responding to requests for assistance by chat or telephone (inbound)
            • Handling technical inquiries and other customer service duties and logging resolution steps in a knowledge base when required, to improve team resources
            • Diagnosing & troubleshooting TCP/IP, Microsoft 365 & Google Workspace applications and cloud applications such as VMware, Acronis, Backupify, Cloud Finder, Mimecast
            • Onboarding, email migrations and support for Microsoft 365 and Google Workspace
            • Remote support for hardware and software issues
            • Providing technical support in Marketplace to different channel partners and escalating complex issues to the senior support team
            • Effectively identifying new virus and spyware issues as they arise and remain up to date on the latest removal techniques
            • Providing training to junior agents for cloud applications and email migrations`
        },
        {
            title: "Full Stack Developer Apprentice",
            institute: "Next Level Soft Inc.",
            time: "October 2022 - November 2023",
            description: 
            `Responsibilities:
            • Identified and resolved frontend application bugs in Angular 8, HTML, CSS, Bootstrap, JavaScript, and TypeScript, resulting in an improved user experience.
            • Contributed to the enhancement of the backend application built on Spring Boot, Spring Data Mongo, and Mongo Atlas, ensuring the platform's stability and scalability.
            • Implemented a robust security layer by integrating the Firebase Authentication system to ensure the confidentiality of user data and content.
            • Set up storage and delivery system using Amazon S3, optimizing performance and user experience.
            • Deployed web applications on AWS EC2 instances, configuring Nginx server to ensure high availability and performance.
            • Collaborated with the team to maintain and optimize the overall functionality of platform, keeping track and providing ongoing technical support.`
        },
        {
            title: "Web Developer",
            institute: "Strategeek Digital Ltd.",
            time: "June 2014 - December 2015",
            description: 
            `Responsibilities:
            • Involved in improving efficiency and application of existing web services for clients
            • Developed websites and tested applications accordingly
            • Developed front end interface with HTML5, CSS, Bootstrap, JavaScript
            • Data storage and retrieval done using SQL database
            • Input website content into computerized databases with custom dashboards
            • Performed QA of the work done by subordinates via code testing and validating new designs
            • Provided technical support as necessary`
        }
    ],

    education: [
        {
            institute: "Concordia University",
            degree: "Master of Engineering (MEng)",
            program: "Electrical and Computer Engineering",
            time: "September 2016 - December 2018"
        },
        {
            institute: "American International University - Bangladesh",
            degree: "Bachelor of Science (BSc)",
            program: "Electrical and Electronic Engineering",
            time: "January 2008 - August 2011"
        }
    ],

    certification: [
        {
            institute: "HarvardX",
            degree: "CS50's Introduction to Programming with Python",
            certificate: "Link to online certificate",
            time: "Issued November 2023",
            url: "https://cs50.harvard.edu/certificates/f4ee721d-b753-4803-bc22-c8a214640bb3"
        },
    ],

    skills: [
        {
            title: "Languages",
            description: ["Python", "Java", "JavaScript", "TypeScript", "C++"]
        },
        {
            title: "Databases",
            description: ["MySQL", "PostgreSQL", "MongoDB", "Firebase"]
        },
        {
            title: "Frameworks",
            description: ["Spring Boot", "NodeJS", "ExpressJS", "ReactJS", "Angular"]
        },
        {
            title: "Environments",
            description: ["Eclipse", "IntelliJ Idea", "VS Code"]
        },
    ],

    portfolio: [
        {
            tag: "MERN",
            image: "https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2021/05/web_crawler_header.jpg",
            title: "updateMe",
            summary: "A web crawler for social media platforms",
            description: "MERN stack project with the primary functionality of providing users with the latest posts about companies of their choice from various social media platforms. All the searched entries are stored and retrived from MongoDB. In the backend, a cron job has been setup that will run with the help of Bull and Redis, periodically querying for the companies and storing the posts in the database. Finally, the users will get a weekly newsletter with the top posts about the companies. This was done with the help of SendGrid.",
            links: [
                {link: "https://github.com/saidur-rahman1/updateMe", icon: <GitHubIcon />}
            ]
        },
        {
            tag: "Java",
            image: "https://www.studentprojects.live/wp-content/uploads/2022/02/Library-Management-System.jpg",
            title: "Library Management System",
            summary: "Book inventory management for schools",
            description: "A GUI based management system for an educational institution that can keep a track of the books in its inventory along with the books borrowed and returned by its students. This system has two types of users, librarians and the system administrator. The librarians are responsible to keep a track of all books being received and issued by the library whereas the administrator is responsible to add, remove and keep track of the librarians who will be able to access the system. The front end GUI was developed using Java and Swing whereas the back end and database handling was done using MySQL.",
            links: [
                {link: "https://github.com/saidur-rahman1/library-management-system", icon: <GitHubIcon />}
            ]
        },
        {
            tag: "React",
            image: "https://i.pcmag.com/imagery/articles/02ToMmZcHS27pvLqB9Hr9q1-15..v1647551952.jpg",
            title: "Youtube Video Player",
            summary: "Watch Youtube videos using Youtube API",
            description: "Youtube video player designed using React Hooks. Youtube API is used to access the videos and view them.",
            links: [
                {link: "https://videos-hooks-lime.vercel.app/", icon: <PublicIcon />}
            ]
        }
    ]

}

export {about_me, resumeData};