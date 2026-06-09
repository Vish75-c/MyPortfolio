// Skills Section Logo's
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';

// Education Section Logo's
import glLogo from './assets/education_logo/glLogo.jpg';
import jmcLogo from './assets/education_logo/jmcLogo.jpg';

// Project Section Logo's
import growthnexusLogo from './assets/work_logo/growthnexus.png';
import studyrxLogo from './assets/work_logo/studyrx.png';
import connectnLogo from './assets/work_logo/connectn.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React JS', logo: reactjsLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend & Databases',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'FastAPI', logo: pythonLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'LLM & AI',
    skills: [
      { name: 'LangChain', logo: pythonLogo },
      { name: 'Pinecone', logo: mongodbLogo },
      { name: 'RAG', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Cloudinary', logo: nodejsLogo },
    ],
  },
  {
    title: 'Fundamentals',
    skills: [
      { name: 'DSA', logo: javaLogo },
      { name: 'OOP', logo: javaLogo },
      { name: 'DBMS', logo: mysqlLogo },
    ],
  },
];

 
  
  export const education = [
   
    {
      id: 0,
      img: glLogo,
      school: "G.L. Bajaj Institute of Technology and Management",
      date: "2023 - 2027",
      grade: "CGPA: 8.1",
      desc: "Pursuing Bachelor's degree in Computer Science from G.L. Bajaj Institute of Technology and Management, Greater Noida. Focused on Data Structures and Algorithms, Object-Oriented Programming, DBMS, and full-stack web development. Actively building scalable applications using Node.js, React, MongoDB, and integrating LLM-powered features into real-world projects.",
      degree: "Bachelor of Technology - Computer Science",
    },
    {
      id: 1,
      img: jmcLogo,
      school: "Jesus and Mary Convent School",
      date: "2022 - 2023",
      grade: "84.6%",
      desc: "Completed Class 12 education from Jesus and Mary Convent School, Delta-3 Greater Noida (ISC), affiliated with Council for the Indian School Certificate Examinations (CISCE), studying Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "ISC (XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: jmcLogo,
      school: "Jesus and Mary Convent School",
      date: "2020 - 2021",
      grade: "93%",
      desc: "Completed Class 10 education from Jesus and Mary Convent School, Delta-3 Greater Noida (ICSE), affiliated with Council for the Indian School Certificate Examinations (CISCE).",
      degree: "ICSE (X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "GrowthNexus",
      description:
        "A full-stack mentorship and career platform that bridges the gap between juniors, seniors, and alumni. Features skill-based mentor discovery, real-time communication via Socket.io for 1-to-1 and multi-user chat, and centralized opportunity sharing. Built with MongoDB Atlas and Cloudinary for data/media management with role-based authorization. Integrated LLM-powered features using LangChain for automated JSON generation and career guidance blog summarization.",
      image: growthnexusLogo,
      tags: ["Node.js", "MongoDB", "Socket.io", "React", "Zustand", "LLaMA 3.3", "Tailwind CSS", "LangChain"],
      github: "https://github.com/Vish75-c/GrowNexus",
      webapp: "https://grow-nexus.vercel.app/",
    },
    {
      id: 1,
      title: "StudyRx",
      description:
        "A RAG-powered study platform built with a full-stack architecture using LLaMA 3.3 and LangChain. Provides grounded answers for PDFs, URLs, and transcripts with exact source citations to reduce hallucinations. Features a multi-service RAG system powering both high-precision QA and an automated MCQ generator. Optimized for sub-second semantic search across complex datasets with a dashboard-first UI.",
      image: studyrxLogo,
      tags: ["Express.js", "FastAPI", "LangChain", "React", "MongoDB", "Pinecone", "LLaMA 3.3"],
      github: "https://github.com/Vish75-c/StudyRx",
      webapp: "https://study-rx.vercel.app/",
    },
    {
      id: 2,
      title: "ConnectN",
      description:
        "A high-performance real-time chat platform supporting both 1-to-1 and group chat rooms. Optimized communication via Socket.io to achieve low-latency updates and seamless real-time synchronization. Built with a clean, responsive UI using React and Tailwind CSS with MongoDB for persistent message storage.",
      image: connectnLogo,
      tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Vish75-c/ConnectN",
      webapp: "#",
    },
  ];