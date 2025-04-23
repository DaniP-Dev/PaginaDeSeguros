"use client";
import { useState } from "react";
import questions from "./questions.json";

export function useFlow() {
  const [open, setOpen] = useState(false);
  const [anim, setAnim] = useState(false);
  const [i, setI] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const openModal = () => {
    setOpen(true);
    setTimeout(() => setAnim(true), 10);
  };

  const closeModal = () => {
    setAnim(false);
    setTimeout(() => {
      setOpen(false);
      setI(0);
    }, 300);
  };

  const selectOption = (option: string) => {
    const newAnswers = [...answers];
    newAnswers[i] = option;
    setAnswers(newAnswers);
  };

  const next = () => {
    if (i < questions.length - 1) {
      setI(i + 1);
    } else {
      closeModal();
    }
  };

  const prev = () => {
    if (i > 0) {
      setI(i - 1);
    }
  };

  return {
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
  };
}
