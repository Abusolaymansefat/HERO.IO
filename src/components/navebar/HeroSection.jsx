import React from "react";
import bannerImg from "../../assets/Iphone.png";

import { FaCheck, FaClock, FaPlay } from "react-icons/fa";
import { IoPower } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";

const HeroSection = () => {
  return (
    <div>

      {/* 🔵 HERO SECTION */}
      <section className="bg-base-200 text-center py-16 px-4">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          We Build <br />
          <span className="text-primary">Productive</span> Apps
        </h1>

        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-500 mb-6">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-10">
          <button className="btn btn-outline btn-sm md:btn-md flex items-center gap-2">
            <img src="https://img.icons8.com/color/24/google-play.png" alt="" />
            Google Play
          </button>

          <button className="btn btn-outline btn-sm md:btn-md flex items-center gap-2">
            <img src="https://img.icons8.com/ios-filled/24/mac-os.png" alt="" />
            App Store
          </button>
        </div>

        {/* 🔥 IMAGE + ICONS */}
        <div className="relative flex justify-center items-center">

          {/* Main Image */}
          <img
            src={bannerImg}
            alt="App UI"
            className="w-64 md:w-80 rounded-xl shadow-xl z-10"
          />

          {/* LEFT ICONS */}
          <div className="absolute left-0 md:left-20 flex flex-col gap-6">

            <div className="bg-blue-500 text-white p-3 rounded-full shadow-lg">
              <FaCheck />
            </div>

            <div className="bg-green-500 text-white p-3 rounded-full shadow-lg">
              <IoPower />
            </div>

          </div>

          {/* RIGHT ICONS */}
          <div className="absolute right-0 md:right-20 flex flex-col gap-6">

            <div className="bg-red-500 text-white p-3 rounded-full shadow-lg">
              <FaClock />
            </div>

            <div className="bg-indigo-500 text-white p-3 rounded-full shadow-lg">
              <MdSecurity />
            </div>

            <div className="bg-blue-400 text-white p-3 rounded-full shadow-lg">
              <FaPlay />
            </div>

          </div>

        </div>
      </section>

      {/* 🟣 STATS SECTION */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center gap-8">

          <div>
            <p className="text-sm mb-2">Total Downloads</p>
            <h2 className="text-3xl md:text-4xl font-bold">29.6M</h2>
            <p className="text-xs mt-1">21% More Than Last Month</p>
          </div>

          <div>
            <p className="text-sm mb-2">Total Reviews</p>
            <h2 className="text-3xl md:text-4xl font-bold">906K</h2>
            <p className="text-xs mt-1">48% More Than Last Month</p>
          </div>

          <div>
            <p className="text-sm mb-2">Active Apps</p>
            <h2 className="text-3xl md:text-4xl font-bold">132+</h2>
            <p className="text-xs mt-1">31 New Apps Launched</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default HeroSection;