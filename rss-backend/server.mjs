import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8000;

// Use CORS middleware
app.use(cors());

// Endpoint to fetch RSS feed
app.get('/api/news', async (req, res) => {
  try {
    const response = await fetch('https://cryptoslate.com/feed/');
    const rss = await response.text();
    res.header('Content-Type', 'application/rss+xml');
    res.send(rss);
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    res.status(500).json({ error: 'Failed to fetch RSS feed' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});