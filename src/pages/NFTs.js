import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure correct path
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const NFTs = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // React Router navigation function

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        // Query to fetch only popular NFTs (isPopular: true)
        const nftQuery = query(collection(db, 'nfts'), where('isPopular', '==', true));
        const querySnapshot = await getDocs(nftQuery);

        const nftData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setNfts(nftData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching NFTs:', error);
        setLoading(false);
      }
    };

    fetchNFTs();
  }, []);

  if (loading) return <div style={styles.loading}>Loading NFTs...</div>;

  return (
    <div style={styles.container}>
      {/* Title and Button */}
      <h1 style={styles.title}>
        NFT Collection
        <button
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
          onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          onClick={() => navigate('/all-nfts')} // Navigate to All NFTs Page
        >
          View All NFTs
        </button>
      </h1>

      {/* NFT Cards */}
      <div style={styles.cardContainer}>
        {nfts.map((nft) => (
          <div key={nft.id} style={styles.card}>
            <img
              src={nft.imageUrl}
              alt={nft.title}
              style={styles.image}
              onError={(e) => (e.target.src = 'https://via.placeholder.com/300x150?text=No+Image')}
            />
            <h3 style={styles.cardTitle}>{nft.title}</h3>
            <p style={styles.cardDescription}>{nft.description}</p>
            <a href={nft.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
              View on OpenSea
            </a>
          </div>
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
  },
  title: {
    fontSize: '2rem',
    marginBottom: '10px',
    textAlign: 'left',
    padding: '20px',
    color: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '20px',
    gap: '10px',
  },
  card: {
    maxWidth: '300px',
    height: '400px',
    backgroundColor: '#1f1f1f',
    color: '#fff',
    borderRadius: '8px',
    padding: '10px',
    textAlign: 'left',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.3s ease-in-out',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '8px 8px 0 0',
  },
  cardTitle: {
    fontSize: '1.1rem',
    margin: '12px 0',
    color: '#f0f0f0',
  },
  cardDescription: {
    fontSize: '0.9rem',
    color: '#C5C6CA',
    marginBottom: '6px',
    textAlign: 'left',
  },
  link: {
    color: '#1E90FF',
    textDecoration: 'none',
    fontSize: '0.9rem',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginTop: '20px',
    color: '#fff',
  },
  button: {
    width: '200px',
    height: '48px',
    marginLeft: '20px',
    padding: '8px 12px',
    fontSize: '13.33px',
    color: '#fff',
    backgroundColor: '#86868c',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#187bcd',
  },
};

export default NFTs;