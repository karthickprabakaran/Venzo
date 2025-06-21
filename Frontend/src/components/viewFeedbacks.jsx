import { useState, useEffect } from "react";
import axios from "axios";

// Tailwind utility to color status badges
const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "planned":
      return "bg-yellow-100 text-yellow-800";
    case "in progress":
      return "bg-blue-100 text-blue-800";
    case "completed":
      return "bg-green-100 text-green-800";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

const viewFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/feedbacks");
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  return (
    <div className="mt-12 px-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">🚀 Product Feedback Board</h2>
      {feedbacks.length === 0 ? (
        <p className="text-center text-gray-500">No feedbacks available.</p>
      ) : (
        <ul className="space-y-6">
          {feedbacks.map((fb) => (
            <li
              key={fb._id}
              className="p-6 bg-white rounded-xl shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{fb.title}</h3>
                  <p className="text-gray-600 mb-3">{fb.message}</p>

                  <div className="flex items-center gap-2 flex-wrap text-sm">
                    <span className="inline-block px-2 py-1 bg-purple-100 text-purple-800 rounded">
                      #{fb.category || "General"}
                    </span>
                    <span
                      className={`inline-block px-2 py-1 rounded ${getStatusColor(fb.status)}`}
                    >
                      {fb.status || "Unknown"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-center bg-blue-100 text-blue-800 font-semibold px-3 py-1 rounded-md h-fit shadow-sm hover:scale-105 transition-transform">
                  <span>⬆</span>
                  <span>{fb.upvotes ?? 0}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default viewFeedbacks;
