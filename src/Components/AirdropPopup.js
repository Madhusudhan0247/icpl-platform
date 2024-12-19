import React, { useState } from 'react';
import { addDoc, collection, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const AirdropPopup = ({ onClose }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState('idle'); // "idle", "success", "duplicate"
  const [errors, setErrors] = useState({ nickname: '', email: '' });

  const validateInputs = () => {
    let isValid = true;
    let newErrors = { nickname: '', email: '' };

    if (nickname.length < 3) {
      newErrors.nickname = 'Nickname must be at least 3 characters.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setLoading(true);
    try {
      // Check for duplicate email
      const q = query(collection(db, 'airdropQualifiers'), where('email', '==', email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setFormStatus('duplicate'); // Set form status to duplicate
        return;
      }

      // Save to Firestore
      await addDoc(collection(db, 'airdropQualifiers'), {
        name: nickname, // Save nickname as name in Firestore
        email,
        createdAt: serverTimestamp(),
      });

      setFormStatus('success'); // Set form status to success
    } catch (error) {
      console.error('Error saving data:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Render different UIs based on formStatus
 // Inside the success screen rendering logic
if (formStatus === 'success') {
  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popup}>
      <button style={styles.closeIcon} onClick={onClose}>
          &times;
        </button>
        <h2 style={styles.successTitle}>🎉 Congratulations!</h2>
        <p style={styles.successMessage}>
          You’re now qualified for our token airdrop. Get ready for an exciting journey!
        </p>
        <p style={styles.additionalMessage}>
          You’re in! We’ll keep you updated about our token launch and exclusive perks.
        </p>
        <button style={styles.exploreButton} onClick={() => window.location.href = '/'}>
          Explore More
        </button>
        <p style={styles.privacyNote}>
          No Spamming! Your information is safe with us. We respect your privacy.
        </p>
      </div>
    </div>
  );
}

  return (
    <div style={styles.popupOverlay}>
      <div style={styles.popup}>
      <button style={styles.closeIcon} onClick={onClose}>✖</button>
        <h2>Don’t Miss Out on Our Exclusive Airdrop! 🚀</h2>
        <p>We’re rewarding our early supporters! Sign up and get rewarded when our token launches.</p>
        {formStatus === 'duplicate' && (
          <p style={styles.duplicateMessage}>Looks like you’re already in the game. Stay tuned for updates!</p>
        )}
       <form onSubmit={handleSubmit} style={styles.form}>
  <div style={styles.inputWrapper}>
    <input
      type="text"
      placeholder="Nickname"
      value={nickname}
      onChange={(e) => setNickname(e.target.value)}
      style={styles.input}
    />
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      style={styles.input}
    />
  </div>
  {errors.nickname && <p style={styles.error}>{errors.nickname}</p>}
  {errors.email && <p style={styles.error}>{errors.email}</p>}
  <button type="submit" style={styles.button} disabled={loading}>
    {loading ? 'Submitting...' : 'Secure Spot'}
  </button>
</form>
        <p style={styles.privacyNote}>
          No Spamming! Your information is safe with us. We respect your privacy.
        </p>
      </div>
    </div>
  );
};

// Styles for the popup
const styles = {
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    opacity: 1,
    animation: 'fadeIn 0.5s ease-in-out',
  },
  popup: {
    backgroundColor: '#171C2C', // Updated background color
    padding: '20px',
    borderRadius: '8px',
    width: '600px',
    textAlign: 'center',
    color: '#fff',
    transform: 'scale(1)',
    animation: 'scaleIn 0.5s ease-in-out',
   
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },

  input: {
    padding: '12px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    backgroundColor: '#2a2a2a',
    color: '#fff',
    flex: 1, // Ensures inputs take equal space
    margin: '20px',
    width: '220px'
    
  },
  button: {
    padding: '10px',
    borderRadius: '4px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'normal',
    width:'300px',
    margin: '0 auto 16px auto', // Center the button horizontally
  },

  exploreButton: {
    padding: '10px 20px',
    borderRadius: '4px',
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'normal',
  },
  error: {
    color: '#ff4d4d',
    fontSize: '0.8rem',
    marginTop: '-5px',
  },
  duplicateMessage: {
    color: '#E7FF33',
    fontSize: '1rem',
    marginBottom: '10px',
  },
  privacyNote: {
    fontSize: '0.8rem',
    color: '#aaa',
    marginTop: '10px',
  },
  closeIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    fontSize: '1.5rem',
    color: '#fff',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },

// Add these new styles to the `styles` object
successTitle: {
  fontSize: '1.8rem',
  fontWeight: 'normal',
  marginBottom: '10px',
},
successMessage: {
  fontSize: '1.2rem',
  marginBottom: '10px',
  color: '#f0f0f0',
},
additionalMessage: {
  fontSize: '1rem',
  marginBottom: '20px',
  color: '#aaa',
},



};

export default AirdropPopup;