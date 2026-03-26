import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { appsData } from "../../data/appsData";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { toast } from "react-toastify";
import { AiOutlineDownload, AiOutlineStar } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const app = appsData.find(a => a.id === parseInt(id));
  const [installed, setInstalled] = useState(false);

  if (!app) return <p>App Not Found</p>;

  const handleInstall = () => {
    if (!installed) {
      setInstalled(true);
      toast.success(`${app.title} installed successfully!`);
    } else {
      navigate("/installation");
    }
  };

  return (
    <div className="app-details px-10 py-10">
      <div className="flex gap-10 mb-10">
        <img src={app.image} alt={app.title} className="w-64 h-64 object-cover rounded" />
        <div>
          <h2 className="text-3xl font-bold mb-2">{app.title}</h2>
          <p className="mb-1">{app.companyName}</p>
          <p className="flex items-center gap-2 mb-1">
            <AiOutlineDownload /> {app.downloads}
          </p>
          <p className="flex items-center gap-2 mb-1">
            <FaRegCommentDots /> {app.reviews}
          </p>
          <p className="flex items-center gap-2 mb-2">
            <AiOutlineStar /> {app.ratingAvg}
          </p>
          <button
            onClick={handleInstall}
            className={`mt-4 px-6 py-2 rounded text-white ${
              installed ? "bg-[#094d38]" : "bg-[#7be1c1]"
            }`}
          >
            {installed ? "Installed" : "Install"}
          </button>
        </div>
      </div>

      {/* Review Chart */}
      <div className="chart mb-10">
        <h3 className="text-2xl font-bold mb-4">Ratings</h3>
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