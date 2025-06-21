import express from 'express';

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './utils/db.js';

connectDB();

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});




