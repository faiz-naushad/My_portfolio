import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    real,
    git,
    docker,
    cisco,
    salesforce,
    assistant,
    portfolio,
    threejs,
    coursera,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Django Developer",
      icon: backend,
    },
    {
      title: "Ethical Hacker",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "git",
      icon: git,
    },
    {
      name:"docker",
      icon:docker,
    },
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "redux",
      icon:redux,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    
  ];
  
  const experiences = [
    {
      title: "Salesforce Developer Virtual Internship",
      company_name: "Smart Internz",
      icon: salesforce,
      iconBg: "#E6DEDD",
      date: "Sept 2022 - Dec 2022",
      points: [
        "Having completed the Salesforce Developer internship, I have gained valuable hands-on experience in Apex programming, workflow automation, and integration techniques enhancing my capabilities and preparing me for a successful career in the CRM industry",

      ],
    },
    {
      title: "Cybersecurity Essentials",
      company_name: "Cisco Networking Academy",
      icon: cisco,
      iconBg: "#E6DEDD",
      date: "March 2022 - June 2022",
      points: [
        "Acquired vital skills in network security and threat detection.This certification showcases my expertise in cybersecurity, significantly enhances my qualifications for roles in cybersecurity sectors.",
      ],
    },
    {
      title: "Crash Course on Python",
      company_name: "Coursera",
      icon: coursera,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Feb 2022",
      points: [
        "In completing Google’s Python Crash Course, I acquired a strong foundation in Python programming, mastering key concepts like data structures, algorithms, and problem-solving. Through hands-on coding exercises and real-world applications, I developed practical skills and readiness for advanced Python challenges and projects",
      ],
    },
    
    
  ];
  
  const projects = [
    {
      name: "Artificial Intelligence Bot",
      description:
        "Engineered an artificial intelligence bot that functions as an assistant, running and taking care of internal tasks like music control, system tasks etc. Utilized Python’s pyttsx3 and speech recognition modules for converting text to speech responses to enhance user interaction. Furthermore, integrated PyAutoGUI and pywhatkit modules for automated keyboard controls and send Whatsapp messages, play Youtube videos etc.",
      tags: [
        {
          name: "pyttsx3",
          color: "blue-text-gradient",
        },
        {
          name: "pyAutoGUI",
          color: "green-text-gradient",
        },
        {
          name: "pywhatkit",
          color: "pink-text-gradient",
        },
      ],
      image: assistant,
      source_code_link: "https://github.com/",
    },
    {
      name: "My Portfolio",
      description:
        "Experience a seamless user interface crafted with ReactJs and enhanced by the elegance of Tailwind CSS. The website boasts a modern, responsive design, ensuring effortless navigation and a visually pleasing layout that highlights my skills, projects, and achievements With ThreeJs, my portfolio comes to life with dynamic 3D interactivity showcasing creativity and engaging online presence.",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "green-text-gradient",
        },
        {
          name: "ThreeJs",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/",
    },
    {
      name: "Real Estate Management ",
      description:
        "Led a team of three in the collaborative development of a Real Estate platform using Django and PostgreSQL. Optimized the interface for intuitive navigation using various Django packages, ensuring swift resolution of queries and resulting in a 50% reduction in user effort.Incorporated Django Admin, resulting in streamlines data management, ensuring user-friendly, and secure control over application content, ultimately saving time and enhancing productivity.",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "HTML/CSS",
          color: "pink-text-gradient",
        },
      ],
      image: real,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences,  projects };