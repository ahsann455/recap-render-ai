require('dotenv').config();
const express = require('express');
const cors = require('cors');
const uploadRoutes = require('./routes/upload');
const lectureRoutes = require('./routes/lecture');
const videoRoutes = require('./routes/video');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: true }));

// Static files for generated outputs and simple UI
// Enable proper video streaming with range requests
app.use('/outputs', express.static(path.join(__dirname, 'outputs'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.mp4') || filePath.endsWith('.webm')) {
      res.set('Accept-Ranges', 'bytes');
      res.set('Content-Type', 'video/mp4');
    }
  }
}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/upload', uploadRoutes);
app.use('/api/lecture', lectureRoutes);
app.use('/api/video', videoRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'ClassroomAI API is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!', 
    message: err.message 
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
