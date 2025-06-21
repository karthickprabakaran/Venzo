import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [activeTab, setActiveTab] = useState("view");
  const [feedbacks, setFeedbacks] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get("/api/feedbacks"); // Adjust this URL if needed
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/feedbacks", { title, message });
      setTitle("");
      setMessage("");
      fetchFeedbacks();
      setActiveTab("view");
    } catch (err) {
      console.error("Error creating feedback:", err);
    }
  };

  useEffect(() => {
    if (activeTab === "view") {
      fetchFeedbacks();
    }
  }, [activeTab]);

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab("view")}
          className={`px-4 py-2 rounded ${activeTab === "view" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
        >
          View Feedbacks
        </button>
        <button
          onClick={() => setActiveTab("create")}
          className={`px-4 py-2 rounded ${activeTab === "create" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
        >
          Create Feedback
        </button>
      </div>

      {activeTab === "view" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">All Feedbacks</h2>
          {feedbacks.length === 0 ? (
            <p>No feedbacks yet.</p>
          ) : (
            <ul className="space-y-4">
              {feedbacks.map((fb) => (
                <li key={fb._id} className="p-4 bg-gray-100 rounded">
                  <h3 className="font-bold">{fb.title}</h3>
                  <p>{fb.message}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {activeTab === "create" && (
        <form onSubmit={handleCreate} className="space-y-4">
          <h2 className="text-xl font-semibold">Create Feedback</h2>
          <div>
            <label className="block font-medium">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              required
            />
          </div>
          <div>
            <label className="block font-medium">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full border px-3 py-2 rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Home;

