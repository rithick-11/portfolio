import bootstapLogo  from "../Asserts/bootstrap.png";
import cssLogo       from "../Asserts/css.png";
import htmlLogo      from "../Asserts/html.png";
import javaLogo      from "../Asserts/java.png";
import jasvascriptLogo from "../Asserts/javascript.png";
import mongoDbLogo   from "../Asserts/mangoDB.png";
import nodeLogo      from "../Asserts/node.png";
import pythonLogo    from "../Asserts/python.png";
import reactLogo     from "../Asserts/react.png";
import expressLogo   from "../Asserts/express.png";
import sqlLogo       from "../Asserts/sql.png";
import tailwindLogo  from "../Asserts/tailwind.png";
import git from "../Asserts/git.png";
import github from "../Asserts/github.png";
import aws from "../Asserts/aws.jpg"
import docker from "../Asserts/docker.jpg"


export const linkedInPosts = [
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:share:7309804465904041984?collapsed=1",
    title: "Secured 3rd Place in CATCH '25 Coding Contest! 💻",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7300482736920633345?collapsed=1",
    title: "Web Canva: 200+ Attendees, 1500+ Website Visits & a Stage Fear Conquered! 🚀",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7279847625300787200?collapsed=1",
    title: "About 2024 🚀",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7256707922917785600?collapsed=1",
    title: "Mastering Data Structures & Algorithms: Your Key to Problem-Solving Power!",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7257113544452694016?collapsed=1",
    title: "Understanding Time and Space Complexity in Algorithms",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7272287087184244736?collapsed=1",
    title: "Demystifying STL Containers: The Building Blocks of Efficient Code",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7274830450743742464?collapsed=1",
    title: "Unlock the Power of Recursion!",
  },
  {
    src: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7276539228111388672?collapsed=1",
    title: "5 Basic DSA Problems to Kickstart Your Problem-Solving Journey!",
  },
];

// Keep old export name so nothing else breaks
export const activitys = linkedInPosts;

export const skillsList = [ 
  { name: "HTML", logo: htmlLogo, category: "Frontend", level: "Expert" },
  { name: "CSS", logo: cssLogo, category: "Frontend", level: "Expert" },
  { name: "JavaScript", logo: jasvascriptLogo, category: "Frontend", level: "Advanced" },
  { name: "React", logo: reactLogo, category: "Frontend", level: "Advanced" },
  { name: "Tailwind", logo: tailwindLogo, category: "Frontend", level: "Advanced" },
  { name: "Bootstrap", logo: bootstapLogo, category: "Frontend", level: "Intermediate" },
  { name: "Node.js", logo: nodeLogo, category: "Backend", level: "Advanced" },
  { name: "Express", logo: expressLogo, category: "Backend", level: "Advanced" },
  { name: "Python", logo: pythonLogo, category: "Language", level: "Advanced" },
  { name: "Java", logo: javaLogo, category: "Language", level: "Intermediate" },
  { name: "MySQL", logo: sqlLogo, category: "Database", level: "Intermediate" },
  { name: "MongoDB", logo: mongoDbLogo, category: "Database", level: "Intermediate" },
  {
    name: "Git",
    logo: git,
    category: "DevOps",
    level: "Intermediate",
  },
  {
    name: "GitHub",
    logo: github,
    category: "DevOps",
    level: "Intermediate",
  },
  {
    name: "AWS",
    logo: aws,
    category: "DevOps",
    level: "Intermediate",
  },
  {
    name: "Docker",
    logo: docker,
    category: "DevOps",
    level: "Intermediate",
  },  
];

export const certifications = [
  {
    name: "React JS",
    imageUrl: "https://media-content.ccbp.in/certificates/share/CPFRXHJCIL.png",
    link: "https://certificates.ccbp.in/academy/react-js?id=CPFRXHJCIL",
    provider: "NxtWave",
    skills: ["React Js", "React Router", "React Hooks", "State Management", "Component Lifecycle", "API Integration", "Context API", "Promises", "API Fetching", "Dynamic Rendering"],
    receivedDate: "Aug 2024",
  },
  {
    name: "Node JS",
    imageUrl: "https://media-content.ccbp.in/certificates/share/AZAVOMLMCH.png",
    link: "https://certificates.ccbp.in/academy/node-js?id=AZAVOMLMCH",
    provider: "NxtWave",
    skills: ["Node JS", "Express JS", "REST APIs", "Middleware", "Routing", "Authentication", "Database Integration", "Error Handling", "Deployment"],
    receivedDate: "May 2024",
  },
  {
    name: "Programming Foundations with Python",
    imageUrl: "https://res.cloudinary.com/dwpmsw2i4/image/upload/v1783886554/Screenshot_2026-07-13_013213_dppv3y.png",
    link: "https://certificates.ccbp.in/academy/programming-foundations-with-python?id=PKQVRLSSAX",
    provider: "NxtWave",
    skills: ["Python", "Data Structures", "Algorithms", "Object-Oriented Programming", "File Handling", "Exception Handling", "Modules and Packages"],
    receivedDate: "Dec 2023",
  },
  {
    name: "MongoDB",
    imageUrl: "https://res.cloudinary.com/dwpmsw2i4/image/upload/v1742953545/Screenshot_2025-03-26_071455_rlc2ll.png",
    link: "https://learn.mongodb.com/c/KyR4R3aeRLimVUddrtwWWA",
    provider: "MongoDB",
    skills: ["MongoDB", "NoSQL", "Database Design", "CRUD Operations", "Aggregation Framework", "Indexing", "Data Modeling"],
    receivedDate: "Jun 2024",
  },
  {
    name: "Programming in Java",
    imageUrl: "https://res.cloudinary.com/dwpmsw2i4/image/upload/v1783885032/Screenshot_2026-07-13_010558_nrymtf.png",
    link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS43S96310063530668797",
    provider: "NPTL",
    skills: ["Java", "OOPS", "Data Structures"],
    receivedDate: "Jan 2024",
  },
  {
    name: "JavaScript Essentials",
    imageUrl: "https://res.cloudinary.com/dwpmsw2i4/image/upload/v1783885364/Screenshot_2026-07-13_011225_mhnrgs.png",
    link: "https://certificates.ccbp.in/academy/javascript-essentials?id=AONILPYFHV",
    provider: "NxtWave",
    skills: ["JavaScript", "ES6", "Asynchronous JS", "Promises"],
    receivedDate: "April 2024",
  },
  {
    name: "Introduction to Databases",
    imageUrl: "https://res.cloudinary.com/dwpmsw2i4/image/upload/v1783885818/Screenshot_2026-07-13_011910_uu929t.png",
    link: "https://certificates.ccbp.in/academy/introduction-to-databases?id=TJDCVMVUYK",
    provider: "NxtWave",
    skills: ["SQL", "CURD Operations", "Database Design", "Normalization", "Joins", "Indexes", "Transactions", "Data Modeling"],
    receivedDate: "Feb 2024s",
  },

  {
    name: "Build Your Own Dynamic Web Application",
    imageUrl: "https://res.cloudinary.com/dwpmsw2i4/image/upload/v1783886230/Screenshot_2026-07-13_012637_gay7ed.png",
    link: "https://certificates.ccbp.in/academy/dynamic-web-application?id=CLIAWPUCXV",
    provider: "NxtWave",
    skills: ["JavaScript", "DOM Manipulation", "Asynchronous JS", "Event Handling", "API Integration", "Web Storage", "Dynamic Content Rendering"],
    receivedDate: "Feb 2024",
  },
];
