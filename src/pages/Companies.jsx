import React from "react";
import Location from "../assets/Location.svg";
import Defult from "../assets/Defult.png";
import Car from "../assets/Car.jpeg";
import TwoTen from "../assets/TwoTen.png";
import { useState } from "react";
import Car2 from "../assets/Car2.jpeg";
import EmployerDash from "../assets/EmployerDash.png";
import Aeroplan from "../assets/Aeroplan.jpg";
import { useNavigate } from "react-router-dom";

const jobData = [
  {
    id: 1,
    title: "0811 company",
    location: "Surat",
    salary: "honak12205@lineacr.com",
    Image: Car,
    description:
      "Education and Health services, Financial Activities,Logistics and Transportation,Professional and business services,Telecommunications",
  },
  {
    id: 2,
    location: "",
    salary: "employer0711@ypmail.com",
    Image: Defult,
  },
  {
    id: 3,
    location: "",
    salary: "employer0711@ypmail.com",
    Image: Defult,
  },
  {
    id: 4,
    location: "",
    salary: "employer0711@ypmail.com",
    Image: Defult,
  },

  {
    id: 5,
    title: "0811 company",
    location: "Surat",
    salary: "employer2910@yopmail.com",
    Image: Car,
    description:
      "Education and Health services, Financial Activities,Mechanical and Electrical Engineering,Financial Services,Trade, Transportation, and Utilities,Natural Resources and Mining,Leisure and Hospitality,Computers and Information",
  },
  {
    id: 6,
    title: "Employer 2810",
    location: "Surat",
    salary: "employer2910@yopmail.com",
    Image: TwoTen,
    description:
      "Education and Health services, Financial Activities,Mechanical and Electrical Engineering,Financial Services,Trade, Transportation, and Utilities,Natural Resources and Mining,Leisure and Hospitality,Computers and Information",
  },
  {
    id: 7,
    title: "Company 2510",
    location: "Surat",
    salary: "employer2510@yopmail.com",
    Image: Car,
    description:
      "Education and Health services, Financial Activities,Mechanical and Electrical Engineering,Financial Services,Trade, Transportation, and Utilities,Natural Resources and Mining,Leisure and Hospitality,Computers and Information",
  },
  {
    id: 8,
    title: "Polaris Software Solution",
    location: "Ashkāsham",
    salary: "employer@yopmail.com",
    Image: Defult,
    description: "Education and Health services",
  },
  {
    id: 9,
    location: "",
    salary: "employer@ypmail.com",
    Image: Defult,
  },
  {
    id: 10,
    title: "Relience",
    location: "Ashkāsham",
    salary: "employer@yopmail.com",
    Image: Defult,
    description: "Education and Health services, Financial Activities",
  },
  {
    id: 11,
    location: "",
    salary: "tivex62352@jameagle.com",
    Image: Defult,
  },
  {
    id: 12,
    location: "",
    salary: "ririxo4315@advitize.com",
    Image: Defult,
  },
  {
    id: 13,
    title: "VRL LOGISTICS",
    location: "Surat",
    salary: "employerisan@yopmail.com",
    Image: Car2,
    description:
      "Education and Health services, Construction,Computers and Information Technology,Financial Activities",
  },
  {
    id: 14,
    location: "",
    salary: "comef80527@stikezz.com",
    Image: Defult,
  },

  {
    id: 15,
    title: "Encodework system",
    location: "Ashkāsham",
    salary: "rocaj22328@chainds.com",
    Image: EmployerDash,
    description: "Education and Health services, Financial Activities",
  },
  {
    id: 16,
    location: "",
    salary: "myfansa@hotmail.com",
    Image: Defult,
  },
  {
    id: 17,
    title: "Company 2510",
    location: "Surat",
    salary: "employer2510@yopmail.com",
    Image: Aeroplan,
    description:
      "Education and Health services, Financial Activities,Mechanical and Electrical Engineering,Financial Services,Trade, Transportation, and Utilities,Natural Resources and Mining,Leisure and Hospitality,Computers and Information",
  },
  {
    id: 18,
    title: "Polaris Software Solution",
    location: "Ashkāsham",
    salary: "employer@yopmail.com",
    Image: EmployerDash,
    description: "Education and Health services",
  },
  {
    id: 19,
    location: "",
    salary: "employer@ypmail.com",
    Image: Defult,
  },
  {
    id: 20,
    title: "Relience",
    location: "Ashkāsham",
    salary: "employer@yopmail.com",
    Image: Defult,
    description: "Education and Health services, Financial Activities",
  },
  {
    id: 21,
    title: "0811 company",
    location: "Surat",
    salary: "honak12205@lineacr.com",
    Image: Car,
    description:
      "Education and Health services, Financial Activities,Logistics and Transportation,Professional and business services,Telecommunications",
  },
  {
    id: 22,
    location: "",
    salary: "employer0711@ypmail.com",
    Image: Defult,
  },
  {
    id: 23,
    location: "",
    salary: "employer0711@ypmail.com",
    Image: Defult,
  },
  {
    id: 24,
    location: "",
    salary: "employer0711@ypmail.com",
    Image: Defult,
  },

  {
    id: 25,
    title: "0811 company",
    location: "Surat",
    salary: "employer2910@yopmail.com",
    Image: Car,
    description:
      "Education and Health services, Financial Activities,Mechanical and Electrical Engineering,Financial Services,Trade, Transportation, and Utilities,Natural Resources and Mining,Leisure and Hospitality,Computers and Information",
  },
  {
    id: 26,
    title: "Employer 2810",
    location: "Surat",
    salary: "employer2910@yopmail.com",
    Image: TwoTen,
    description:
      "Education and Health services, Financial Activities,Mechanical and Electrical Engineering,Financial Services,Trade, Transportation, and Utilities,Natural Resources and Mining,Leisure and Hospitality,Computers and Information",
  },
  {
    id: 27,
    title: "Company 2510",
    location: "Surat",
    salary: "employer2510@yopmail.com",
    Image: Car,
    description:
      "Education and Health services, Financial Activities,Mechanical and Electrical Engineering,Financial Services,Trade, Transportation, and Utilities,Natural Resources and Mining,Leisure and Hospitality,Computers and Information",
  },
  {
    id: 28,
    title: "Polaris Software Solution",
    location: "Ashkāsham",
    salary: "employer@yopmail.com",
    Image: Defult,
    description: "Education and Health services",
  },
  {
    id: 29,
    location: "",
    salary: "employer@ypmail.com",
    Image: Defult,
  },
  {
    id: 30,
    title: "Relience",
    location: "Ashkāsham",
    salary: "employer@yopmail.com",
    Image: Defult,
    description: "Education and Health services, Financial Activities",
  },
];

