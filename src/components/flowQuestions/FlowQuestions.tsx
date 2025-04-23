"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import questionsData from "./questions.json";

export default function FlowQuestions({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null); // Tipo de seguro seleccionado
  const [i, setI] = useState(0); // Índice de la pregunta actual
  const [answers, setAnswers] = useState<Record<number, string | string[]>>(
    {}
  ); // Respuestas del usuario

  // Filtrar preguntas según el tipo seleccionado
  const questions = selectedType
    ? questionsData.find((q) => q.type === selectedType)?.questions || []
    : [];

  const current = questions[i]; // Pregunta actual
  const isLast = i === questions.length - 1; // Verifica si es la última pregunta

  const openModal = () => setOpen(true);
  const closeModal = () => {
    setOpen(false);
    setSelectedType(null); // Reinicia el tipo seleccionado
    setI(0); // Reinicia el índice
    setAnswers({}); // Limpia las respuestas
  };

  const handleInputChange = (value: string | string[], idx: number) => {
    setAnswers((prev) => ({ ...prev, [idx]: value }));
  };

  const next = () => setI((prev) => prev + 1);
  const prev = () => setI((prev) => Math.max(prev - 1, 0));

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
                <h2
                  id="modal-title"
                  className="text-xl font-bold text-white"
                >
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
                // Pantalla inicial: selección del tipo de seguro
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
                // Paso normal: muestra inputs según el tipo de pregunta
                <>
                  <div className="mb-6">
                    {current?.options.map((opt, idx) => (
                      <div key={idx} className="mb-4">
                        <button
                          onClick={() => handleInputChange(opt, i)}
                          className={`px-4 py-2 border rounded transition-colors ${
                            answers[i] === opt
                              ? "bg-blue-600 text-white"
                              : "bg-gray-700 text-white hover:bg-gray-600"
                          }`}
                        >
                          {opt}
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    {i > 0 && (
                      <button
                        onClick={prev}
                        className="px-4 py-2 bg-gray-500 hover:bg-gray-400 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                      >
                        Anterior
                      </button>
                    )}
                    <button
                      onClick={next}
                      disabled={!answers[i]}
                      className="ml-auto px-4 py-2 bg-blue-600 disabled:opacity-50 hover:bg-blue-700 text-white rounded shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Siguiente
                    </button>
                  </div>
                </>
              ) : (
                // Resumen final con enlace a WhatsApp
                <>
                  <h2 className="text-xl font-bold mb-4">
                    Resumen de tus respuestas
                  </h2>
                  <ul className="list-disc list-inside mb-6">
                    {questions.map((q, idx) => (
                      <li key={q.title}>
                        <strong>{q.title}:</strong>{" "}
                        {answers[idx] || "—"}
                      </li>
                    ))}
                  </ul>
                  {(() => {
                    const phone = "3016328564";
                    const userAnswers = questions.map(
                      (q, idx) => `${q.title}: ${answers[idx] || "—"}`
                    );
                    const greeting = "Hola, me gustaría hablar con un asesor.";
                    const message =
                      userAnswers.join("%0A") + "%0A%0A" + greeting;
                    const waLink = `https://wa.me/${phone}?text=${message}`;
                    return (
                      <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
                      >
                        Conoce tu resultado
                      </a>
                    );
                  })()}
                </>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
