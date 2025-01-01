import Bussins from "../assets/Bussins.jpg";
import Filter from "../assets/Filter.svg";
import downarrow from "../assets/downarrow.svg";
import Bookmark from "../assets/Bookmark.svg";
import FilterModal from "../components/FilterModal";
import { useState } from "react";
import jobData from "../Json/jobDetails";
import { useNavigate } from "react-router-dom";

const FindJobs = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const navigate = useNavigate();

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
        <div className="mb-4 lg:mb-0 lg:w-[44%]">
          <input
            placeholder="What position are you looking for?"
            className="h-10 w-full border border-gray-300 p-2 text-xs"
          />
        </div>
        <div className="flex w-full flex-col gap-4 sm:flex-row min-[1023.20px]:ml-4 lg:w-auto">
          <input
            placeholder="Skills"
            className="h-10 w-full border border-gray-300 p-2 text-xs sm:w-auto"
          />
          <input
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
            <p className="text-2xl font-medium sm:text-3xl">
              {jobData.length} Jobs
            </p>
            <button
              // type="button"
              // class="btn btn-primary"
              // data-bs-toggle="modal"
              // data-bs-target="#staticBackdrop"
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
              onClick={() => navigate(`/job-detail/${job.id}`)}
              key={job.id}
              className="mb-4 flex cursor-pointer flex-col items-start space-y-4 rounded-lg border bg-white p-4 shadow-md sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0"
            >
              <img
                src={Bussins}
                alt={`${job.header.title} logo`}
                className="w-14sm:h-16 h-14 rounded-full object-cover sm:w-16"
              />
              <div className="flex-1">
                <h2 className="text-lg font-medium sm:text-xl">
                  {job.header.title}
                </h2>
                <p className="text-sm text-[#333338]">{job.header.company}</p>
                <div className="my-3 flex flex-wrap items-center gap-2 text-sm text-gray-500">
                  {job.header.locationTags.map((location, index) => (
                    <span
                      key={index}
                      className="flex items-center rounded-md bg-[#F1F1F1] px-2 py-1"
                    >
                      <img
                        src={location.img}
                        alt={location.tag}
                        className="mr-1 h-4 w-4"
                      />
                      {location.tag}
                    </span>
                  ))}
                </div>
                <p className="mb-4 text-sm text-[#707079]">
                  {job.jobDescription}
                </p>
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
              Invite your friends to GradSearch to help them get hired.
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

export default FindJobs;
