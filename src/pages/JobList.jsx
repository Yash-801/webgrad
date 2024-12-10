import Bussins from "../assets/Bussins.jpg";
import Filter from "../assets/Filter.svg";
import downarrow from "../assets/downarrow.svg";
import Calender from "../assets/Calender.svg";
import Doller from "../assets/Doller.svg";
import Location from "../assets/Location.svg";
import Time from "../assets/Time.svg";
import Bookmark from "../assets/Bookmark.svg";

const jobData = [
  {
    id: 1,
    title: "WT- ALL candidates - Quick Apply",
    company: "Employer 2810",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 200000 - 250000",
    posted: "8 days ago",
    logo: { Bussins },
    description: "test2, test 2",
  },
  {
    id: 2,
    title: "Aftyn - all vis - quick apply",
    company: "Polaris Software Solution",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 20000 - 30000",
    posted: "8 days ago",
    logo: "https://via.placeholder.com/50",
    description: "test",
  },
  {
    id: 3,
    title: "Android Developer",
    company: "Polaris Software Solution",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 20000 - 30000",
    posted: "8 days ago",
    logo: "https://via.placeholder.com/50",
    description: "test",
  },
  {
    id: 4,
    title: "QA Tester",
    company: "2910 Company",
    location: "Songadh",
    type: "Part Time",
    salary: "BGN 20000 - 25600",
    posted: "18 days ago",
    logo: "https://via.placeholder.com/50",
    description: "test",
  },

  {
    id: 5,
    title: "Backend Developer",
    company: "Tech Corp",
    location: "Surat",
    type: "Full Time",
    salary: "Rs 300000 - 400000",
    posted: "5 days ago",
    logo: "https://via.placeholder.com/50",
    description: "backend development tasks",
  },
  {
    id: 6,
    title: "UI/UX Designer",
    company: "Creative Solutions",
    location: "Surat",
    type: "Contract",
    salary: "Rs 25000 - 35000",
    posted: "12 days ago",
    logo: "https://via.placeholder.com/50",
    description: "UI/UX design",
  },
  {
    id: 7,
    title: "Project Manager",
    company: "Polaris Software Solution",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 50000 - 70000",
    posted: "15 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Managing projects",
  },
  {
    id: 8,
    title: "Data Scientist",
    company: "DataCorp",
    location: "Surat",
    type: "Full Time",
    salary: "Rs 600000 - 700000",
    posted: "20 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Analyzing data",
  },
  {
    id: 9,
    title: "Customer Support",
    company: "Support Solutions",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 15000 - 20000",
    posted: "10 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Customer support tasks",
  },
  {
    id: 10,
    title: "Marketing Specialist",
    company: "Marketing Pros",
    location: "Surat",
    type: "Part Time",
    salary: "Rs 40000 - 50000",
    posted: "25 days ago",
    logo: "https://via.placeholder.com/50",
    description: "Marketing strategies",
  },
];

const JobList = () => {
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
      <div className="flex flex-row w-full mb-4">
        <div className="w-1/2 flex-auto ">
          <input
            type="text"
            placeholder="What position are you looking for ?"
            className="border border-gray-300 h-10 text-xs p-2 w-full"
          />
        </div>
        <div className="w-1/6 ml-4 ">
          <input
            type="text"
            placeholder="Skill"
            className="border border-gray-300 h-10 text-xs p-2 w-full "
          />
        </div>
        <div className="w-1/6 ml-4">
          <input
            type="text"
            placeholder="Location"
            className="border border-gray-300 h-10 text-xs p-2 w-full"
          />
        </div>
        <div className="w-1/6 flex items-center justify-start ml-4">
          <button className="text-sm bg-[#004473] py-2.5 px-5 text-white">
            Search Job
          </button>
        </div>
      </div>
      <div className="p-6 bg-[#FAFAFA] flex flex-row">
        <div className="w-3/4 flex-auto">
          <div className="mb-2 flex justify-between items-center">
            <p className="text-3xl font-medium">10 Jobs</p>
            <button className="flex items-center space-x-6 border rounded-lg border-[#d5d5d5] px-4 py-1">
              <div className="flex items-center ">
                <img src={Filter} alt="filter" className="h-5 w-5" />
                <span className="ml-1 text-sm">Filter</span>
              </div>
              <div>
                <img src={downarrow} alt="downarrow" className="h-5 w-5" />
              </div>
            </button>
          </div>
          {jobData.map((job) => (
            <div
              key={job.id}
              className="border p-4 rounded-lg shadow-md flex items-start space-x-4 mb-4 bg-white cursor-pointer"
            >
              <img
                src={Bussins}
                alt={`${job.title} logo`}
                className="w-16 h-16 object-cover rounded-full"
              />
              <div className="flex-1">
                <h2 className="text-xl font-medium">{job.title}</h2>
                <p className="text-sm text-[#333338]">{job.company}</p>
                <div className="flex items-center space-x-3 text-gray-500 text-sm my-3">
                  <span className="flex items-center bg-[#F1F1F1] py-1 px-2 rounded-md">
                    <img
                      src={Location}
                      alt="Location"
                      className="h-4 w-4 pr-1 "
                    />
                    {job.location}
                  </span>
                  <span className="flex items-center bg-[#F1F1F1] py-1 px-2 rounded-md">
                    <img src={Time} alt="Time" className="h-4 w-4" />
                    {job.type}
                  </span>
                  <span className="flex items-center bg-[#F1F1F1] py-1 px-2 rounded-md">
                    <img src={Doller} alt="Doller" className="h-4 w-4 mr-1" />
                    {job.salary}
                  </span>
                  <span className="flex items-center bg-[#F1F1F1] py-1 px-2 rounded-md">
                    <img
                      src={Calender}
                      alt="Calender"
                      className="h-4 w-4 mr-1"
                    />
                    {job.posted}
                  </span>
                </div>
                <p className=" text-sm mb-4 text-[#707079]">
                  {job.description}
                </p>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <img src={Bookmark} alt="Bookmark" className="h-5 w-5" />
              </button>
            </div>
          ))}
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

export default JobList;
