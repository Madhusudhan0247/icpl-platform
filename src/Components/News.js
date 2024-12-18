import React, { useState, useEffect } from 'react';

// Default image for missing images
const defaultImage = 'https://via.placeholder.com/300x150?text=No+Image';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRSS = async () => {
      try {
        const response = await fetch('https://fetchnews-cytpkodkpa-uc.a.run.app');
        const rss = await response.text();

        // Parse RSS feed
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(rss, 'application/xml');

        const cleanHTML = (html) => {
          const tempElement = document.createElement('div');
          tempElement.innerHTML = html;
          return tempElement.textContent || tempElement.innerText || '';
        };

        // Extract news items
        const items = Array.from(xmlDoc.getElementsByTagName('item')).map((item) => ({
          title: item.getElementsByTagName('title')[0]?.textContent || 'No Title',
          link: item.getElementsByTagName('link')[0]?.textContent || '#',
          description: cleanHTML(item.getElementsByTagName('description')[0]?.textContent || 'No Description'),
          pubDate: item.getElementsByTagName('pubDate')[0]?.textContent || 'No Date',
          image: item.getElementsByTagName('enclosure')[0]?.getAttribute('url') || defaultImage,
        }));

        setNews(items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching news:', error);
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  if (loading) return <div style={styles.loading}>Loading news...</div>;

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Latest Crypto News</h1>
      <div style={styles.cardContainer}>
        {news.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.card}
          >
            <img
              src={item.image}
              alt={item.title}
              style={styles.image}
              onError={(e) => (e.target.src = defaultImage)}
            />
            <div style={styles.cardContent}>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDate}>{new Date(item.pubDate).toDateString()}</p>
              <p style={styles.cardDescription}>{item.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

// Styles
const styles = {
  container: {
    backgroundColor: '#171C2C',
    color: '#f0f0f0',
    padding: '20px',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'left',
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#fff',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    padding: '10px',
    overflowY: 'auto',
    maxHeight: '80vh',
  },
  card: {
    backgroundColor: '#1f1f1f',
    color: '#f0f0f0',
    textDecoration: 'none',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
    transform: 'scale(1)',
    cursor: 'pointer',
  },
  cardContent: {
    padding: '10px',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    lineHeight: '24px',
    display: '-webkit-box',
    WebkitLineClamp: 2, // Restrict to 2 lines
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  cardDate: {
    fontSize: '0.8rem',
    color: '#aaaaaa',
    marginBottom: '10px',
    textAlign: 'left',
    fontWeight: 'normal',
  },
  cardDescription: {
    fontSize: '14px',
    lineHeight: '1.4',
    fontWeight: 'normal',
    textAlign: 'left',
    color: '#C5C6CA',
    display: '-webkit-box',
    WebkitLineClamp: 3, // Restrict to 3 lines
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: '20px',
    color: '#fff',
  },
  hover: {
    transform: 'scale(1.05)',
  },
};

export default News;