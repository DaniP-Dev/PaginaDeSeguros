import React from "react";
import Carousel from "./Carousel";
import data from "./Carousel.json";

const CarouselContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.map((company) => (
        <Carousel
          key={company.id}
          title={company.name}
          features={company.features}
        />
      ))}
    </div>
  );
};

export default CarouselContainer;
