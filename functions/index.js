const functions = require("firebase-functions");
const fetch = require("node-fetch");
const cors = require("cors"); // Import CORS middleware

const corsHandler = cors({ origin: true }); // Allow all origins (adjust this for production)

exports.fetchNews = functions.https.onRequest((req, res) => {
  corsHandler(req, res, async () => { // Wrap function with CORS handler
    try {
      const response = await fetch("https://cryptoslate.com/feed/");
      const rssData = await response.text();
      res.set("Content-Type", "application/xml");
      res.status(200).send(rssData);
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).send("Failed to fetch news.");
    }
  });
});