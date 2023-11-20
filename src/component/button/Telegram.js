// TelegramButton.js

import React from 'react';
import { FaTelegram } from 'react-icons/fa';
import './Telegram.css';

const Telegram = () => {

    const openTelegramChat = () => {
        const TelegramLink = `https://t.me/waytowealthtamil`;
        window.open(TelegramLink, '_blank');
      };
    
  return (
  
        <div className="floating-telegram-button" onClick={openTelegramChat}>
         <FaTelegram />
      </div>
  );
};

export default Telegram;
