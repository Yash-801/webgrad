import React from "react";
import AiCover2 from "../assets/AiCover2.png";
import compny from "../assets/compny.jpg";
import Dp from "../assets/Dp.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const jobData = [
    {
      imgSrc: compny,
      title: "WT - All candidates - Quick Apply",
      company: "at GradSearch",
      location: "Ples quick apply",
      id: 1,
    },
    {
      imgSrc: compny,
      title: "Aftyn - all vis - quick apply",
      company: "at aftern compny",
      location: "a",
      id: 2,
    },
    {
      imgSrc: compny,
      title: "aftn all visible quick apply",
      company: "at aftern compny",
      location: "Design,Branding",
      id: 3,
    },
    {
      imgSrc: compny,
      title: "Job for all",
      company: "at Morn Org",
      location: "job description,Consolidating contracts,internal audit",
      id: 4,
    },
  ];
  const navigate = useNavigate();

  const JobCard = ({ imgSrc, title, company, location, id }) => (
    <div
      className="jobcards p-4"
      key={id}
      onClick={() => navigate(`/job-detail/${id}`)}
    >
      <div className="flex items-center justify-between">
        <img src={imgSrc} alt={title} className="h-12 w-12" />
        <p className="fulltimetxt text-base">Full Time</p>
      </div>
      <div className="mt-3">
        <p className="cardinfo1 line-clamp-1">{title}</p>
        <p className="cardinfo2">{company}</p>
        <p className="cardinfo3">{location}</p>
      </div>
      <button className="cardinfobtn">More Details</button>
    </div>
  );
  return (
    <>
      <div className="dashboard">
        <div className="dashcontaintant flex flex-col">
          <div className="mt-4">
            <h1 className="text-3xl font-medium">Welcome Home Zadafiya Yash</h1>
            <img src={AiCover2} alt="AiCover2" className="mt-9 h-auto w-full" />
            <div className="my-7 flex flex-col sm:flex-row">
              <img
                src={Dp}
                alt="logo"
                className="profileimg2 h-24 w-24 object-cover"
              />
              <div className="ml-0 mt-4 flex flex-col justify-evenly sm:ml-4 sm:mt-0">
                <p className="profileinfop1 text-2xl font-medium">
                  Zadafiya Yash
                </p>
                <p className="p2 text-sm">student</p>
                <p className="p2 text-sm">IT Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center bg-zinc-50">
        <div className="desh2 w-full max-w-7xl">
          <div className="mt-3 flex flex-col items-center justify-between bg-white p-5 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="text-3xl font-medium">Profile Complete 70%</p>
              <p className="dash2 mt-5 pt-2 text-sm">
                Your profile is incomplete. Complete your missing items to
                improve your chances of securing a dream role.
              </p>
            </div>
            <button
              className="dash2btn mt-4 sm:mt-0"
              onClick={() => {
                navigate("/profile");
              }}
            >
              My Profile
            </button>
          </div>

          <div className="mt-3 bg-white p-5">
            <p className="text-3xl font-medium">Job Application Status</p>
            <p className="dash2 mt-5 pt-2 text-sm">
              Here's some recent jobs applied by you
            </p>
            <div className="mb-8 mt-10 flex items-center justify-center">
              <span className="text-lg font-medium text-zinc-500">
                No Data Available
              </span>
            </div>
          </div>

          <div className="mt-3 flex flex-col justify-center bg-white p-5">
            <p className="mb-4 text-3xl font-medium">Recommended Jobs</p>
            <p className="mb-4">
              Here are some jobs that are a close match with your profile
            </p>
            <div className="jobcontanir grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {jobData.map((job, index) => (
                <JobCard
                  key={index}
                  imgSrc={job.imgSrc}
                  title={job.title}
                  company={job.company}
                  location={job.location}
                  id={job.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
