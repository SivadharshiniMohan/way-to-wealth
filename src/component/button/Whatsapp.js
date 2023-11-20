import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './../button/Whatsapp.css'; // Don't forget to create and import your CSS file for styling

const WhatsApp = () => {
  // Add your WhatsApp number here
  const whatsappNumber = '6383849719';

  const openWhatsAppChat = () => {
    const whatsappLink = `https://wa.me/${whatsappNumber}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="floating-whatsapp-button" onClick={openWhatsAppChat}>
      <FaWhatsapp />
    </div>
  );
};

export default WhatsApp;
