import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { appsData } from "../../../data/appsData";

const InstallationPage = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load apps
  useEffect(() => {
    setTimeout(() => {
      const storedApps =
        JSON.parse(localStorage.getItem("installedApps")) || [];

      const apps = appsData.filter((app) =>
        storedApps.includes(app.id)
      );

      setInstalledApps(apps);
      setLoading(false);
    }, 800);
  }, []);

  // Sort
  const handleSort = (type) => {
    let sorted = [...installedApps];

    if (type === "high") {
      sorted.sort((a, b) => b.downloads - a.downloads);
    } else if (type === "low") {
      sorted.sort((a, b) => a.downloads - b.downloads);
    }

    setInstalledApps(sorted);
  };

  // Uninstall
  const handleUninstall = (id) => {
    const updated = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updated);

    const storedApps =
      JSON.parse(localStorage.getItem("installedApps")) || [];

    const newStored = storedApps.filter((appId) => appId !== id);

    localStorage.setItem("installedApps", JSON.stringify(newStored));

    toast.error("App uninstalled!");
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">My Installation</h1>

        {/* Sort */}
        <select
          onChange={(e) => handleSort(e.target.value)}
          className="border px-4 py-2 mb-6"
        >
          <option value="">Sort By Downloads</option>
          <option value="high">High-Low</option>
          <option value="low">Low-High</option>
        </select>

        <div className="rounded shadow divide-y">
          {installedApps.length === 0 ? (
            <p className="p-6 text-center">No Installed Apps Found</p>
          ) : (
            installedApps.map((app) => (
              <div
                key={app.id}
                className="flex items-center justify-between p-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={app.image}
                    className="w-16 h-16 rounded"
                  />
                  <div>
                    <h2 className="font-semibold">{app.title}</h2>
                    <p className="text-sm text-gray-500">
                      ⬇️ {(app.downloads / 1000000).toFixed(1)}M | ⭐{" "}
                      {app.ratingAvg}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => handleUninstall(app.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Uninstall
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default InstallationPage;