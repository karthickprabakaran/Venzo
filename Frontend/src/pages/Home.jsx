import { useState } from "react";





import ViewFeedbacks from "../components/ViewFeedbacks.jsx";
import CreateFeedback from "../components/FeedBackForm.jsx";



const Home = () => {

  const [activeTab, setActiveTab] = useState("view");

  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <div className="flex space-x-4 mb-6 justify-center">
        <button
          onClick={() => setActiveTab("view")}
          className={`px-4 py-2 rounded-t-md font-medium transition ${activeTab === "view"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700"
            }`}
        >
          View Feedbacks
        </button>
        <button
          onClick={() => setActiveTab("create")}
          className={`px-4 py-2 rounded-t-md font-medium transition ${activeTab === "create"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 text-gray-700"
            }`}
        >
          Create Feedback
        </button>
      </div>

      <div className="bg-white p-6 rounded-b-xl shadow">
        {activeTab === "view" ? <ViewFeedbacks /> : <CreateFeedback />}
      </div>
    </div>
  );
};

export default Home;
