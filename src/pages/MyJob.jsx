import React from "react";
import { NavLink } from "react-router-dom";

const MyJob = () => {
  const buttonStyles =
    "rounded-[0.6rem] bg-[#004D7E] px-5 py-2 text-[1rem] font-normal text-white";

  return (
    <div className="my-9 px-6 md:px-12 lg:px-36">
      <div>
        <header className="text-center md:text-left">
          <h1 className="mb-1 text-[28px] font-medium md:text-[40px]">
            My Jobs
          </h1>
          <p className="text-[14px] text-[#676970] md:text-[15px]">
            Track jobs that you've applied for, viewed, saved, and those
            awaiting a reply.
          </p>
        </header>

        <nav className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
          {[
            "Saved Jobs",
            "Jobs Applied",
            "Awaiting Reply",
            "Closed Jobs",
            "Offers",
          ].map((label) => (
            <NavLink
              key={label}
              className={({ isActive }) =>
                isActive ? `${buttonStyles}` : "bg-gray-500"
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <section className="mt-7 flex items-center justify-center bg-[#FAFAFA] py-5 text-center text-base text-[#71717a] md:text-lg">
          No Data Available
        </section>
      </div>
    </div>
  );
};

export default MyJob;
