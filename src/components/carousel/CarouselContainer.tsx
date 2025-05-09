"use client";
import React, { useState } from "react";
import "./Carousel.css";
import data from "./Carousel.json";

const CarouselContainer = () => {
  interface SelectedDesc {
    title: string;
    detalle: string;
    beneficios: string;
    cobertura: string;
  }

  const [selectedDesc, setSelectedDesc] = useState<SelectedDesc | null>(null);
  const rows = [];
  for (let i = 0; i < data.length; i += 3) {
    rows.push(data.slice(i, i + 3));
  }
  return (
    <>
      <div className="hidden lg:block">
        {rows.map((rowItems, rowIndex) => (
          <div key={rowIndex} className="flex justify-center gap-6 mb-6">
            {rowItems.map((item, itemIndex) => (
              <a
                href="#openModal"
                key={itemIndex}
                className="flex-none w-[200px] transition-transform duration-300 transform shadow-lg hover:scale-105 rounded-2xl overflow-hidden"
              >
                <p className="text-center text-gray-800 font-medium mb-2">
                  {item.name}
                </p>
                <video
                  src={item.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full rounded-lg"
                />
              </a>
            ))}
          </div>
        ))}

        <div id="openModal" className="modalDialog">
          <div className="bg-white p-6 rounded-3xl shadow-xl max-w-md mx-auto">
            <a
              href="#close"
              title="Close"
              className="close bg-gray-200 hover:bg-gray-300 text-gray-600"
            >
              ×
            </a>
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Mi modal
            </h2>
            <p className="text-gray-600 mb-4">
              Este es un ejemplo de modal, creado gracias al poder de CSS3.
            </p>
            <p className="text-gray-600">
              Puedes hacer un montón de cosas aquí, como alertas o incluso crear
              un formulario de registro aquí mismo.
            </p>
          </div>
        </div>
      </div>

      <div className="block md:hidden overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <div className="flex gap-4">
          {data.map((item, index) => (
            <a
              href="#openModalMobile"
              key={item.id || index}
              className="flex-none w-[300px] transition-transform duration-300 transform hover:scale-105 rounded-2xl overflow-hidden shadow-md"
              onClick={() => setSelectedDesc(item.descripcion)}
            >
              <p className="font-semibold text-center mb-2 text-gray-800">
                {item.name}
              </p>
              <video
                src={item.url}
                autoPlay
                loop
                muted
                playsInline
                className="rounded-lg"
              />
            </a>
          ))}
        </div>

        {selectedDesc && (
          <div id="openModalMobile" className="modalDialog">
            <div className="bg-white p-6 rounded-3xl shadow-xl max-w-sm mx-auto">
              <a
                href="#close"
                title="Close"
                className="close bg-gray-200 hover:bg-gray-300 text-gray-600"
              >
                ×
              </a>

              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {selectedDesc.title}
              </h2>
              <p className="text-gray-600 mb-2">{selectedDesc.detalle}</p>
              <p className="text-gray-600 mb-2">
                <strong>Beneficios:</strong> {selectedDesc.beneficios}
              </p>
              <p className="text-gray-600">
                <strong>Cobertura:</strong> {selectedDesc.cobertura}
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CarouselContainer;
