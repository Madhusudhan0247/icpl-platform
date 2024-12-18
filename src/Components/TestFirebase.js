import React, { useEffect } from 'react';
import { db } from '../firebase'; // Adjust path to firebase.js
import { collection, getDocs } from 'firebase/firestore';

const TestFirebase = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "test")); // Replace "test" with your collection name
        querySnapshot.forEach((doc) => {
          console.log(`${doc.id} =>`, doc.data()); // Log data to console
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '20px', textAlign: 'center', fontSize: '18px', color: '#333' }}>
      Testing Firebase Firestore... Check the browser console for results!
    </div>
  );
};

export default TestFirebase;