import { useState, useEffect } from "react";
import axios from "axios";

const Admins = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const res = await axios.get("http://localhost:5001/api/feedbacks");
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, newStatus) => {
    try {
      await axios.patch(`http://localhost:5001/api/feedbacks/${id}/status`, {
        status: newStatus,
      });
      fetchFeedbacks();
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-gray-600 text-sm">Loading feedbacks...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Admin Feedback Panel</h1>

        {feedbacks.length === 0 ? (
          <p className="text-center text-gray-500">No feedbacks to manage.</p>
        ) : (
          <div className="grid gap-6">
            {feedbacks.map((fb) => (
              <div
                key={fb._id}
                className="bg-gray-50 border border-gray-200 p-6 rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-800">{fb.title}</h3>
                <p className="text-gray-600 mt-2">{fb.description}</p>
                <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="text-sm text-gray-500">
                    <span className="font-medium text-gray-700">Category:</span> {fb.category || "General"}
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mr-2">Status:</label>
                    <select
                      value={fb.status}
                      onChange={(e) => updateStatus(fb._id, e.target.value)}
                      className="px-3 py-2 text-sm text-black border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-200"
                    >
                      <option value="Planned">Planned</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admins;
