import CycleIcon from "../assets/icons/CycleIcon";
import GamesIcon from "../assets/icons/GamesIcon";
import Reading from "../assets/icons/Reading";
import TravelIcon from "../assets/icons/TravelIcon";

export const ResumeObj = {
  profile: {
    firstName: "Chandrakant Deore",
    designation: "Graphic Designer",
    email: "abc@gmail.com",
    phone: "+91 9284714963",
    location: "Pune, India",
    githubLink: "https://github.com/",
    bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into    electronic typesetting, remaining essentially unchanged. It was",
    achivements:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  },
  hobbies: [
    {
      icon: <TravelIcon />,
      title: "Travel",
    },
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
      title: "PhotoShop",
      percent: "65",
    },
    {
      title: "Creative Writing",
      percent: "60",
    },
    {
      title: "Web Designing",
      percent: "68",
    },
    {
      title: " Illustrator",
      percent: "65",
    },
  ],
  languages: [
    {
      title: "Hindi",
      percent: "65",
    },
    {
      title: "English",
      percent: "50",
    },
    {
      title: "Marathi",
      percent: "68",
    },
  ],
  education: [
    {
      university: "Pune Unviersity",
      degree: "Bachelor's Degree in Graphic",
      cgpa: 7.0,
      year: "2012 - 2016",
    },
    {
      university: "Pune Unviersity",
      degree: "Master's Degree in Graphic",
      cgpa: 7.0,
      year: "2016 - 2018",
    },
    {
      university: "Pune Unviersity",
      degree: "Master's",
      cgpa: 7.0,
      year: "2018 - 2020",
    },
  ],
  projects: [
    {
      year: "2019-2021",
      title: "Project Title",
      director: "Creative Director",
      points: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing velit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing velit.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing velit.",
      ],
    },
  ],
};
