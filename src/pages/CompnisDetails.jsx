import React from "react";
import companyLogo from "../assets/compny.jpg";
import BookmarkIcon from "../assets/Bookmark.svg";
import jobData from "../Json/jobDetails.json";
import { useParams } from "react-router-dom";

const JobHeader = ({ header }) => {
  return (
    <div className="p-5 flex flex-row w-full bg-white justify-between">
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
          <p className="text-[13px] font-medium text-[#3d589b] mb-2">
            {header.company}
          </p>
          <ul className="flex text-[13px] justify-start gap-3">
            {header.locationTags.map((tag) => (
              <li
                key={tag}
                className="bg-[#f0f8ff] py-[2px] px-2 rounded-[0.6rem]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-row">
        <img src={BookmarkIcon} alt="Bookmark" className="h-6 w-6 mt-3 mr-5" />
        <button className="h-max w-max text-[13px] py-2 px-7 bg-[#004473] rounded-md text-white">
          Quick Apply
        </button>
      </div>
    </div>
  );
};

const JobSection = ({ title, children }) => {
  return (
    <div>
      <p className="text-xl font-medium mb-4">{title}</p>
      {children}
    </div>
  );
};

const JobDetails = () => {
  return (
    <div className="bg-white p-[30px] flex flex-col gap-4">
      <JobSection title="Job description">
        <ul className="list-disc pl-5 text-[#71717a] text-[13px]">
          <li>{jobData.jobDescription}</li>
        </ul>
      </JobSection>

      <JobSection title="Skills">
        <ul className="flex flex-row gap-3">
          {jobData.skills.map((skill) => (
            <li
              key={skill}
              className="bg-[#2083ca2c] text-[13px] font-medium rounded-[5px] p-[5px]"
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
        <ul className="list-disc pl-5 text-[#71717a] text-[13px]">
          <li>{jobData.compensation.type}</li>
          <li>{jobData.compensation.range}</li>
        </ul>
      </JobSection>

      <JobSection title="Requirements">
        <ul className="list-disc pl-5 text-[#71717a] text-[13px]">
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
    <div className="px-24 py-10 flex flex-col bg-[#fafafa] gap-7">
      <JobHeader header={jobData.header} />
      <JobDetails />
    </div>
  );
};

export default JobPage;
