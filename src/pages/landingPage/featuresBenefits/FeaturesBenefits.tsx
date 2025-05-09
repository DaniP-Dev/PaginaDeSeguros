"use client";
import React from "react";
import CarouselContainer from "@/components/carousel/CarouselContainer";

const FeaturesBenefits = () => {
  return (
    <>
      <div className="text-center bg-gradient-to-b from-gray-100 to-white py-10 px-6 rounded-3xl shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          Te ayudamos a proteger desde tu coche hasta tu mascota
        </h1>
        <CarouselContainer />
      </div>
    </>
  );
};

export default FeaturesBenefits;
