import React from "react";
import "./botonWpp.css";

const BotonWpp = () => {
  return (
    <>
      <a
        href="https://wa.me/3016328564?text=Vengo%20de%20la%20página%20de%20cotización"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 bg-green-500 text-white rounded-full p-3 shadow-lg hover:bg-green-600 transition duration-300"
      >
        <img src="/imgs/whatsapp.png" alt="WhatsApp" className="w-12 h-12" />
      </a>
    </>
  );
};

export default BotonWpp;
