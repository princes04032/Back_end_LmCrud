require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const booksRouter = require('./routes/books');
const memberRoutes = require('./routes/member');
const loanRoutes = require('./routes/loan');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
app.use('/api/books', booksRouter);
app.use('/api/members', memberRoutes);
app.use('/api/loans', loanRoutes);

// Start server
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));