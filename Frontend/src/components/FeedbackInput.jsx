import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Feedback submitted successfully! Thank you for your input.' });
        setFormData({ title: '', description: '', category: '' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Failed to submit feedback' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-5">
      <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl relative overflow-hidden">
        {/* Top gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600"></div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Submit Feedback</h1>
          <p className="text-gray-600 text-lg">Help us improve by sharing your thoughts and suggestions</p>
        </div>

        <div className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              maxLength={200}
              required
              placeholder="Brief summary of your feedback"
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-gray-50 focus:bg-white"
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {formData.title.length}/200 characters
            </div>
          </div>

          {/* Description Textarea */}
          <div>
            <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              maxLength={2000}
              required
              rows={5}
              placeholder="Provide detailed information about your feedback..."
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
            />
            <div className="text-right text-sm text-gray-500 mt-1">
              {formData.description.length}/2000 characters
            </div>
          </div>

          {/* Category Select */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
              Category *
            </label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300 bg-gray-50 focus:bg-white cursor-pointer"
            >
              <option value="">Select a category</option>
              <option value="Feature">Feature Request</option>
              <option value="Bug">Bug Report</option>
              <option value="UI">UI/UX Improvement</option>
              <option value="Performance">Performance Issue</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={isLoading}
            className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 ${isLoading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0'
              } text-white flex items-center justify-center space-x-2`}
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Submitting...</span>
              </>
            ) : (
              <span>Submit Feedback</span>
            )}
          </button>
        </div>

        {/* Message Display */}
        {message.text && (
          <div className={`mt-6 p-4 rounded-xl border ${message.type === 'success'
              ? 'bg-green-50 border-green-200 text-green-800'
              : 'bg-red-50 border-red-200 text-red-800'
            }`}>
            {message.text}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
