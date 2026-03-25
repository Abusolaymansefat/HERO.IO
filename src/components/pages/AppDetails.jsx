import React, { useState } from "react";
import { useParams } from "react-router";
import { appsData } from "../../data/appsData"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { toast } from "react-toastify";

const AppDetails = () => {
      const { id } = useParams();
      const app = appsData.find(a => a.id === parseInt(id));
      const [installed, setInstalled] = useState(false);

      if (!app) return <p>App Not Found</p>;

      const handleInstall = () => {
            setInstalled(true);
            toast.success(`${app.title} installed successfully!`);
      };

      return (
            <div className="app-details px-10 py-10">
                  <div className="flex gap-10 mb-10">
                        <img src={app.image} alt={app.title} className="w-64 h-64 object-cover rounded" />
                        <div>
                              <h2 className="text-3xl font-bold mb-2">{app.title}</h2>
                              <p>{app.companyName}</p>
                              <p>Downloads: {app.downloads}</p>
                              <p>Reviews: {app.reviews}</p>
                              <p>Average Rating: ⭐ {app.ratingAvg}</p>
                              <button
                                    disabled={installed}
                                    onClick={handleInstall}
                                    className={`mt-4 px-6 py-2 rounded text-white ${installed ? 'bg-gray-400' : 'bg-blue-600'}`}
                              >
                                    {installed ? "Installed" : "Install"}
                              </button>
                        </div>
                  </div>

                  {/* Review Chart */}
                  <div className="chart mb-10">
                        <h3 className="text-2xl font-bold mb-4">Review Breakdown</h3>
                        <ResponsiveContainer width="100%" height={300}>
                              <BarChart data={app.ratings}>
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#3b82f6" />
                              </BarChart>
                        </ResponsiveContainer>
                  </div>

                  {/* Description */}
                  <div className="description">
                        <h3 className="text-2xl font-bold mb-2">Description</h3>
                        <p>{app.description}</p>
                  </div>
            </div>
      );
};

export default AppDetails;