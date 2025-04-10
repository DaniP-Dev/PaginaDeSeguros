"use client";
import "./HeroSection.css";
import React from "react";
import FlowQuestions from "@/components/flowQuestions/FlowQuestions";

const HeroSection = () => {
  return (
    <div className="relative h-[90vh] grid grid-cols-1 md:grid-cols-2 items-center p-4">
      {/* Columna 1: Contenido actual */}
      <div className="text-center flex flex-col justify-center items-center space-y-6">
        <h1 className="text-3xl font-bold text-white">
          Cotiza, compara y personaliza tu seguro ideal
        </h1>
        <h2 className="text-lg text-white">
          Asegura lo que más quieres, fácil y rápido. Seguro, seguro.
        </h2>
        <div className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center space-y-4 w-full">
          <span className="text-gray-700 font-medium">
            ¿Qué te gustaría proteger?
          </span>
          <select
            className="p-2 border rounded-xl w-full max-w-xs"
            defaultValue="" // Usa defaultValue para establecer el valor inicial
          >
            <option value="" disabled hidden>
              Elige lo que quieras Asegurar
            </option>
            <option value="option1">Mi Coche</option>
            <option value="option2">Mi Moto</option>
            <option value="option3">Vida + Ahorro</option>
            <option value="option4">Mi Perro</option>
            <option value="option5">Mi Gato</option>
          </select>
          <FlowQuestions className="w-full" />
        </div>
      </div>

      {/* Columna 2: Imagen */}
      <div className="hidden md:flex justify-center items-center">
        <img
          src="/imgs/hero_image.webp"
          alt="Imagen de seguro"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroSection;
