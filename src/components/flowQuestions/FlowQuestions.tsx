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
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Abrir
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Fondo oscuro translúcido */}
          <div
            className="fixed inset-0 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm"
            onClick={closeModal} // Cerrar modal al hacer clic en el fondo
          ></div>

          {/* Contenido del modal */}
          <div className="bg-white p-6 rounded relative z-10">
            <button onClick={closeModal} className="absolute top-2 right-2">
              X
            </button>
            <div className="flex flex-col gap-4">
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
