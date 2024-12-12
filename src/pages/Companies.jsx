import React from "react";
import Filter from "../assets/Filter.svg";
import downarrow from "../assets/downarrow.svg";
import Location from "../assets/Location.svg";
import Defult from "../assets/Defult.png";
import Car from "../assets/Car.jpeg";
import TwoTen from "../assets/TwoTen.png";
import { useState, useEffect } from "react";
import Car2 from "../assets/Car2.jpeg";
import EmployerDash from "../assets/EmployerDash.png";
import Aeroplan from "../assets/Aeroplan.jpg";

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
    <div className="mx-32">
      <div className="mt-7 mb-5">
        <p className="text-4xl font-medium mb-4">
          Find your
          <span className="text-[#5F97C5]"> new job </span>
          today
        </p>
        <p className="text-[#676970]">
          Browse through job listings targeted at interns and graduates.
        </p>
      </div>

      <div className="p-6 bg-[#FAFAFA] flex flex-row">
        <div className="w-3/4 flex-auto">
          <div className="mb-2 flex justify-between items-center">
            <p className="text-3xl font-medium">30</p>
          </div>
          {currentCompanies.map((job) => (
            <div
              key={job.id}
              className="border p-4 rounded-lg shadow-md flex items-start space-x-4 mb-4 bg-white cursor-pointer"
            >
              <img
                src={job.Image}
                alt={`${job.title} logo`}
                className="w-16 h-16  rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-xl font-medium">{job.title}</h2>
                <p className="text-sm text-[#333338]">{job.company}</p>
                <div className="flex items-center space-x-3 text-gray-500 text-sm my-3">
                  <span className="flex items-center text-xs bg-[#F1F1F1] py-1 px-2 rounded-md">
                    <img
                      src={Location}
                      alt="Location"
                      className="h-4 w-4 pr-1 "
                    />
                    {job.location}
                  </span>

                  <span className="flex items-center bg-[#F1F1F1] py-1 px-2 rounded-md text-xs">
                    {job.salary}
                  </span>
                </div>
                <p className=" text-xs mb-4 text-[#707079]">
                  {job.description}
                </p>
              </div>
            </div>
          ))}
          <div className="flex justify-center mt-6 items-center">
            <div className="flex items-center space-x-3">
              <button
                onClick={prevPage}
                className="px-4 py-2 bg-[#004473] text-white rounded-md"
              >
                Previous
              </button>

              <span className="text-xl">
                Page {currentPage} of {Math.ceil(jobData.length / pageSize)}
              </span>

              <button
                onClick={nextPage}
                className="px-4 py-2 bg-[#004473] text-white rounded-md"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 ml-5">
          <div className="p-4 bg-white mb-4">
            <div className="mb-4">
              <p className="text-xl font-medium">Email me for jobs</p>
            </div>
            <div className="mb-4">
              <p className="text-[#676970] text-xs">
                Subscribe to our weekly newsletter with jobs applicable to you.
              </p>
            </div>
            <div className="w-full">
              <button className="text-sm bg-[#004473] py-2 w-full hover:bg-[#5498F1]  text-white rounded-lg">
                Subscribe
              </button>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="mb-4">
              <p className="text-xl font-medium">Invite Friends</p>
            </div>
            <div className="mb-4">
              <p className="text-[#676970] text-xs">
                Invite your friends to GradSearch to help them get hired{" "}
              </p>
            </div>
            <div className="w-full">
              <button className="text-sm bg-[#004473] py-2 w-full hover:bg-[#5498F1]  text-white rounded-lg">
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
