import { useLoaderData } from "react-router";
import AppCard from "../components/AppCard";
import { useState } from "react";
import appNotFound from "../assets/App-Error.png";

const Apps = () => {
  const appsData = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredApps = appsData.filter((app) =>
    app?.title?.toLowerCase().includes(search.toLowerCase()),
  );

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
            ({filteredApps.length}) Apps Found
          </div>

          {/* Right: Search */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="search Apps"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
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
        <div className="mt-10">
          {filteredApps.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 max-w-7xl md:mx-auto mx-5">
              {filteredApps.map((appData) => (
                <AppCard key={appData.id} appData={appData} />
              ))}
            </div>
          ) : (
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
                  The App you are requesting is not found on our system. please
                  try another apps
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
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
