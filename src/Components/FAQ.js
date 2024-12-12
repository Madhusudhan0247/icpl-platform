import React, { useState } from 'react';

const FAQ = () => {
  // Array of questions and answers
  const faqs = [
    {
      question: 'What is FreeHit used for?',
      answer: 'FreeHit (FHT) is the utility token powering the ICPL platform. It enables fans to engage with NFTs, merchandise, and more.',
    },
    {
      question: 'How do I earn FreeHit?',
      answer: 'You can earn FreeHit through games, referrals, and participation in events.',
    },
    {
      question: 'Is FreeHit secure?',
      answer: 'Yes, FreeHit is built on a secure blockchain platform with measures to protect your investments.',
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null); // Track the currently expanded question

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle expand/collapse
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Frequently asked questions</h2>
      <div style={faqContainerStyle}>
        {faqs.map((faq, index) => (
          <div key={index} style={faqItemStyle}>
            <div
              style={questionStyle}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span style={iconStyle}>
                {expandedIndex === index ? (
                  <span style={outlineIconStyle}>&#x25B2;</span> // Up arrow outline
                ) : (
                  <span style={outlineIconStyle}>&#x25BC;</span> // Down arrow outline
                )}
              </span>
            </div>
            {expandedIndex === index && (
              <div style={answerStyle}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Styles
const containerStyle = {
  padding: '40px',
  backgroundColor: '#171C2C',
  textAlign: 'center',
};

const headerStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  marginBottom: '36px',
  color: '#DA625C',
};

const faqContainerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'left',
};

const faqItemStyle = {
  borderBottom: '1px solid #333745',
  padding: '15px 0',
  marginBottom: '20px', // Increased margin below each line
};

const questionStyle = {
  fontSize: '20px',
  fontWeight: 'normal',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#fff',
};

const answerStyle = {
  marginTop: '10px',
  fontSize: '16px',
  color: '#C5C6CA',
};

const iconStyle = {
  fontSize: '18px',
  fontWeight: 'normal',
  color: '#fff',
};

const outlineIconStyle = {
  border: '1px solid #fff',
  borderRadius: '50%',
  padding: '3px',
  fontSize: '14px',
  lineHeight: '1',
  display: 'inline-block',
  width: '20px',
  height: '20px',
  textAlign: 'center',
};

export default FAQ;