const Companies = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const startIndex = (currentPage - 1) * pageSize;
  const currentCompanies = jobData.slice(startIndex, startIndex + pageSize);

  const nextPage = () => {
    if (currentPage * pageSize < jobData.length) {
      setCurrentPage(currentPage + 1);
      scrollToTop();
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      scrollToTop();
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-32">
      <div className="mb-5 mt-7 text-center md:text-left">
        <p className="mb-4 text-2xl font-medium sm:text-3xl md:text-4xl">
          Find your
          <span className="text-[#5F97C5]"> new job </span>
          today
        </p>
        <p className="text-sm text-[#676970] sm:text-base">
          Browse through job listings targeted at interns and graduates.
        </p>
      </div>

      <div className="flex flex-col bg-[#FAFAFA] p-4 sm:p-6 lg:flex-row">
        <div className="w-full flex-auto lg:w-3/4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-xl font-medium sm:text-2xl md:text-3xl">30</p>
          </div>
          {currentCompanies.map((job) => (
            <div
              onClick={() => navigate(`/Compni-Detail /${job.id}`)}
              key={job.id}
              className="mb-4 flex cursor-pointer flex-col items-start space-x-0 space-y-4 rounded-lg border bg-white p-4 shadow-md md:flex-row md:space-x-4 md:space-y-0"
            >
              <img
                src={job.Image}
                alt={`${job.title} logo`}
                className="h-16 w-16 rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-lg font-medium sm:text-xl">{job.title}</h2>
                <p className="text-sm text-[#333338]">{job.company}</p>
                <div className="my-3 flex flex-wrap items-center space-x-3 text-xs text-gray-500">
                  <span className="flex items-center rounded-md bg-[#F1F1F1] px-2 py-1">
                    <img
                      src={Location}
                      alt="Location"
                      className="h-4 w-4 pr-1"
                    />
                    {job.location}
                  </span>

                  <span className="flex items-center rounded-md bg-[#F1F1F1] px-2 py-1">
                    {job.salary}
                  </span>
                </div>
                <p className="mb-4 text-xs text-[#707079] sm:text-clip sm:text-sm">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
          <div className="mt-6 flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <button
                onClick={prevPage}
                className="rounded-md bg-[#004473] px-4 py-2 text-white hover:bg-[#5498F1]"
              >
                Previous
              </button>

              <span className="text-sm sm:text-base md:text-xl">
                Page {currentPage} of {Math.ceil(jobData.length / pageSize)}
              </span>

              <button
                onClick={nextPage}
                className="rounded-md bg-[#004473] px-4 py-2 text-white hover:bg-[#5498F1]"
              >
                Next
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full lg:ml-5 lg:mt-0 lg:w-1/4">
          <div className="mb-4 bg-white p-4">
            <div className="mb-4">
              <p className="text-lg font-medium sm:text-xl">
                Email me for jobs
              </p>
            </div>
            <div className="mb-4">
              <p className="text-xs text-[#676970] sm:text-sm">
                Subscribe to our weekly newsletter with jobs applicable to you.
              </p>
            </div>
            <div className="w-full">
              <button className="w-full rounded-lg bg-[#004473] py-2 text-sm text-white hover:bg-[#5498F1]">
                Subscribe
              </button>
            </div>
          </div>
          <div className="bg-white p-4">
            <div className="mb-4">
              <p className="text-lg font-medium sm:text-xl">Invite Friends</p>
            </div>
            <div className="mb-4">
              <p className="text-xs text-[#676970] sm:text-sm">
                Invite your friends to GradSearch to help them get hired
              </p>
            </div>
            <div className="w-full">
              <button className="w-full rounded-lg bg-[#004473] py-2 text-sm text-white hover:bg-[#5498F1]">
                Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
