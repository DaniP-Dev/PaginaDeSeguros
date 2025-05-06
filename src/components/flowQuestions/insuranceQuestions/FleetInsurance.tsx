"use client";
import React from "react";
import "./insuranceGlobal.css";

const FleetInsurance = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Seguro Flotilla
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button onClick={closeModal}>X</button>
            {/* Contenido del modal */}
            <div>flotilla </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FleetInsurance;
