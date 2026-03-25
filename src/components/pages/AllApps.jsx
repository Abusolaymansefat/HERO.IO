import React, { useState } from "react";
import { appsData } from "../../data/appsData"
import { useNavigate } from "react-router";
import { AiOutlineDownload } from "react-icons/ai";

const AllApps = () => {
      const navigate = useNavigate();
      const [search, setSearch] = useState("");

      const filteredApps = appsData.filter(app =>
            app.title.toLowerCase().includes(search.toLowerCase())
      );

      return (
            <div className="all-apps px-10 py-10">
                  <div className="text-center">
                        <h2 className="text-3xl font-bold mb-2"> Our All Applications</h2>
                        <p className="mb-6 text-gray-600">Explore All Apps on the Market developed by us. We code for Millions</p>
                  </div>


                  {/* Search & Total */}
                  <div className="flex justify-between items-center mb-6">
                        <p>Total Apps: {filteredApps.length}</p>
                        <input
                              type="text"
                              placeholder="Search apps..."
                              value={search}
                              onChange={e => setSearch(e.target.value)}
                              className="border p-2 rounded w-64"
                        />
                  </div>

                  {/* App Grid */}
                  {filteredApps.length === 0 ? (
                        <p>No App Found</p>
                  ) : (
                        <div className="grid grid-cols-4 gap-6">
                              {filteredApps.map((app) => (
                                    <div key={app.id} className="app-card p-4 border rounded cursor-pointer" onClick={() => navigate(`/app/${app.id}`)}>
                                                  <img src={app.image} alt={app.title} className="w-full h-40 object-cover mb-2 rounded"/>
                                                  <h3 className=" text-2xl font-semibold">{app.title}</h3>
                                                  <div className="flex justify-between items-center">
                                                <p className="flex items-center gap-1">
                                                  <AiOutlineDownload className="text-[#1f7546]" /> {app.downloads}
                                                </p>
                                                <p>⭐ {app.ratingAvg}</p>
                                              </div>
                                                </div>
                              ))}
                        </div>
                  )}
            </div>
      );
};

export default AllApps;