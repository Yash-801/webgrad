import Bussins from "../assets/Bussins.jpg";
import Filter from "../assets/Filter.svg";
import downarrow from "../assets/downarrow.svg";
import Calender from "../assets/Calender.svg";
import Doller from "../assets/Doller.svg";
import Location from "../assets/Location.svg";
import Time from "../assets/Time.svg";
import Bookmark from "../assets/Bookmark.svg";
import FilterModal from "./FilterModal";
import { useState } from "react";

const jobData = [
  {
    id: 1,
    title: "WT- ALL candidates - Quick Apply",
    company: "Employer 2810",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 200000 - 250000",
    posted: "8 days ago",
    logo: { Bussins },
    description: "test2, test 2",
  },
  {
    id: 2,
    title: "Aftyn - all vis - quick apply",
    company: "Polaris Software Solution",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 20000 - 30000",
    posted: "8 days ago",
    logo: "https://via.placeholder.com/50",
    description: "test",
  },
  {
    id: 3,
    title: "Android Developer",
    company: "Polaris Software Solution",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 20000 - 30000",
    posted: "8 days ago",
    logo: "https://via.placeholder.com/50",
    description: "test",
  },
  {
    id: 4,
    title: "QA Tester",
    company: "2910 Company",
    location: "Songadh",
    type: "Part Time",
    salary: "BGN 20000 - 25600",
    posted: "18 days ago",
    logo: "https://via.placeholder.com/50",
    description: "test",
  },
  {
    id: 5,
    title: "Backend Developer",
    company: "Tech Corp",
    location: "Surat",
    type: "Full Time",
    salary: "Rs 300000 - 400000",
    posted: "5 days ago",
    logo: "https://via.placeholder.com/50",
    description: "backend development tasks",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Creative Solutions",
    location: "Surat",
    type: "Contract",
    salary: "Rs 25000 - 35000",
    posted: "12 days ago",
    logo: "https://via.placeholder.com/50",
    description: "UI/UX design",
  },
  {
    id: 7,
    title: "Project Manager",
    company: "Polaris Software Solution",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 50000 - 70000",
    posted: "15 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Managing projects",
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "DataCorp",
    location: "Surat",
    type: "Full Time",
    salary: "Rs 600000 - 700000",
    posted: "20 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Analyzing data",
  },
  {
    id: 9,
    title: "Customer Support",
    company: "Support Solutions",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 15000 - 20000",
    posted: "10 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Customer support tasks",
  },
  {
    id: 10,
    title: "Marketing Specialist",
    company: "Marketing Pros",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 40000 - 50000",
    posted: "25 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Marketing strategies",
  },
];

const JobList = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <div className="mx-4 sm:mx-8 lg:mx-32">
      <div className="mb-5 mt-7">
        <p className="mb-4 text-2xl font-medium sm:text-3xl lg:text-4xl">
          Find your
          <span className="text-[#5F97C5]"> new job </span>
          today
        </p>
        <p className="text-sm text-[#676970] sm:text-base">
          Browse through job listings targeted at interns and graduates.
        </p>
      </div>
      <div className="mb-4 flex w-full flex-col lg:flex-row">
        <div className="mb-4 flex-auto lg:mb-0 lg:w-1/2">
          <input
            type="text"
            placeholder="What job are you looking for?"
            className="h-10 w-full border border-gray-300 p-2 text-xs"
          />
        </div>
        <div className="flex w-full flex-col gap-4 sm:flex-row lg:w-auto">
          <input
            type="text"
            placeholder="Skill"
            className="h-10 w-full border border-gray-300 p-2 text-xs sm:w-auto"
          />
          <input
            type="text"
            placeholder="Location"
            className="h-10 w-full border border-gray-300 p-2 text-xs sm:w-auto"
          />
          <button className="h-max w-max bg-[#004473] px-5 py-2.5 text-sm text-white">
            Search Job
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-[#FAFAFA] p-6 lg:flex-row">
        <div className="flex-auto lg:w-3/4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-2xl font-medium sm:text-3xl">10 Jobs</p>
            <button
              onClick={toggleFilter}
              className="flex items-center space-x-2 rounded-lg border border-[#d5d5d5] px-4 py-1 sm:space-x-6"
            >
              <div className="flex items-center">
                <img src={Filter} alt="filter" className="h-5 w-5" />
                <span className="ml-1 text-sm">Filter</span>
              </div>
              <div>
                <img src={downarrow} alt="downarrow" className="h-5 w-5" />
              </div>
            </button>
            <FilterModal isOpen={isFilterOpen} onClose={toggleFilter} />
          </div>
          {jobData.map((job) => (
            <div
              key={job.id}
              className="mb-4 flex cursor-pointer flex-col items-start space-y-4 rounded-lg border bg-white p-4 shadow-md sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"
            >
              <img
                src={Bussins}
                alt={`${job.title} logo`}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div className="flex-1">
                <h2 className="text-lg font-medium sm:text-xl">{job.title}</h2>
                <p className="text-sm text-[#333338]">{job.company}</p>
                <div className="my-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                  <span className="flex items-center rounded-md bg-[#F1F1F1] px-2 py-1">
                    <img
                      src={Location}
                      alt="Location"
                      className="h-4 w-4 pr-1"
                    />
                    {job.location}
                  </span>
                  <span className="flex items-center rounded-md bg-[#F1F1F1] px-2 py-1">
                    <img src={Time} alt="Time" className="h-4 w-4" />
                    {job.type}
                  </span>
                  <span className="flex items-center rounded-md bg-[#F1F1F1] px-2 py-1">
                    <img src={Doller} alt="Doller" className="mr-1 h-4 w-4" />
                    {job.salary}
                  </span>
                  <span className="flex items-center rounded-md bg-[#F1F1F1] px-2 py-1">
                    <img
                      src={Calender}
                      alt="Calender"
                      className="mr-1 h-4 w-4"
                    />
                    {job.posted}
                  </span>
                </div>
                <p className="mb-4 text-sm text-[#707079]">{job.description}</p>
              </div>
              <button
                aria-label="Bookmark this job"
                className="text-gray-400 hover:text-gray-600"
              >
                <img src={Bookmark} alt="Bookmark" className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 lg:w-1/4">
          <div className="bg-white p-4">
            <div className="mb-4">
              <p className="text-lg font-medium sm:text-xl">
                Email me for jobs
              </p>
            </div>
            <p className="text-xs text-[#676970] sm:text-sm">
              Subscribe to our weekly newsletter with jobs applicable to you.
            </p>
            <button className="mt-4 w-full rounded-lg bg-[#004473] py-2 text-sm text-white hover:bg-[#5498F1]">
              Subscribe
            </button>
          </div>
          <div className="bg-white p-4">
            <div className="mb-4">
              <p className="text-lg font-medium sm:text-xl">Invite Friends</p>
            </div>
            <p className="text-xs text-[#676970] sm:text-sm">
              Invite your friends to GradSearch to help them get hired
            </p>
            <button className="mt-4 w-full rounded-lg bg-[#004473] py-2 text-sm text-white hover:bg-[#5498F1]">
              Invite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobList;
