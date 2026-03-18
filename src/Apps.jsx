import { useLoaderData } from "react-router";
import AppCard from "./components/AppCard";

const Apps = () => {
  const appsData = useLoaderData();

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pb-18">
        <div className="py-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our All Applications
          </h1>
          <p className="mt-3 text-gray-500 text-sm md:text-base">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="mt-6 px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left: App Count */}
          <div className="text-xl font-semibold text-gray-800">
            ({appsData.length}) Apps Found
          </div>

          {/* Right: Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="search Apps"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            {/* Search Icon */}
            <svg
              className="w-5 h-5 text-gray-400 absolute left-3 top-2.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
              />
            </svg>
          </div>
        </div>

        {/* All Apps */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 max-w-7xl md:mx-auto mx-5">
          {appsData.map((appData) => (
            <AppCard key={appData.id} appData={appData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Apps;
