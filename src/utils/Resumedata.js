import CycleIcon from "../assets/icons/CycleIcon";
import GamesIcon from "../assets/icons/GamesIcon";
import Reading from "../assets/icons/Reading";
import TravelIcon from "../assets/icons/TravelIcon";

export const ResumeObj = {
  profile: {
    profile_image:
      "https://cdn.pixabay.com/photo/2016/04/25/07/15/man-1351317_640.png",
    firstName: "Chandrakant Deore",
    designation: "Frontend Developer",
    email: "chandudeore2016@gmail.com",
    phone: "+91 9284714963",
    location: "Nashik, India",
    githubLink: "https://github.com/chandudeore",
    bio: "Hello! I'm Chandrakant Deore, a passionate frontend developer with a love for crafting engaging and user-friendly web experiences. With a background in computer application, I bring a combination of technical skills and creative thinking to every project.",
    achivements: [
      "Led or contributed significantly to the completion of a complex project within the specified timeline and budget.",
      "Successfully optimized code for a critical component, resulting in improved performance and reduced resource consumption.",
    ],
  },
  hobbies: [
    {
      icon: <Reading />,
      title: "Reading",
    },
    {
      icon: <GamesIcon />,
      title: "Video Games",
    },
    {
      icon: <CycleIcon />,
      title: "Cycling",
    },
  ],
  skills: [
    {
      title: "Reactjs",
      percent: "90",
    },
    {
      title: "Nodejs",
      percent: "80",
    },
    {
      title: "HTML/CSS",
      percent: "95",
    },
    {
      title: "Javascript",
      percent: "95",
    },
    {
      title: "Typescript",
      percent: "95",
    },
  ],
  languages: [
    {
      title: "Marathi",
      percent: "95",
    },
    {
      title: "Tamil",
      percent: "55",
    },
    {
      title: "English",
      percent: "40",
    },
  ],
  education: [
    {
      university: "Pune Unviersity",
      degree: "Master's Degree in Computer Application",
      cgpa: 9.0,
      year: "2019 - 2022",
    },
    {
      university: "Pune Unviersity",
      degree: "Bachelor's Degree in Computer Science",
      cgpa: 9.0,
      year: "2016 - 2019",
    },
  ],
  projects: [
    {
      year: "2022 - 2023",
      title: "Hype",
      director: "Creative Director",
      points: [
        "Contribute as a team member to desing beautiful UI's.",
        "Design cutomize application",
        "Use code resubility & optimization in code.",
      ],
    },
    {
      year: "2022 - 2023",
      title: "Hype Admin",
      director: "Creative Director",
      points: [
        "Contribute as a team member to desing beautiful UI's.",
        "Design cutomize dashboard UI",
        "Lorem ipsum dolor sit amet, consectetur adipiscing velit.",
      ],
    },
  ],
};
