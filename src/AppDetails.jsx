import { useLoaderData, useParams, Navigate } from "react-router";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import reviewIcon from "./assets/review-icon.png";
import { addToStoredDB } from "./utils/localstorage";
import appNotFound from "./assets/App-Error.png";

const AppDetails = () => {
  const app = useLoaderData();
  const { id } = useParams();

  if (!app) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="text-center max-w-xl">
          <div className="flex justify-center mb-6">
            <img src={appNotFound} alt="Not Found" className="w-64" />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-base-content">
            OPPS!! APP NOT FOUND
          </h1>

          {/* Subtitle */}
          <p className="text-gray-500 mt-3">
            The App you are requesting is not found on our system. please try
            another apps
          </p>

          {/* Button */}
          <button
            onClick={() => window.history.back()}
            className="px-6 py-2 rounded-md font-medium text-white 
             bg-gradient-to-r from-purple-500 to-indigo-500 
             hover:from-purple-600 hover:to-indigo-600 
             transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer mt-5"
          >
            Go Back!
          </button>
        </div>
      </div>
    );
  }

  const {
    title,
    image,
    downloads,
    ratingAvg,
    ratings,
    reviews,
    size,
    description,
    companyName,
  } = app;

  const ratingData = ratings.map((rating) => rating);

  const handleInstallNow = (id) => {
    addToStoredDB(id);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-8">
      <button
        onClick={() => window.history.back()}
        className="px-6 py-2 rounded-md font-medium text-purple-600 border border-gray-300 cursor-pointer flex gap-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-move-left-icon lucide-move-left"
        >
          <path d="M6 8L2 12L6 16" />
          <path d="M2 12H22" />
        </svg>
        Go Back
      </button>
      {/* Top Section */}
      <div className="card bg-base-100 shadow p-6 flex flex-col md:flex-row gap-6">
        {/* App Image */}
        <img
          src={image}
          alt={title}
          className="w-44 md:w-60 md:h-60 object-cover rounded-xl"
        />

        {/* Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-sm text-gray-500">
            Developed by{" "}
            <span className="text-lg font-semibold text-purple-600">
              {companyName}
            </span>
          </p>
          <hr className="text-gray-300 mt-4" />
          {/* Stats */}
          <div className="flex gap-8 mt-4">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
              <p className="text-sm font-semibold text-gray-500">Downloads</p>
              <p className="font-bold text-3xl">
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(downloads)}
              </p>
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10 text-orange-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.968a1 1 0 00.95.69h4.173c.969 
                   0 1.371 1.24.588 1.81l-3.378 
                   2.455a1 1 0 00-.364 1.118l1.287 
                   3.969c.3.921-.755 1.688-1.54 
                   1.118l-3.379-2.455a1 1 0 
                   00-1.175 0l-3.379 
                   2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.969a1 1 
                   0 00-.364-1.118L2.98 
                   9.395c-.783-.57-.38-1.81.588-1.81h4.173a1 
                   1 0 00.95-.69l1.286-3.968z"
                />
              </svg>
              <p className="text-sm font-semibold text-gray-500">
                Average Ratings
              </p>
              <p className="font-bold text-3xl">
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(ratingAvg)}
              </p>
            </div>
            <div>
              <img className="w-10 h-10" src={reviewIcon} alt="" />
              <p className="text-sm font-semibold text-gray-500">
                Total Reviews
              </p>
              <p className="font-bold text-3xl">
                {new Intl.NumberFormat("en-US", {
                  notation: "compact",
                }).format(reviews)}
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => handleInstallNow(id)}
            className="btn bg-green-600 mt-4 text-white"
          >
            Install Now ({size} MB)
          </button>
        </div>
      </div>

      {/* Ratings Section */}
      <div className="card bg-base-100 shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Ratings</h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={ratingData} layout="vertical" margin={{ left: 20 }}>
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Bar dataKey="count" fill="#f97316" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div className="card bg-base-100 shadow p-6">
        <h2 className="text-lg font-semibold mb-4">Description</h2>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
