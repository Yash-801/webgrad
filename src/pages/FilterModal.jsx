import React from "react";
import { NavLink } from "react-router-dom";

const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const filterOptions = [
    {
      title: "Date of Posting",
      options: ["All time", "Last 24 hours", "Last 3 days", "Last 7 days"],
    },
    {
      title: "Role Target",
      options: ["Graduate Jobs", "Internship", "Placement & Work Experience"],
    },
    {
      title: "Remote or In-Person",
      options: ["Remote", "In-Person", "Flexible"],
    },
    {
      title: "Salary",
      options: ["Any", "30000k", "50000k", "80000k", "100000k"],
      isButtonGroup: true,
    },
    {
      title: "Years of Experience",
      options: [
        "No Experience",
        "1 - 2 Years Experience",
        "4 - 6 Years Experience",
        "6+ Years Experience",
      ],
    },
    {
      title: "Type of Employment",
      options: ["Full-time", "Part-time"],
    },
  ];

  const industries = [
    { id: 1, name: "Education and Health services" },
    { id: 2, name: "Construction" },
    { id: 3, name: "Financial Activities" },
    { id: 4, name: "Computers and Information Technology" },
    { id: 5, name: "Mechanical and Electrical Engineering" },
    { id: 6, name: "Leisure and Hospitality" },
  ];

  const SecondIndustries = [
    { id: 7, name: "Logistics and Transportation" },
    { id: 8, name: "Natural Resources and Mining" },
    { id: 9, name: "Professional and business services" },
    { id: 10, name: "Trade, Transportation, and Utilities" },
    { id: 11, name: "Telecommunications" },
    { id: 12, name: "Financial Services" },
  ];

  return (
    <div className="fixed inset-0 z-20 flex h-full items-center justify-center overflow-auto">
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      <div className="relative z-30 mb-5 mt-20 transform-none rounded-lg bg-white shadow-lg">
        <div className="flex items-center justify-between border-b p-6">
          <h2 className="text-base font-semibold">Filters</h2>
          <button className="text-gray-600 hover:text-black" onClick={onClose}>
            ✖
          </button>
        </div>

        <div className="grid grid-cols-3 gap-x-12 gap-y-12 p-6">
          {filterOptions.map((filter, index) => (
            <div key={index} className="flex flex-col">
              <p className="my-4 font-semibold">{filter.title}</p>
              {filter.isButtonGroup ? (
                <div className="mb-4 flex">
                  <NavLink className="border border-[#353538] px-3 py-2 text-xs text-[#353538]">
                    Yearly
                  </NavLink>
                  <NavLink className="border border-[#353538] px-3 py-2 text-xs text-[#353538]">
                    Yearly
                  </NavLink>
                </div>
              ) : null}
              {filter.options.map((option, idx) => (
                <div className="flex gap-x-2" key={`${filter.title}-${idx}`}>
                  <input
                    type="radio"
                    name={filter.title}
                    value={option}
                    id={option}
                  />
                  <label className="text-sm text-[#71717a]" htmlFor={option}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <p className="pl-6 pt-5 font-semibold">Industries</p>
        </div>
        <div className="grid grid-cols-2 gap-x-12 p-5">
          <div>
            {industries.map((id) => (
              <div className="mb-3 flex items-center" key={industries.id}>
                <input type="checkbox" name="{id.name}" value={id.name} />
                <label className="ml-2 text-sm text-gray-500">{id.name}</label>
              </div>
            ))}
          </div>
          <div>
            {SecondIndustries.map((id) => (
              <div className="mb-3 flex items-center" key={industries.id}>
                <input type="checkbox" name="{id.name}" value={id.name} />
                <label className="ml-2 text-sm text-gray-500">{id.name}</label>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-4 border-t p-6">
          <div>
            <button className="rounded-lg border-[#004473] bg-[#f9f9f9] px-5 py-2 text-sm hover:border">
              Cancle
            </button>
          </div>
          <div>
            <button className="rounded-lg bg-[#004473] px-5 py-2 text-sm text-white">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
