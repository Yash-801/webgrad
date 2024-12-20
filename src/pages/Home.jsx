import React from "react";
import AiCover2 from "../assets/AiCover2.png";
import frontend from "../assets/frontend.png";
import car from "../assets/car.jpeg";
import compny from "../assets/compny.jpg";
import Dp from "../assets/Dp.jpg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const jobData = [
    {
      imgSrc: frontend,
      title: "Website WordPress",
      company: "Employer 2810",
      location: "test2, test 2",
      id: 1,
    },
    {
      imgSrc: frontend,
      title: "Frontend Developer",
      company: "Polaris Software Solution",
      location: "test",
      id: 2,
    },
    {
      imgSrc: frontend,
      title: "Android Developer",
      company: "Polaris Software Solution",
      location: "test2",
      id: 3,
    },
    {
      imgSrc: car,
      title: "QA Tester",
      company: "2910 Company",
      location: "test2",
      id: 4,
    },
    {
      imgSrc: compny,
      title: "WT - All candidates",
      company: "GradSearch",
      location: "Pls quick apply",
      id: 5,
    },
    {
      imgSrc: compny,
      title: "Shortlist Test",
      company: "Aftrn Company",
      location: "job des",
      id: 6,
    },
    {
      imgSrc: compny,
      title: "Aftyn - All Vis",
      company: "Aftrn Company",
      location: "a",
      id: 7,
    },
    {
      imgSrc: compny,
      title: "Aftn - Close Job",
      company: "Aftrn Company",
      location: "job descript",
      id: 8,
    },
  ];
  const navigate = useNavigate();
  const JobCard = ({ imgSrc, title, company, location, id }) => (
    <div
      className="jobcards p-4"
      onClick={() => navigate(`/company-detail/${id}`)}
    >
      <div className="flex items-center justify-between">
        <img src={imgSrc} alt={title} className="h-12 w-12" />
        <p className="fulltimetxt text-base">Full Time</p>
      </div>
      <div className="mt-3">
        <p className="cardinfo1">{title}</p>
        <p className="cardinfo2">at {company}</p>
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
            <button className="dash2btn mt-4 sm:mt-0">My Profile</button>
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
