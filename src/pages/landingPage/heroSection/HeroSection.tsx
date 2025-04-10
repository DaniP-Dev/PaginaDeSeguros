"use client";
import "./HeroSection.css";
import React from "react";
import FlowQuestions from "@/components/flowQuestions/FlowQuestions";

const HeroSection = () => {
  return (
    <div className="text-center bg-gray-500 h-[80vh] flex flex-col justify-between">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center h-full">
        <div className="ep1 bg-red-500 flex flex-col justify-center items-center">
          <h1>Empresa 1</h1>
          <p>Precios bajos</p>
        </div>
        <div className="ep2 bg-blue-500 flex flex-col justify-center items-center">
          <h1>Empresa 1</h1>
          <p>Seguridad Avanzada</p>
        </div>
        <div className="ep3 bg-green-500 flex flex-col justify-center items-center">
          <h1>Empresa 1</h1>
          <p>Préstamos fáciles</p>
        </div>
      </div>
      <FlowQuestions />
    </div>
  );
};

export default HeroSection;
