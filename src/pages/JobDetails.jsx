import React from "react";
import companyLogo from "../assets/compny.jpg";
import BookmarkIcon from "../assets/Bookmark.svg";
import jobData from "../Json/jobDetails";
import { useParams } from "react-router-dom";

const JobSection = ({ title, children }) => {
  return (
    <div>
      <p className="mb-3 text-lg font-medium md:mb-4 md:text-xl">{title}</p>
      {children}
    </div>
  );
};

const JobDetails = ({ job }) => {
  return (
    <div className="flex flex-col gap-3 bg-white p-4 md:gap-4 md:p-[30px]">
      <JobSection title="Job Description">
        <ul className="list-disc pl-5 text-[12px] text-[#71717a] md:text-[13px]">
          <li>{job.jobDescription || "Description not available."}</li>
        </ul>
      </JobSection>

      <JobSection title="Skills">
        <ul className="flex flex-wrap gap-2 md:gap-3">
          {job.skills && job.skills.length > 0
            ? job.skills.map((skill, index) => (
                <li
                  key={index}
                  className="rounded-[5px] bg-[#2083ca2c] p-[5px] text-[12px] font-medium md:text-[13px]"
                >
                  {skill}
                </li>
              ))
            : "No skills specified."}
        </ul>
      </JobSection>

      <JobSection title="Application Expiry Date">
        <p className="text-[12px] md:text-[13px]">
          {job.applicationExpiryDate || "Not specified"}
        </p>
      </JobSection>

      <JobSection title="Compensation">
        <ul className="list-disc pl-5 text-[12px] text-[#71717a] md:text-[13px]">
          <li>{job.compensation?.type || "Type not specified"}</li>
          <li>{job.compensation?.range || "Range not specified"}</li>
        </ul>
      </JobSection>

      <JobSection title="Requirements">
        <ul className="list-disc pl-5 text-[12px] text-[#71717a] md:text-[13px]">
          {job.requirements && job.requirements.length > 0
            ? job.requirements.map((req, index) => <li key={index}>{req}</li>)
            : "No requirements specified."}
        </ul>
      </JobSection>

      <JobSection title="About Company">
        <p className="text-[12px] text-[#71717a] md:text-[13px]">
          {job.aboutCompany || "Company information not available."}
        </p>
      </JobSection>
    </div>
  );
};

const JobPage = () => {
  const { id } = useParams();
  const job = jobData.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-medium">Job not found!</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 bg-[#fafafa] px-6 py-6 md:gap-7 md:px-24 md:py-10">
      <JobHeader header={job.header} />
      <JobDetails job={job} />
    </div>
  );
};


const JobHeader = ({ header }) => {
  return (
    <div className="flex w-full flex-col justify-between bg-white p-5 md:flex-row">
      <div className="flex flex-col md:flex-row">
        <div className="mb-4 md:mb-0 md:mr-5">
          <img
            src={companyLogo}
            alt="Company Logo"
            className="h-[70px] w-[70px]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-[20px] font-medium md:text-[25px]">
            {header.title || "Job Title Not Available"}
          </p>
          <p className="mb-2 text-[12px] font-medium text-[#3d589b] md:text-[13px]">
            {header.company || "Company Name Not Available"}
          </p>
          <ul className="flex flex-wrap gap-2 text-[12px] md:gap-3 md:text-[13px]">
            {header.locationTags.map((location, index) => (
              <li
                key={index}
                className="flex items-center rounded-[0.6rem] bg-[#f0f8ff] px-2 py-[2px]"
              >
                {location.tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-start md:mt-0 md:justify-end">
        <img
          src={BookmarkIcon}
          alt="Bookmark"
          className="mr-3 mt-1 h-5 w-5 md:mr-5 md:mt-3 md:h-6 md:w-6"
        />
        <button className="h-max rounded-md bg-[#004473] px-4 py-2 text-[12px] text-white md:text-[13px]">
          Quick Apply
        </button>
      </div>
    </div>
  );
};

export default JobPage;
