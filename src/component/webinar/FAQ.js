import React, { useState } from 'react';
import './FAQ.css'; // Your CSS file for styling
import { Typography } from '@mui/material';

const FAQList = () => {
  const faqs = [
    { question: "Is Recording available?", answer: "Yes, Its available." },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="faq-list">
      <Typography color={"#000"} fontSize={"20px"} fontWeight={600}  textAlign={"center"} my={2} textTransform={"capitalize"} fontFamily={"Montserrat"} >Frequently Asked Questions</Typography>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <div className="question" onClick={() => handleToggle(index)}>
            <span className="question-text">{faq.question}</span>
            <span className={`icon ${expandedIndex === index ? 'minus' : 'plus'}`}></span>
          </div>
          <div className={`answer ${expandedIndex === index ? 'active' : ''}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};


export default FAQList ;
