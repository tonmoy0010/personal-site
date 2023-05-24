import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    bfg,
    tesla,
    moore,
    mobileapp,
    blockchain,
    deepl,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Cloud Engineer",
      icon: web,
    },
    {
      title: "Application Developer",
      icon: mobile,
    },
    {
      title: "Security Analyst",
      icon: backend,
    },
    {
      title: "Offensive Security",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Engineer (Intern)",
      company_name: "Benevolence Financial Group",
      icon: bfg,
      iconBg: "#383E56",
      date: "May 2020 - November 2021",
      points: [
        "Improved website visibility through Search Engine Optimization (SEO) by enhancing keyword references and increasing link backs.",
        "Led the migration of a web page from WordPress to Django (C#) and JavaScript, handling both back-end and front-end development.",
        "Developed a Python3 automation script to update website data based on market prices.",
        "Collaborated with UI/UX designers to enhance website functionality and implemented best design practices.",
      ],
    },
    {
      title: "Systems Administrator",
      company_name: "Moore Australia NSW",
      icon: moore,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Provided comprehensive system maintenance and support, ensuring smooth operation, performing regular updates and patches, and swiftly resolving any system issues that arose.",
        "Effectively managed and optimized computer networks, overseeing configuration, monitoring, and security measures, guaranteeing network performance, availability, and integrity.",
        "Delivered technical support to end-users, resolving hardware and software problems, offering expert guidance on system usage, and providing prompt assistance for user queries.",
        "Implemented robust data backup and recovery systems, devising backup strategies, conducting regular backups, and maintaining data integrity to safeguard critical organizational data.",
        "Maintained stringent security standards by implementing access controls, firewalls, and intrusion detection systems, regularly conducting security audits, vulnerability assessments, and timely patch management to ensure robust system security.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Blockchain Development",
      description:
        "Worked on creating my P2P blockchain network in order to understand the concept better. Learned how to transact between two different peers and building Smart Contracts. Project developed using JavaScript. Different APIs were created and used Postman to interact with the Blockchain to create, delete and update transactions or ledger. Created my own version of Proof of Work using hashing algorithm which allowed every transaction to be unique. The project is still under development and open sourced.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "git",
          color: "green-text-gradient",
        },
        {
          name: "algorithmic hashing",
          color: "pink-text-gradient",
        },
        {
          name: "APIs",
          color: "blue-text-gradient",
        },
        {
          name: "postman",
          color: "green-text-gradient",
        },
      ],
      image: blockchain,
      source_code_link: "https://github.com/tonmoy0010/blockchain",
    },
    {
      name: "Mobile Application Development",
      description:
        "Developed an IOS application using React for the front end and DynamoDB on the back end to understand the concept of developing a secure phone applications, and APIs. Created the project by using Figma to develop multiple Wire frames, which were then used to develop the User Interface Prototype.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "object oriented programming",
          color: "pink-text-gradient",
        },
      ],
      image: mobileapp,
      source_code_link: "https://github.com/tonmoy0010/Mobile-Application",
    },
    {
      name: "Deep and Scalable Anomaly Detection",
      description:
        "Worked with Dr. Xuyuan Zhang to create a tool which identifies anomalies during the software development life cycle using a combined method of Deep Learning and Isolation Forest.",
      tags: [
        {
          name: "neural networks",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "machine learning algorithm",
          color: "pink-text-gradient",
        },
      ],
      image: deepl,
      source_code_link: "https://github.com/",
    },
  ];

export { services, technologies, experiences, projects };