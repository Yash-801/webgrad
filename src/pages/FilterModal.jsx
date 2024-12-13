import React from "react";

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
    <div className="fixed inset-0 z-20 flex justify-center items-center">
      {/* Blur Background */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white p-6 rounded-lg shadow-lg relative z-30">
        {/* Header */}
        <div className="flex justify-between items-center my-4">
          <h2 className="text-xl font-medium">Filters</h2>
          <button className="text-gray-600 hover:text-black" onClick={onClose}>
            ✖
          </button>
        </div>

        {/* Filter Options */}
        <div className="grid grid-cols-3 gap-y-12 gap-x-12">
          {filterOptions.map((filter, index) => (
            <div key={index} className="flex flex-col">
              <p className="font-semibold my-4">{filter.title}</p>
              {filter.isButtonGroup ? (
                <div className="mb-4 flex">
                  <button className="text-xs py-2 px-3 text-[#353538] border border-[#353538] border-r-0">
                    Monthly
                  </button>
                  <button className="text-xs py-2 px-3 text-[#353538] border border-[#353538]">
                    Yearly
                  </button>
                </div>
              ) : null}
              {filter.options.map((option, idx) => (
                <div className="gap-x-2 flex" key={idx}>
                  <input
                    type="radio"
                    name={filter.title}
                    value={option}
                    id={option}
                  />
                  <label className="text-[#71717a] text-sm" htmlFor={option}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div>
          <p className="font-semibold my-4 mt-14">Industries</p>
        </div>
        <div className="grid grid-cols-2 my-4 gap-x-12">
          <div>
            {industries.map((id) => (
              <div className="flex items-center mb-3">
                <input type="checkbox" name="{id.name}" value={id.name} />
                <label className="text-sm text-gray-500 ml-2">{id.name}</label>
              </div>
            ))}
          </div>
          <div>
            {SecondIndustries.map((id) => (
              <div className="flex items-center mb-3">
                <input type="checkbox" name="{id.name}" value={id.name} />
                <label className="text-sm text-gray-500 ml-2">{id.name}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
