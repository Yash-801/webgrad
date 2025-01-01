import CompnyData from "../Json/CompnyData";

function CompniDetails() {
  const { id } = useParams();
  const job = CompnyData.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-lg font-medium">Job not found!</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl p-4">
        <div className="flex flex-col items-center">
          <img
            src="URL_to_your_image"
            alt="Company Overview"
            className="mb-6 max-h-96 w-full rounded-lg object-cover shadow-lg"
          />

          <div className="mb-6 w-full rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-lg font-semibold">
              Business Representative
            </h2>
            <p>
              <strong>Name:</strong> 0811 Company
            </p>
            <p>
              <strong>Role:</strong> Tester
            </p>
            <p>
              <strong>Email Address:</strong> hanok12205@linear.com
            </p>
            <p>
              <strong>Phone Number:</strong> +919526565656
            </p>
            <p>
              <strong>Location:</strong> Surat, Gujarat
            </p>
          </div>

          <div className="mb-6 w-full rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-lg font-semibold">Business Details</h2>
            <p>
              <strong>Industry:</strong> Education and Health services,
              Logistics and Transportation, Professional and business services,
              Telecommunications
            </p>
            <p>
              <strong>Business Details:</strong> abcd1234
            </p>
            <p>
              <strong>Organization Website:</strong>{" "}
              <a
                href="http://www.company0811.com"
                className="text-blue-600 hover:underline"
              >
                www.Company0811.com
              </a>
            </p>
          </div>

          <div className="mb-6 w-full rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-lg font-semibold">Recruit Basics</h2>
            <p>
              <strong>What kind of candidates are you looking to hire?</strong>
            </p>
            <p>
              Graduate Interns, Student Interns, Graduate Full Time, Graduate
              Part Time
            </p>
            <p>
              <strong>Locations for which you will have openings?</strong>
            </p>
            <p>India</p>
          </div>

          <div className="w-full rounded-lg bg-white p-6 shadow-md">
            <h2 className="mb-4 text-lg font-semibold">Current Openings</h2>
            <p>No Data Available</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompniDetails;
