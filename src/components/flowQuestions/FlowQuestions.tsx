"use client";
import React, { useEffect } from "react";
import CarInsurance from "./insuranceQuestions/CarInsurance";
import MotorcycleInsurance from "./insuranceQuestions/MotorcycleInsurance";
import FleetInsurance from "./insuranceQuestions/FleetInsurance";
import HealthInsurance from "./insuranceQuestions/HealthInsurance";
import LifeSavingsInsurance from "./insuranceQuestions/LifeSavingsInsurance";
import RetirementInsurance from "./insuranceQuestions/RetirementInsurance";

const FlowQuestions = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Bloquear/desbloquear scroll al abrir/cerrar el modal
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Limpiar el estilo al desmontar el componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-all"
      >
        Crea tu cotizacion gratis!
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fondo oscuro translúcido con desenfoque */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-md"
            onClick={closeModal} // Cerrar modal al hacer clic en el fondo
          ></div>

          {/* Contenido del modal */}
          <div className="bg-white p-8 rounded-2xl shadow-xl relative z-10 max-w-3xl w-full">
            {/* Botón de cierre */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold rounded-full w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            {/* Título */}
            <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">
              ¡Cotiza las veces que quieras!
            </h1>

            {/* Contenido del modal */}
            <div
              className="flex flex-col gap-6"
            >
              <CarInsurance />
              <MotorcycleInsurance />
              <FleetInsurance />
              <HealthInsurance />
              <LifeSavingsInsurance />
              <RetirementInsurance />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FlowQuestions;
