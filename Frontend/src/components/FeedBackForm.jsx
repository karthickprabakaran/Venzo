import { useState } from "react";
import axios from "axios";
const FeedbackForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Feature");
  const [status, setStatus] = useState("Open");
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    setIsSubmitting(true);

    try {

      await new Promise(resolve => setTimeout(resolve, 1500));


      const response = await axios.post("https://venzo-x5v3.onrender.com/api/feedbacks", {
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-indigo-500/25">
            <span className="text-3xl">💡</span>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-3">
            Share Your Ideas
          </h1>
          <p className="text-slate-600 text-lg font-medium">Help us improve by sharing your feedback and suggestions</p>
        </div>

        {/* Form Container */}
        <div className="bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-3xl shadow-xl shadow-slate-900/5 p-8 md:p-10">
          <div className="space-y-8">
            {/* Title Field */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-800 mb-3">
                What's your idea?
              </label>
              <input
                type="text"
                className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-lg"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Enter a clear, descriptive title..."
              />
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-800 mb-3">
                Tell us more
              </label>
              <textarea
                rows="5"
                className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-4 text-slate-800 placeholder-slate-400 focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-lg resize-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                placeholder="Describe your feedback in detail. What problem does it solve? How would it help users?"
              />
            </div>

            {/* Category and Status Row */}
            <div className="grid md:grid-cols-1 gap-6">
              {/* Category Field */}
              <div className="space-y-2">
                <label className="block text-sm font-bold text-slate-800 mb-3">
                  Category
                </label>
                <div className="relative">
                  <select
                    className="w-full bg-slate-50/50 border border-slate-200 rounded-xl px-4 py-4 text-slate-800 focus:bg-white focus:border-indigo-300 focus:ring-4 focus:ring-indigo-100 transition-all duration-300 outline-none text-lg appearance-none cursor-pointer"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="Feature">✨ Feature Request</option>
                    <option value="Bug">🐛 Bug Report</option>
                    <option value="UI">🎨 UI/UX Improvement</option>
                    <option value="Performance">⚡ Performance</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Status Field */}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30 disabled:shadow-none transition-all duration-300 text-lg hover:scale-[1.02] disabled:scale-100 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Submitting...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-3">
                    <span>Submit Feedback</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Success/Error Messages */}
          {success && (
            <div className="mt-6 p-4 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-emerald-700 font-medium">{success}</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mt-6 p-4 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <p className="text-red-700 font-medium">{error}</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-slate-500 text-sm">
            Your feedback helps us build better products for everyone 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
