import React from "react";
import whatsappLogo from "./whatsapp-logo.svg"; // Import the WhatsApp logo image

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/917533030500" // Replace with your phone number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "40px",
        right: "20px",
        zIndex: "9999",
      }}
    >
      <img
        src={whatsappLogo} // Use the imported WhatsApp logo image
        alt="WhatsApp"
        style={{
          width: "70px",
          height: "70px",
          borderRadius: "50%",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
        }}
      />
    </a>
  );
};

export default WhatsApp;
