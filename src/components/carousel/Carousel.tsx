import React, { useState } from "react";

const Carousel = ({
  title,
  features,
}: {
  title: string;
  features: string[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === features.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? features.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full">
      <h3 className="text-lg font-bold text-center mb-4">{title}</h3>
      <div className="text-center text-gray-700 mb-4">
        <p>{features[currentIndex]}</p>
      </div>
      <div className="flex justify-between">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Anterior
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default Carousel;
