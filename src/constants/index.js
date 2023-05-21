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
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";

  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Engineer",
      icon: web,
    },
    {
      title: "Front-End Web Development",
      icon: mobile,
    },
    {
      title: "MongoDB",
      icon: mongodb,
    },
    {
      title: "Nodejs",
      icon: nodejs,
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
      title: "Freelance software engineer",
      company_name: "",
      icon: web,
      iconBg: "#383E56",
      date: "March 2023 - Present",
      points: [
        "Building and maintaining websites and applications using a range of technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Liaising with business owners and providing solutions to their business."
      ],
    },
    
    {
      title: "Higher Diploma in Computing - Sofware Development",
      company_name:"Dublin Business School, Dublin, Ireland.",
      icon: creator,
      iconBg: "#383E56",
      date: "March 2021 - February 2023.",
      points: [
        "Graduated with a First Class Honors.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Mike helped us build out a website for our teeth whitening business. This website now drives all of our online sales. Thank you. ",
      name: "Callum Muldoon",
      designation: "Owner",
      company: "Teeth Whitening Esses",
      image: "",
    },
    
  ];
  
  const projects = [
    {
      name: "Gym-record",
      description:

        "Gym-record is a web application that is a workout and bodyweight tracker. A user can track their workouts and bodyweight. They can also access a database of hundreds of exercises. Gym-record helps a person make progress in the gym in record time.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/MikeLynagh/gym-record",
    },
    {
      name: "Full-Stack Phonebook",
      description:
        "A React web application that works as a phonebook. A user can add a username, search the database and delete a username. This application is live to view.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "nodejs & Expressjs",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/MikeLynagh/phonebookapp",
    },
    {
      name: "PokeViewApp",
      description:
        "Web application that allows a user to login and search through a database of the original 150 Pokemon. MongoDB Atlas is used as the back-end database.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "yellow-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/MikeLynagh/pokeviewapp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };