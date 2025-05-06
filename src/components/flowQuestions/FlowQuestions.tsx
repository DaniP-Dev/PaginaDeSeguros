"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { Combobox } from "@headlessui/react";
import questionsData from "./questions.json";
import autosData from "./autos.json";

export default function FlowQuestions({ className }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string | string[]>>({});
  const [progress, setProgress] = useState(0);
  const [query, setQuery] = useState("");
  const [selectedMarca, setSelectedMarca] = useState<string | null>(null);

  // Filtrar preguntas según el tipo seleccionado
  const selectedData = questionsData.find((q) => q.type === selectedType);
  const questions = selectedData?.questions || [];
  const marcas = autosData.marcas || [];
  const modelos = selectedMarca
    ? marcas.find((marca) => marca.nombre === selectedMarca)?.modelos || []
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
    setSelectedMarca(null);
  };

  const handleInputChange = (value: string | string[], idx: number) => {
    setAnswers((prev) => ({ ...prev, [idx]: value }));
  };

  const next = () => setI((prev) => prev + 1);
  const prev = () => setI((prev) => Math.max(prev - 1, 0));

  const generateWhatsAppLink = () => {
    const phone = "3016328564"; // Número de WhatsApp
    const userAnswers = questions.map((q, idx) => {
      const answer = answers[idx] || "—"; // Captura la respuesta o usa "—" si está vacía
      return `${q.title}: ${answer}`;
    });

    const message = `Hola, me gustaría cotizar un seguro de tipo ${selectedType}.%0A%0A${userAnswers.join(
      "%0A"
    )}`;
    return `https://wa.me/${phone}?text=${message}`;
  };

  const renderInput = (option: string, idx: number) => {
    if (option.includes("Marca del vehículo")) {
      // Combobox dinámico para marcas
      const filteredMarcas = query
        ? marcas.filter((marca) =>
            marca.nombre.toLowerCase().includes(query.toLowerCase())
          )
        : marcas;

      return (
        <div key={idx} className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {option}
          </label>
          <Combobox
            value={selectedMarca || ""}
            onChange={(value) => {
              setSelectedMarca(value);
              handleInputChange(value ?? "", idx);
            }}
          >
            <Combobox.Input
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Selecciona una marca..."
              className="p-2 border rounded-lg w-full bg-gray-800 text-white"
            />
            <Combobox.Options className="bg-gray-700 text-white rounded-lg mt-2 shadow-lg">
              {filteredMarcas.map((marca) => (
                <Combobox.Option
                  key={marca.id}
                  value={marca.nombre}
                  className="p-2 hover:bg-blue-600 cursor-pointer"
                >
                  {marca.nombre}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </div>
      );
    } else if (option.includes("Modelo del vehículo")) {
      // Combobox dinámico para modelos
      const filteredModelos = query
        ? modelos.filter((modelo) =>
            modelo.toLowerCase().includes(query.toLowerCase())
          )
        : modelos;

      return (
        <div key={idx} className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {option}
          </label>
          <Combobox
            value={typeof answers[idx] === "string" ? answers[idx] : ""}
            onChange={(value) => handleInputChange(value ?? "", idx)}
          >
            <Combobox.Input
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Selecciona un modelo..."
              className="p-2 border rounded-lg w-full bg-gray-800 text-white"
            />
            <Combobox.Options className="bg-gray-700 text-white rounded-lg mt-2 shadow-lg">
              {filteredModelos.map((modelo, idx) => (
                <Combobox.Option
                  key={idx}
                  value={modelo}
                  className="p-2 hover:bg-blue-600 cursor-pointer"
                >
                  {modelo}
                </Combobox.Option>
              ))}
            </Combobox.Options>
          </Combobox>
        </div>
      );
    } else if (option.includes("Año del vehículo")) {
      // Selector de años
      const years = Array.from(
        { length: 30 },
        (_, index) => new Date().getFullYear() - index
      );

      return (
        <div key={idx} className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {option}
          </label>
          <select
            defaultValue=""
            onChange={(e) => handleInputChange(e.target.value, idx)}
            className="p-2 border rounded-lg w-full bg-gray-800 text-white"
          >
            <option value="" disabled>
              Selecciona el año
            </option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      );
    } else if (option.includes("manual")) {
      // Campo de texto para ingreso manual
      return (
        <div key={idx} className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {option}
          </label>
          <input
            type="text"
            placeholder={option}
            onChange={(e) => handleInputChange(e.target.value, idx)}
            className="p-2 border rounded-lg w-full bg-gray-800 text-white"
          />
        </div>
      );
    } else {
      // Botones de selección
      return (
        <div key={idx} className="mb-4">
          <label className="block text-sm font-medium text-gray-300 mb-2">
            {option}
          </label>
          <button
            onClick={() => handleInputChange(option, idx)}
            className={`px-4 py-2 border rounded transition-colors ${
              answers[idx] === option
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            {option}
          </button>
        </div>
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
                    <h3 className="text-lg font-semibold mb-4 text-center">
                      {current?.title}
                    </h3>
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
                  <h2 className="text-xl font-bold mb-4 text-center">
                    Resumen de tus respuestas
                  </h2>
                  <ul className="list-disc list-inside mb-6">
                    {questions.map((q, idx) => (
                      <li key={q.title}>
                        <strong>{q.title}:</strong> {answers[idx] || "—"}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded shadow-md"
                  >
                    Enviar por WhatsApp
                  </a>
                </>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
