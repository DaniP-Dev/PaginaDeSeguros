"use client";
import "./HeroSection.css";
import React from "react";
import FlowQuestions from "@/components/flowQuestions/FlowQuestions";

const HeroSection = () => {
  return (
    <div className="relative h-[70vh] grid grid-cols-1 md:grid-cols-2 items-center p-4 lg:mb-60">
      {/* Columna 1: Contenido actual */}
      <div className="text-center flex flex-col justify-center items-center space-y-6">
        <h1 className="text-3xl font-bold text-white">
          Cotiza, compara y personaliza tu seguro ideal
        </h1>
        <h2 className="text-lg text-white">
          Asegura lo que más quieres, fácil y rápido. Seguro, seguro.
        </h2>
        <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center space-y-4 w-full">
          <span className="text-gray-700 font-medium">
            ¿Qué te gustaría proteger?
          </span>
          <select
            className="p-3 border border-gray-300 rounded-xl w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
            defaultValue="" // Usa defaultValue para establecer el valor inicial
          >
            <option value="" disabled hidden>
              Elige lo que quieras Asegurar
            </option>
            <option value="opcion_auto">Auto</option>
            <option value="opcion_moto">Moto</option>
            <option value="opcion_flotilla">Flotilla</option>
            <option value="opcion_gastos_medicos">Gastos Médicos</option>
            <option value="opcion_retiro">Retiro</option>
            <option value="opcion_vida_ahorro">Vida + Ahorro</option>
          </select>
          <FlowQuestions />
        </div>
      </div>

      {/* Columna 2: Imagen */}
      <div className="hidden md:flex justify-center items-center">
        <video
          src="https://stapefoneappresdev001.z20.web.core.windows.net/one-app/resources/components/inter/Hero.webm"
          autoPlay
          loop
          muted
          className="max-w-full h-auto rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
