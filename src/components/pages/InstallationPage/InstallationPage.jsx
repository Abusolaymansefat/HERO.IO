import React, { useState, useEffect } from "react";
// import {appsData} from "../../data/appsData"
import { toast } from "react-toastify";
import { appsData } from "../../../data/appsData";

const InstallationPage = () => {
  const [installedApps, setInstalledApps] = useState([]);

  // Load installed apps from localStorage
  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const apps = appsData.filter(app => storedApps.includes(app.id));
    setInstalledApps(apps);
// console.log(apps)

  }, []);

  const handleUninstall = (id) => {
    const updated = installedApps.filter(app => app.id !== id);
    setInstalledApps(updated);

    // Remove from localStorage
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const newStored = storedApps.filter(appId => appId !== id);
    localStorage.setItem("installedApps", JSON.stringify(newStored));

    toast.success("App uninstalled successfully!");
  };

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-1">Your Installed Apps</h1>
        <p className="text-gray-600 mb-6">
          Explore all trending apps on the market developed by us
        </p>

        <div className="bg-white rounded shadow divide-y">
          {installedApps.length === 0 && (
            <p className="p-6 text-center text-gray-500">No Installed Apps Found</p>
          )}

          {installedApps.map(app => (
            <div key={app.id} className="flex items-center justify-between p-4">
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 object-cover rounded bg-gray-200"
                />
                <div>
                  <h2 className="font-semibold">{app.title}</h2>
                  <p className="text-gray-500 text-sm flex items-center gap-2">
                    <span>⬇️ {app.downloads / 1000000}M</span>
                    <span>⭐ {app.ratingAvg}</span>
                    <span>{app.size} MB</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;