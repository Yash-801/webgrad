import React from "react";
import companyLogo from "../assets/compny.jpg";
import BookmarkIcon from "../assets/Bookmark.svg";

const JobHeader = () => (
  <div className="p-5 flex flex-row w-full bg-white justify-between">
    <div className="flex flex-row">
      <div className="mr-5">
        <img src={companyLogo} alt="Company Logo" className="h-[70px] w-[70px]" />
      </div>
      <div className="flex flex-col">
        <p className="text-[25px] font-medium">WT - All candidates - Quick Apply</p>
        <p className="text-[13px] font-medium text-[#3d589b] mb-2">at gradsearch</p>
        <ul className="flex text-[13px] justify-start gap-3">
          {["Dubai", "Remote", "Part time", "1-3 years Experience"].map((item) => (
            <li key={item} className="bg-[#f0f8ff] py-[2px] px-2 rounded-[0.6rem]">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="flex">
      <img src={BookmarkIcon} alt="Bookmark" className="h-6 w-6 mt-3 mr-5" />
      <button className="bg-[#004473] text-white text-[13px] box-border">
        Quick Apply
      </button>
    </div>
  </div>
);

const JobSection = ({ title, children }) => (
  <div>
    <p className="text-xl font-medium">{title}</p>
    {children}
  </div>
);

const JobDetails = () => (
  <div className="bg-white p-[30px] flex flex-col gap-4">
    <JobSection title="Job description">
      <ul className="list-disc pl-5 text-[#71717a] text-[13px]">
        <li>Please quick apply</li>
      </ul>
    </JobSection>
    <JobSection title="Skills">
      <ul className="flex flex-row gap-3">
        {["Python", "Java", "Project Management"].map((skill) => (
          <li key={skill} className="bg-[#2083ca2c] text-[13px] font-medium rounded-[5px] p-[5px]">
            {skill}
          </li>
        ))}
      </ul>
    </JobSection>
    <JobSection title="Application Expiry Date">
      <p className="text-[13px]">2025-01-23</p>
    </JobSection>
    <JobSection title="Compensation">
      <ul className="list-disc pl-5 text-[#71717a] text-[13px]">
        <li>Monthly</li>
        <li>$20,000 - $40,000</li>
      </ul>
    </JobSection>
    <JobSection title="Requirements">
      <ul className="list-disc pl-5 text-[#71717a] text-[13px]">
        <li>MSc Business Studies</li>
      </ul>
    </JobSection>
    <JobSection title="About Company">
      <p className="text-[13px] text-[#71717a]">We provide a method to connect candidates and employers.</p>
    </JobSection>
  </div>
);

const CompanyDetails = () => (
  <div className="px-24 py-10 flex flex-col bg-[#fafafa] gap-7">
    <JobHeader />
    <JobDetails />
  </div>
);

export default CompanyDetails;
