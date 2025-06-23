import { useState } from "react";

import ViewFeedbacks from "../components/ViewFeedbacks.jsx";
import CreateFeedback from "../components/FeedBackForm.jsx";
import Admins from "../components/admin.jsx";

const Home = () => {
  const [activeTab, setActiveTab] = useState("view");

  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col min-h-screen w-full">
        {/* Tabs */}
        <div className="flex space-x-4 justify-center bg-white shadow px-4 py-4 w-full">
          <button
            onClick={() => setActiveTab("view")}
            className={`px-4 py-2 rounded-t-md font-medium transition ${activeTab === "view"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-white"
              }`}
          >
            View Feedbacks
          </button>
          <button
            onClick={() => setActiveTab("create")}
            className={`px-4 py-2 rounded-t-md font-medium transition ${activeTab === "create"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-white"
              }`}
          >
            Create Feedback
          </button>
          <button
            onClick={() => setActiveTab("admin")}
            className={`px-4 py-2 rounded-t-md font-medium transition ${activeTab === "admin"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-white"
              }`}
          >
            Admin View
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow w-full bg-white p-6 shadow-inner">
          {activeTab === "view" && <ViewFeedbacks />}
          {activeTab === "create" && <CreateFeedback />}
          {activeTab === "admin" && <Admins />}
        </div>
      </div>
    </div>
  );
};

export default Home;
