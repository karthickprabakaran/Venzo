import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot exceed 200 characters']
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true,
    maxlength: [2000, 'Description cannot exceed 2000 characters']
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: {
      values: ['Feature', 'Bug', 'UI', 'Performance'],
      message: 'Category must be one of: Feature, Bug, UI, Performance'
    },
    default: 'Feature'
  },
  status: {
    type: String,
    required: [true, 'Status is required'],
    enum: {
      values: ['Open', 'Planned', 'In Progress', 'Done'],
      message: 'Status must be one of: Open, Planned, In Progress, Done'
    },
    default: 'Open'
  },
  upvotes: {
    type: Number,
    default: 0,
    min: [0, 'Upvotes cannot be negative']
  }
}, {
  timestamps: true
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
