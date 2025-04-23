"use client";
import React from "react";
import { useFlow } from "./useFlow";
import { AiOutlineClose } from "react-icons/ai";

export default function FlowQuestions({ className }: { className?: string }) {
  const {
    open,
    anim,
    i,
    questions,
    answers,
    openModal,
    closeModal,
    selectOption,
    next,
    prev,
  } = useFlow();

  const current = questions[i];
  const isLast = i === questions.length - 1;

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
        <div
          className="fixed inset-0 flex items-center justify-center backdrop-blur-lg z-50"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-md w-full transform transition-all duration-300 ${
              anim ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <header className="flex justify-between items-center mb-4">
              <h2
                id="modal-title"
                className="text-xl font-bold text-gray-900 dark:text-gray-100"
              >
                {isLast ? "Resumen de tus respuestas" : current.title}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Cerrar"
              >
                <AiOutlineClose size={24} />
              </button>
            </header>

            {!isLast ? (
              // Paso normal: muestra opciones
              <>
                <div className="grid gap-3 mb-6">
                  {current.options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => selectOption(opt)}
                      className={`px-4 py-2 border rounded transition-colors ${
                        answers[i] === opt
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
                      }`}
                      aria-pressed={answers[i] === opt}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between">
                  {i > 0 && (
                    <button
                      onClick={prev}
                      className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400"
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
              // Resumen final
              <>
                <ul className="list-disc list-inside mb-6 text-gray-800 dark:text-gray-200">
                  {questions.slice(0, -1).map((q, idx) => (
                    <li key={q.title}>
                      <strong>{q.title}:</strong> {answers[idx] || "—"}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-end">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    Finalizar
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
