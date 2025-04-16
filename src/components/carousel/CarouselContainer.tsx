import React from "react";
import data from "./Carousel.json";

const CarouselContainer = () => {
  const rows = [];
  for (let i = 0; i < data.length; i += 3) {
    rows.push(data.slice(i, i + 3));
  }

  return (
    <>
      <div className="hidden lg:block transform scale-150 origin-center m-50">
        {rows.map((rowItems, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-4 mb-4">
            {rowItems.map((item, index) => (
              <a
                href="#"
                key={index}
                className="flex-none w-[200px] transition ease-in-out duration-200 transform shadow-md hover:scale-105"
              >
                <p>{item.name}</p>
                <video
                  src={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full"
                />
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="block md:hidden overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        <div className="flex gap-4">
          {data.map((item, index) => (
            <a href="#" key={index} className="flex-none w-[300px]">
              <p>{item.name}</p>
              <video src={item.url} autoPlay loop muted playsInline />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselContainer;
