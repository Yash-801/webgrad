import React from "react";

const FilterModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-20 flex justify-center items-center">
      {/* Blur Background */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white p-6  rounded-lg shadow-lg relative z-30">
        <div className="flex justify-between items-center my-4">
          <h2 className="text-xl font-medium">Filters</h2>
          <button className=" text-gray-600 hover:text-black" onClick={onClose}>
            ✖
          </button>
        </div>

        {/* Filter Options */}
        <div className="grid grid-cols-3 gap-y-12 gap-x-12">
          <div className="flex flex-col">
            <p className="font-semibold my-4">Date of posting</p>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                All time
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Last 24 hours
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Last 3 days
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Last 7 days
              </label>
            </div>
          </div>
          <div>
            <p className="font-semibold my-4">Salary</p>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Any
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                30000k
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                50000k
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                80000k
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                100000k
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold my-4">Role Target</p>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Graduate Jobs
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Internship
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Placement & Work Experience
              </label>
            </div>
          </div>
          <div>
            <p className="font-semibold my-4">Years of Experience</p>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                No Experience
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                1 - 2 Years Experience
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                4 - 6 Years Experience
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                6+ Years Experience
              </label>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold my-4">Remote or In-Person</p>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Remote
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                In-Person
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Flexible
              </label>
            </div>
          </div>
          <div>
            <p className="font-semibold my-4">Type of employment</p>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Full-time
              </label>
            </div>
            <div className="gap-x-2 flex">
              <input type="radio" name="date" value="today" id="All time" />
              <label className="text-[#71717a] text-sm" for="All time">
                Part-time
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
