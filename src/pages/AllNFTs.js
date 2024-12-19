import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const AllNFTs = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNFTs = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'nfts'));
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
      {/* Top Section */}
      <div style={styles.topSection}>
        <div style={styles.header}>
          <h1 style={styles.title}>Explore</h1>
          <span style={styles.itemCount}>{nfts.length} items selected</span>
        </div>

        {/* Sort Dropdown */}
        <div style={styles.sortDropdown}>
          <select style={styles.dropdown}>
            <option>Recently added</option>
          </select>
        </div>
      </div>

      {/* Filters Section */}
      <div style={styles.filters}>
        <div style={styles.filterItem}>
          <label style={styles.filterLabel}>Sale format</label>
          <select style={styles.selectBox}>
            <option>Choose format</option>
          </select>
        </div>

        <div style={styles.filterItem}>
          <label style={styles.filterLabel}>Price</label>
          <div style={styles.priceRange}>
            <input type="text" placeholder="Min" style={styles.priceInput} />
            <span>–</span>
            <input type="text" placeholder="Max" style={styles.priceInput} />
          </div>
        </div>

        <div style={styles.filterItem}>
          <label style={styles.filterLabel}>Collection</label>
          <select style={styles.selectBox}>
            <option>Choose collection</option>
          </select>
        </div>

        <div style={styles.filterItem}>
          <label style={styles.filterLabel}>Category</label>
          <select style={styles.selectBox}>
            <option>Choose category</option>
          </select>
        </div>

        <button style={styles.applyButton}>Apply</button>
      </div>

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
    backgroundColor: '#101010',
    color: '#fff',
    padding: '20px',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  topSection: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#fff',
    margin: '36px',
  },
  itemCount: {
    fontSize: '1rem',
    color: '#888',
  },
  sortDropdown: {
    display: 'flex',
    justifyContent: 'center',
    margin: '36px',
    width: '200px',
  },
  dropdown: {
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid #444',
    backgroundColor: '#1C1C1C',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  filters: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    margin: '20px 36px',
    backgroundColor: '#1C1C1C',
    padding: '20px',
    borderRadius: '8px',

  },
  filterItem: {
    display: 'flex',
    flexDirection: 'column',
  },
  filterLabel: {
    fontSize: '0.8rem',
    marginBottom: '12px',
    color: '#aaa',
  },
  selectBox: {
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #aaa',
    backgroundColor: '#333',
    color: '#fff',
    fontSize: '1rem',
    width: '200px',
  },
  priceRange: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  priceInput: {
    padding: '8px',
    borderRadius: '8px',
    border: '1px solid #aaa',
    color: '#fff',
    width: '120px',
    backgroundColor: '#333',
    fontSize: '1rem',
  },
  applyButton: {
    padding: '14px 20px',
    backgroundColor: '#D0362E',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    width:'200px'
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    margin: '36px',
  },
  card: {
    width: '300px',
    backgroundColor: '#1E1E1E',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  cardTitle: {
    fontSize: '1.2rem',
    margin: '10px',
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: '0.9rem',
    margin: '10px',
    color: '#aaa',
  },
  link: {
    display: 'block',
    textAlign: 'center',
    marginBottom: '10px',
    color: '#187bcd',
    textDecoration: 'none',
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#fff',
  },
};

export default AllNFTs;