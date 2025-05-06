"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import questionsData from "./questions.json";

export default function FlowQuestions({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [progress, setProgress] = useState(0);

  // Filtrar preguntas según el tipo seleccionado
  const questions = selectedType
    ? questionsData.find((q) => q.type === selectedType)?.questions || []
    : [];

  const current = questions[i];
  const isLast = i === questions.length - 1;

  useEffect(() => {
    setProgress(((i + 1) / questions.length) * 100);
  }, [i, questions.length]);

  const openModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    setSelectedType(null);
    setI(0);
    setAnswers({});
  };

  const handleInputChange = (value: string | string[], idx: number) => {
    setAnswers((prev) => ({ ...prev, [idx]: value }));
  };

  const next = () => setI((prev) => prev + 1);
  const prev = () => setI((prev) => Math.max(prev - 1, 0));

  const renderInput = (option: string, idx: number) => {
    if (option.includes("API")) {
      // Simula una lista desplegable dinámica
      return (
        <select
          key={idx}
          onChange={(e) => handleInputChange(e.target.value, i)}
          className="p-2 border rounded-lg w-full bg-gray-800 text-white"
        >
          <option value="" disabled selected>
            Selecciona una opción
          </option>
          <option value="Opción 1">Opción 1</option>
          <option value="Opción 2">Opción 2</option>
        </select>
      );
    } else if (option.includes("manual")) {
      // Campo de texto para ingreso manual
      return (
        <input
          key={idx}
          type="text"
          placeholder={option}
          onChange={(e) => handleInputChange(e.target.value, i)}
          className="p-2 border rounded-lg w-full bg-gray-800 text-white"
        />
      );
    } else {
      // Botones de selección
      return (
        <button
          key={idx}
          onClick={() => handleInputChange(option, i)}
          className={`px-4 py-2 border rounded transition-colors ${
            answers[i] === option
              ? "bg-blue-600 text-white"
              : "bg-gray-700 text-white hover:bg-gray-600"
          }`}
        >
          {option}
        </button>
      );
    }
  };

  return (
    <div className={className}>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
        aria-label="Abrir cotización"
      >
        Cotizar
      </button>

      {open && (
        <AnimatePresence>
          <motion.div
            className="fixed inset-0 flex items-center justify-center backdrop-blur-lg z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-gray-900 text-white rounded-lg p-6 shadow-lg max-w-md w-full transform transition-all duration-300"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <header className="flex justify-between items-center mb-4">
                <h2 id="modal-title" className="text-xl font-bold text-white">
                  {!selectedType
                    ? "Selecciona el tipo de seguro"
                    : isLast
                    ? "Resumen de tus respuestas"
                    : current?.title}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-200"
                  aria-label="Cerrar"
                >
                  <AiOutlineClose size={24} />
                </button>
              </header>

              {!selectedType ? (
                <div className="grid gap-3">
                  {questionsData.map((q) => (
                    <button
                      key={q.type}
                      onClick={() => setSelectedType(q.type)}
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded shadow-md"
                    >
                      {q.type}
                    </button>
                  ))}
                </div>
              ) : !isLast ? (
                <>
                  <div className="mb-6">
                    {current?.options.map((opt, idx) => (
                      <div key={idx} className="mb-4">
                        {renderInput(opt, idx)}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      onClick={prev}
                      disabled={i === 0}
                      className="px-4 py-2 bg-gray-500 hover:bg-gray-400 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                    >
                      Anterior
                    </button>
                    <div className="w-full bg-gray-700 h-2 rounded-lg mx-4">
                      <div
                        className="bg-blue-600 h-2 rounded-lg"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <button
                      onClick={next}
                      disabled={!answers[i]}
                      className="px-4 py-2 bg-blue-600 disabled:opacity-50 hover:bg-blue-700 text-white rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Siguiente
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h2 className="text-xl font-bold mb-4">
                    Resumen de tus respuestas
                  </h2>
                  <ul className="list-disc list-inside mb-6">
                    {questions.map((q, idx) => (
                      <li key={q.title}>
                        <strong>{q.title}:</strong> {answers[idx] || "—"}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow-md"
                  >
                    Finalizar
                  </button>
                </>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
