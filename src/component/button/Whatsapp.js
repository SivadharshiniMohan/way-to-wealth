import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './../button/Whatsapp.css'; // Don't forget to create and import your CSS file for styling
import { mobileNumber } from '../common';

const WhatsApp = () => {


  const openWhatsAppChat = () => {
    const whatsappLink = `https://wa.me/${mobileNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="floating-whatsapp-button" onClick={openWhatsAppChat}>
      <FaWhatsapp />
    </div>
  );
};

export default WhatsApp;
