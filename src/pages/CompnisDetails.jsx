import React from "react";
import companyLogo from "../assets/compny.jpg";
import BookmarkIcon from "../assets/Bookmark.svg";
import jobData from "../Json/jobDetails.json";
import { useParams } from "react-router-dom";

const JobHeader = ({ header }) => {
  return (
    <div className="flex w-full flex-row justify-between bg-white p-5">
      <div className="flex flex-row">
        <div className="mr-5">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="h-[70px] w-[70px]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[25px] font-medium">{header.title}</p>
          <p className="mb-2 text-[13px] font-medium text-[#3d589b]">
            {header.company}
          </p>
          <ul className="flex justify-start gap-3 text-[13px]">
            {header.locationTags.map((tag) => (
              <li
                key={tag}
                className="rounded-[0.6rem] bg-[#f0f8ff] px-2 py-[2px]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-row">
        <img src={BookmarkIcon} alt="Bookmark" className="mr-5 mt-3 h-6 w-6" />
        <button className="h-max w-max rounded-md bg-[#004473] px-7 py-2 text-[13px] text-white">
          Quick Apply
        </button>
      </div>
    </div>
  );
};

const JobSection = ({ title, children }) => {
  return (
    <div>
      <p className="mb-4 text-xl font-medium">{title}</p>
      {children}
    </div>
  );
};

const JobDetails = () => {
  return (
    <div className="flex flex-col gap-4 bg-white p-[30px]">
      <JobSection title="Job description">
        <ul className="list-disc pl-5 text-[13px] text-[#71717a]">
          <li>{jobData.jobDescription}</li>
        </ul>
      </JobSection>

      <JobSection title="Skills">
        <ul className="flex flex-row gap-3">
          {jobData.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-[5px] bg-[#2083ca2c] p-[5px] text-[13px] font-medium"
            >
              {skill}
            </li>
          ))}
        </ul>
      </JobSection>

      <JobSection title="Application Expiry Date">
        <p className="text-[13px]">{jobData.applicationExpiryDate}</p>
      </JobSection>

      <JobSection title="Compensation">
        <ul className="list-disc pl-5 text-[13px] text-[#71717a]">
          <li>{jobData.compensation.type}</li>
          <li>{jobData.compensation.range}</li>
        </ul>
      </JobSection>

      <JobSection title="Requirements">
        <ul className="list-disc pl-5 text-[13px] text-[#71717a]">
          {jobData.requirements.map((req) => (
            <li key={req}>{req}</li>
          ))}
        </ul>
      </JobSection>

      <JobSection title="About Company">
        <p className="text-[13px] text-[#71717a]">{jobData.aboutCompany}</p>
      </JobSection>
    </div>
  );
};

const JobPage = () => {
  const { id } = useParams();

  return (
    <div className="flex flex-col gap-7 bg-[#fafafa] px-24 py-10">
      <JobHeader header={jobData.header} />
      <JobDetails />
    </div>
  );
};

export default JobPage;
