import React from "react";
import AiCover2 from "../assets/AiCover2.png";
import frontend from "../assets/frontend.png";
import car from "../assets/car.jpeg";
import compny from "../assets/compny.jpg";
const JobCard = ({ imgSrc, title, company, location }) => (
  <div className="jobcards p-4">
    <div className="flex justify-between items-center">
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

const Home = () => {
  const jobData = [
    {
      imgSrc: frontend,
      title: "Website WordPress",
      company: "Employer 2810",
      location: "test2, test 2",
    },
    {
      imgSrc: frontend,
      title: "Frontend Developer",
      company: "Polaris Software Solution",
      location: "test",
    },
    {
      imgSrc: frontend,
      title: "Android Developer",
      company: "Polaris Software Solution",
      location: "test2",
    },
    {
      imgSrc: car,
      title: "QA Tester",
      company: "2910 Company",
      location: "test2",
    },
    {
      imgSrc: compny,
      title: "WT - All candidates",
      company: "GradSearch",
      location: "Pls quick apply",
    },
    {
      imgSrc: compny,
      title: "Shortlist Test",
      company: "Aftrn Company",
      location: "job des",
    },
    {
      imgSrc: compny,
      title: "Aftyn - All Vis",
      company: "Aftrn Company",
      location: "a",
    },
    {
      imgSrc: compny,
      title: "Aftn - Close Job",
      company: "Aftrn Company",
      location: "job descript",
    },
  ];

  return (
    <>
      <div className="dashboard">
        <div className="dashcontaintant flex flex-col">
          <div className="mt-4">
            <h1 className="font-medium text-3xl">Welcome Home Zadafiya Yash</h1>
            <img src={AiCover2} alt="AiCover2" className="h-72 w-full mt-9" />
            <div className="flex my-7">
              <img
                src={AiCover2}
                alt="logo"
                className="profileimg2 h-24 w-24 object-cover"
              />
              <div className="flex justify-evenly flex-col ml-4">
                <p className="profileinfop1 font-medium text-2xl">
                  Zadafiya Yash
                </p>
                <p className="p2 text-sm">student</p>
                <p className="p2 text-sm">IT Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-zinc-50 flex justify-center">
        <div className="desh2">
          <div className="bg-white flex justify-between mt-3 items-center p-5">
            <div>
              <p className="text-3xl font-medium">Profile Complete 70%</p>
              <p className="dash2 pt-2 mt-5 text-sm">
                Your profile is incomplete. Complete your missing items to
                improve your chances of securing a dream role.
              </p>
            </div>
            <button className="dash2btn">My Profile</button>
          </div>

          <div className="bg-white mt-3 p-5">
            <p className="text-3xl font-medium">Job Application Status</p>
            <p className="dash2 pt-2 text-sm mt-5">
              Here's some recent jobs applied by you
            </p>
            <div className="flex justify-center items-center mt-10 mb-8">
              <span className="text-zinc-500 text-lg font-medium">
                No Data Available
              </span>
            </div>
          </div>

          <div className="bg-white mt-3 flex justify-center flex-col p-5">
            <p className="font-medium text-3xl mb-4">Recommended Jobs</p>
            <p className="mb-4">
              Here are some jobs that are a close match with your profile
            </p>
            <div className="jobcontanir grid grid-cols-1 gap-4">
              {jobData.map((job, index) => (
                <JobCard
                  key={index}
                  imgSrc={job.imgSrc}
                  title={job.title}
                  company={job.company}
                  location={job.location}
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
