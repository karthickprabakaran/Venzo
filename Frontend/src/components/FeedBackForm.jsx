import { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Feature");
  const [status, setStatus] = useState("Open");

  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);

    try {
      const response = await axios.post("http://localhost:5001/api/feedbacks", {
        title,
        description,
        category,
        status,
      });
      setSuccess("Feedback submitted successfully!");
      setTitle("");
      setDescription("");
      setCategory("Feature");
      setStatus("Open");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Submit Feedback</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            placeholder="Enter feedback title"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Description</label>
          <textarea
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            placeholder="Describe your feedback..."
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="Feature">Feature</option>
            <option value="Bug">Bug</option>
            <option value="UI">UI</option>
            <option value="Performance">Performance</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Status</label>
          <select
            className="w-full border border-gray-300 px-3 py-2 rounded"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
          >
            <option value="Open">Open</option>
            <option value="Planned">Planned</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {success && <p className="mt-4 text-green-600">{success}</p>}
      {error && <p className="mt-4 text-red-600">{error}</p>}
    </div>
  );
};

export default FeedbackForm;
