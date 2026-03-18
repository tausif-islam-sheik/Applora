import { Link, useLoaderData } from "react-router";
import AppCard from "./AppCard";

const TrendingApps = () => {
  const appsData = useLoaderData();

  // Slice the first 8 items
  const topEightAppsData = appsData.slice(0, 8);

  return (
    <div>
      <div className="w-full bg-gray-100 py-12 px-4 text-center">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Trending Apps
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 max-w-7xl md:mx-auto mx-10">
        {topEightAppsData.map((appData) => (
          <AppCard key={appData.id} appData={appData} />
        ))}
      </div>
      <div className="items-center text-center py-10">
        <Link to={"/apps"}>
          <button
            className="px-6 py-2 rounded-md font-medium text-white 
             bg-gradient-to-r from-purple-500 to-indigo-500 
             hover:from-purple-600 hover:to-indigo-600 
             transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendingApps;
