import { useEffect } from "react";
import { useLoaderData } from "react-router";
import { getStoredApp, removeStoredApp } from "../utils/localstorage";
import { useState } from "react";
import { toast } from "react-toastify";
import { Bounce } from "react-toastify";

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

  // Sorting
  const handleSort = (type) => {
    if (type === "highToLow") {
      const sortedByHighToLow = [...installedApps].sort(
        (a, b) => b.downloads - a.downloads,
      );
      setInstalledApps(sortedByHighToLow);
    }

    if (type === "lowToHigh") {
      const sortedByHighToLow = [...installedApps].sort(
        (a, b) => a.downloads - b.downloads,
      );
      setInstalledApps(sortedByHighToLow);
    }
  };

  // Uninstall
  const handleUninstall = (id) => {
    removeStoredApp(id);
    const uninstallApp = installedApps.filter((app) => app.id !== id);
    setInstalledApps(uninstallApp);
    toast.success(`Uninstalled!`, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

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
        <h1 className="text-2xl md:text-4xl font-bold">Your Installed Apps</h1>
        <p className="text-gray-500 mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Top bar */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold">{installedApps.length} Apps Found</p>
        <select className="select select-bordered w-44 text-gray-500 font-semibold">
          <option>Sort By Downloads</option>
          <option onClick={() => handleSort("highToLow")}>High-Low</option>
          <option onClick={() => handleSort("lowToHigh")}>Low-High</option>
        </select>
      </div>

      {/* App list */}
      <div className="space-y-4">
        {installedApps.length > 0 ? (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-base-100 p-4 rounded-xl shadow-sm"
            >
              {/* Left */}
              <div className="flex flex-wrap items-center gap-3">
                <img className="w-18 h-18 rounded-lg" src={app.image} alt="" />
                <div>
                  <h2 className="font-bold text-xl">{app.title}</h2>
                  <div className="flex text-sm text-gray-500 mt-1 items-center">
                    {/* Downloads */}
                    <div className="flex items-center text-green-500 text-xs font-medium rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                        />
                      </svg>
                      {new Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(app.downloads)}
                    </div>

                    {/* Rating */}
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
              <button
                onClick={() => handleUninstall(app.id)}
                className="btn bg-green-600 btn-sm text-white"
              >
                Uninstall
              </button>
            </div>
          ))
        ) : (
          <div className="flex justify-center mt-20 px-4">
            <div className="border border-gray-300 rounded-xl p-10 max-w-md w-full">
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-700">
                  No Installed Apps
                </h2>

                {/* Subtitle */}
                <p className="text-gray-500 mt-2">
                  You haven’t installed any apps yet. Explore the store and
                  install your favorite apps.
                </p>

                {/* Action */}
                <button
                  onClick={() => window.history.back()}
                  className="px-6 py-2 rounded-md font-medium text-white 
                   bg-gradient-to-r from-purple-500 to-indigo-500 
                   hover:from-purple-600 hover:to-indigo-600 
                   transition-all duration-300 shadow-md hover:shadow-lg mt-5"
                >
                  Browse Apps
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
