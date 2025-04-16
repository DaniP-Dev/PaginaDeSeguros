"use client";
import React from "react";
import CarouselContainer from "@/components/carousel/CarouselContainer";

const FeaturesBenefits = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold p-5">
          Te ayudamos a proteger desde tu coche hasta tu mascota
        </h1>
        <CarouselContainer />
      </div>
    </>
  );
};

export default FeaturesBenefits;
