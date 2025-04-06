import React from 'react';
import '../css/whatsAppButton.css';
import {FaWhatsapp} from 'react-icons/fa'

const WhatsAppButton = ({ phoneNumber = '0624192299' }) => {

  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  
  return (
    <a
      href={whatsappUrl} 
      className="whatsapp-button" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Chat on WhatsApp"
    >
           <FaWhatsapp size={48} color="#fff" />

    </a>
  );
};



export default WhatsAppButton;