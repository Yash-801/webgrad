import Calender from "../assets/Calender.svg";
import Doller from "../assets/Doller.svg";
import Location from "../assets/Location.svg";
import Time from "../assets/Time.svg";

const jobData = [
  {
    id: 1,
    header: {
      title: "WT - All candidates - Quick Apply",
      company: "at GradSearch",
      locationTags: [
        { tag: "Dubai", img: Location },
        { tag: "Remote", img: Time },
        { tag: "Part Time", img: Doller },
        { tag: "1-3 years experience", img: Calender },
      ],
    },
    jobDescription: "Please quick apply",
    skills: ["Python", "Java", "Project Management"],
    applicationExpiryDate: "2025-01-23",
    compensation: {
      type: "Monthly",
      range: "$20,000 - $40,000",
    },
    requirements: ["MSc Business Studies"],
    aboutCompany: "We provide a method to connect candidates and employers.",
  },
  {
    id: 2,
    header: {
      title: "Aftyn - all vis - quick apply",
      company: "at Aftrn Company",
      locationTags: [
        { tag: "Ashkāsham", img: Location },
        { tag: "Remote", img: Time },
        { tag: "Part Time", img: Doller },
        { tag: "1-3 years experience", img: Calender },
      ],
    },
    jobDescription: "a",
    skills: ["b"],
    applicationExpiryDate: "2025-01-15",
    compensation: {
      type: "Monthly",
      range: "$20,000 - $40,000",
    },
    requirements: ["C"],
    aboutCompany: "Branding.",
  },
  {
    id: 3,
    header: {
      title: "aftn all visible quick apply",
      company: "at Aftrn Company",
      locationTags: [
        { tag: "Al Ain City", img: Location },
        { tag: "Remote | In-Person | Flexible", img: Time },
        { tag: "Part Time", img: Doller },
        { tag: "4-6 years experience", img: Calender },
      ],
    },
    jobDescription: "Design,Branding",
    skills: ["Photoshop", "Illustrator", "Team Management"],
    applicationExpiryDate: "2025-04-18",
    compensation: {
      type: "Monthly",
      range: "$5000 - $10,000",
    },
    requirements: ["MSc Art and Design"],
    aboutCompany: "Branding.",
  },
  {
    id: 4,
    header: {
      title: "Job for all",
      company: "at Morn Org",
      locationTags: [
        { tag: "Dubai", img: Location },
        { tag: "Remote", img: Time },
        { tag: "Part Time", img: Doller },
        { tag: "1-3 years experience", img: Calender },
      ],
    },
    jobDescription: "job description,Consolidating contracts,Internal Audit",
    skills: ["Python", "Java"],
    applicationExpiryDate: "2025-05-23",
    compensation: {
      type: "Monthly",
      range: "$20000 - $40,000",
    },
    requirements: ["Bachelors in Design,Diploma in Management"],
    aboutCompany:
      "We provide services to construction companies. This is a business detail that is not including an industry. Banana Plantation..",
  },
];

export default jobData;
