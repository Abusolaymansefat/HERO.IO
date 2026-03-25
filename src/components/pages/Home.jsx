import React from "react";
// import { appsData } from "../data/appsData";
import { useNavigate } from "react-router";
import {appsData} from "../../data/appsData"
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8); 

  return (
    <div className="home-page">

      {/* Top Apps Section */}
      <section className="top-apps px-10 py-10">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Trending Apps</h2>
          <p>Explore All Trending Apps on the Market developed by us</p>
         
        </div>
        <div className="grid grid-cols-4 gap-6">
          {topApps.map((app) => (
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
        <div className=" text-center mt-6">
            <button onClick={() => navigate("/all-apps")} className="btn bg-[#632EE3] hover:bg-[#3e11a6] text-[#ffff] p-6 ">Show All</button>
        </div>
         
      </section>
    </div>
  );
};

export default Home;