import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp } from "./utils/localstorage";
import { useState } from "react";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const appData = useLoaderData();
  useEffect(() => {
    const storedAppData = getStoredApp();
    const convertedStoredApps = storedAppData.map((id) => parseInt(id));
    const installedAppsData = appData.filter((app) =>
      convertedStoredApps.includes(app.id),
    );
    setInstalledApps(installedAppsData);
  }, []);
  return (
    <div className="min-h-screen bg-base-200 p-8">
      <button
        onClick={() => window.history.back()}
        className="px-6 py-2 mb-4 rounded-md font-medium text-purple-600 border border-gray-300 cursor-pointer flex gap-2"
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
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top bar */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">{installedApps.length} Apps Found</p>
        <select className="select select-bordered w-40">
          <option>Sort By Size</option>
          <option>Name</option>
          <option>Rating</option>
        </select>
      </div>

      {/* App list */}
      <div className="space-y-4">
        {installedApps.map((app) => (
          <div
            key={app.id}
            className="flex items-center justify-between bg-base-100 p-4 rounded-xl shadow-sm"
          >
            {/* Left */}
            <div className="flex items-center gap-4">
              <img className="w-18 h-18 rounded-lg" src={app.image} alt="" />
              <div>
                <h2 className="font-semibold">{app.title}</h2>
                <div className="flex gap-1 text-sm text-gray-500 mt-1 items-center">
                  <div className="flex items-center gap-1 text-green-500 text-xs font-medium p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
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
                    {new Intl.NumberFormat("en-US", {
                      notation: "compact",
                    }).format(app.downloads)}
                  </div>
                  <div className="flex items-center gap-1 text-orange-500 px-2 py-1 rounded-md text-md font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
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
                    {app.ratingAvg}
                  </div>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            {/* Right */}
            <button className="btn bg-green-600 btn-sm text-white">
              Uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Installation;
