import React from "react";
// import { appsData } from "../data/appsData";
import { useNavigate } from "react-router";
import {appsData} from "../../data/appsData"

const Home = () => {
  const navigate = useNavigate();
  const topApps = appsData.slice(0, 8); 

  return (
    <div className="home-page">
      {/* Banner Section */}
      {/* <section className="banner text-center py-20 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Discover Amazing Apps</h1>
        <p className="mb-6">Download your favorite apps from App Store or Play Store</p>
        <div className="flex justify-center gap-4">
          <button onClick={() => window.open("https://www.apple.com/app-store/", "_blank")} className="px-6 py-2 bg-white text-blue-600 rounded">App Store</button>
          <button onClick={() => window.open("https://play.google.com/store", "_blank")} className="px-6 py-2 bg-white text-blue-600 rounded">Play Store</button>
        </div>
      </section> */}

      {/* States Section */}
      {/* <section className="states flex justify-center gap-6 py-10">
        {["Trending", "Top Rated", "Most Downloaded"].map((state, idx) => (
          <div key={idx} className="state-card p-6 bg-gray-100 rounded shadow text-center">
            <h2 className="text-xl font-bold">{state}</h2>
            <p>Some description about {state}</p>
          </div>
        ))}
      </section> */}

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
              <h3 className="font-semibold">{app.title}</h3>
              <p>{app.downloads} Downloads</p>
              <p>⭐ {app.ratingAvg}</p>
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