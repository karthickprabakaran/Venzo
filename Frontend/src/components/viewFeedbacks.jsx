import { useState, useEffect } from "react";
import axios from "axios";

const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "planned":
      return "bg-yellow-50 text-yellow-700 ring-1 ring-yellow-200";
    case "in progress":
      return "bg-blue-50 text-blue-700 ring-1 ring-blue-200";
    case "completed":
      return "bg-green-50 text-green-700 ring-1 ring-green-200";
    default:
      return "bg-gray-100 text-gray-600 ring-1 ring-gray-200";
  }
};

const ViewFeedbacks = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterCategory, setFilterCategory] = useState("All");

  const fetchFeedbacks = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://venzo-x5v3.onrender.com/api/feedbacks");
      setFeedbacks(res.data);
    } catch (err) {
      console.error("Error fetching feedbacks:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleUpvote = async (id) => {
    try {
      await axios.patch(`https://venzo-x5v3.onrender.com/api/feedbacks/${id}/upvote`);
      fetchFeedbacks();
    } catch (err) {
      console.error("Error upvoting feedback:", err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const filteredFeedbacks = feedbacks.filter((fb) => {
    const matchesSearch =
      fb.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fb.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus =
      filterStatus === "All" || fb.status?.toLowerCase() === filterStatus.toLowerCase();
    const matchesCategory =
      filterCategory === "All" || fb.category?.toLowerCase() === filterCategory.toLowerCase();
    return matchesSearch && matchesStatus && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          <p className="text-gray-600 text-sm">Loading feedback...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Product Feedback
          </h1>
          <p className="text-gray-600 mt-2">Shape the product by sharing your ideas ✨</p>
          <div className="mt-3 inline-flex items-center gap-2 text-sm text-indigo-700 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 font-medium">
            <div className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            {filteredFeedbacks.length} Ideas Shown
          </div>
        </div>
      </header>

      {/* Filters */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <input
            type="text"
            placeholder="🔍 Search feedback..."
            className="w-full md:w-1/3 px-4 py-2 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <div className="flex gap-3 flex-wrap">
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg shadow-sm text-black focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              <option value="All">All Categories</option>
              <option value="Feature">Feature</option>
              <option value="Bug">Bug</option>
              <option value="UI">UI</option>
              <option value="Performance">Performance</option>
            </select>

            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg shadow-sm  text-black focus:outline-none focus:ring-2 focus:ring-indigo-200"
            >
              <option value="All">All Statuses</option>
              <option value="Planned">Planned</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
        </div>
      </section>

      {/* Feedback List */}
      <section className="max-w-6xl mx-auto px-4 pb-20">
        {filteredFeedbacks.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">💭</span>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">No feedback found</h2>
            <p className="text-gray-500 mt-2">Try different filters or search terms.</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredFeedbacks.map((fb, idx) => (
              <div
                key={fb._id}
                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition p-6 flex flex-col gap-4"
              >
                <div className="flex justify-between items-start gap-6">
                  {/* Upvote Button */}
                  <button
                    onClick={() => handleUpvote(fb._id)}
                    className="flex flex-col items-center  bg-blue-600  px-3 py-2 rounded-lg text-indigo-600 border border-indigo-200 shadow-sm hover:scale-105 transition-transform"
                  >
                    <svg className="w-5 h-5 mb-1" fill="white" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm  text-white font-bold">{fb.upvotes ?? 0}</span>
                  </button>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-800">{fb.title}</h3>
                    <p className="text-gray-600 mt-1 text-sm leading-relaxed">{fb.description}</p>
                    <div className="mt-4 flex gap-2 flex-wrap text-sm">
                      <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-700 ring-1 ring-purple-200">
                        {fb.category || "General"}
                      </span>
                      <span className={`px-3 py-1 rounded-full ${getStatusColor(fb.status)}`}>
                        {fb.status || "Unknown"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default ViewFeedbacks;
