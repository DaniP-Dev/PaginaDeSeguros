"use client";
import React from "react";
import questionsData from "./questions.json";

export function useFlow() {
  const [open, setOpen] = React.useState(false);
  const [i, setI] = React.useState(0);
  const [answers, setAnswers] = React.useState<string[]>([]);
  const [selectedType, setSelectedType] = React.useState<string>("Auto"); // Tipo seleccionado

  // Filtrar preguntas según el tipo seleccionado
  const questions = React.useMemo(() => {
    const typeData = questionsData.find((q) => q.type === selectedType);
    return typeData ? typeData.questions : [];
  }, [selectedType]);

  const openModal = () => setOpen(true);

  const closeModal = () => {
    setOpen(false);
    setI(0); // Reinicia el índice
    setAnswers([]); // Limpia las respuestas
  };

  const selectOption = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[i] = option;
    setAnswers(newAnswers);
  };

  const next = () => setI((prev) => prev + 1);
  const prev = () => setI((prev) => Math.max(prev - 1, 0));

  return {
    open,
    anim: open,
    i,
    questions,
    answers,
    openModal,
    closeModal,
    selectOption,
    next,
    prev,
    setSelectedType, // Permite cambiar el tipo de preguntas
  };
}
