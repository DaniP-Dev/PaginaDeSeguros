"use client";
import React, { useState } from "react";

const FlowQuestions = ({ className }: { className?: string }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [animateModal, setAnimateModal] = useState(false); // Controla la transición
  const [step, setStep] = useState(0);

  const questions = [
    { title: "Pregunta 1", content: "¿Cómo te llamas?" },
    { title: "Pregunta 2", content: "¿Cuál es tu edad?" },
    { title: "Pregunta 3", content: "¿De dónde eres?" },
  ];

  // Abre el modal y activa la animación después de un pequeño delay
  const openModal = () => {
    setModalOpen(true);
    setTimeout(() => {
      setAnimateModal(true);
    }, 10);
  };

  // Desactiva la animación para el cierre y, una vez terminada la transición, desmonta el modal
  const closeModal = () => {
    setAnimateModal(false);
    setTimeout(() => {
      setModalOpen(false);
      setStep(0);
    }, 300); // El delay debe coincidir con la duración de la transición
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      closeModal();
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <div className={className}>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-green-600 hover:bg-pink-700 focus:bg-green-700 active:bg-green-800 text-white rounded transition-colors"
      >
        Abrir Flujo de Preguntas
      </button>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-lg z-50 px-1">
          <div
            className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg w-full max-w-md transform transition-all duration-300 ${
              animateModal
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            {/* Encabezado con la pregunta actual */}
            <h2 className="text-xl font-bold mb-4">{questions[step].title}</h2>

            {/* Contenido de la pregunta */}
            <div className="mb-6">
              <p>{questions[step].content}</p>
            </div>

            {/* Botones de navegación */}
            <div className="flex justify-between">
              {step > 0 && (
                <button
                  onClick={handlePrev}
                  className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded transition-colors"
                >
                  Anterior
                </button>
              )}
              <button
                onClick={handleNext}
                className="ml-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors"
              >
                {step === questions.length - 1 ? "Finalizar" : "Siguiente"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowQuestions;
