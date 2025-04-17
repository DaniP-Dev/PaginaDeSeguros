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
          <div key={rowIndex} className="flex justify-center gap-4 mb-4">
            {rowItems.map((item, itemIndex) => (
              <a
                href="#openModal"
                key={itemIndex}
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

        <div id="openModal" className="modalDialog">
          <div>
            <a href="#close" title="Close" className="close">
              X
            </a>
            <h2>Mi modal</h2>
            <p>Este es un ejemplo de modal, creado gracias al poder de CSS3.</p>
            <p>
              Puedes hacer un montón de cosas aquí, como alertas o incluso crear
              un formulario de registro aquí mismo.
            </p>
          </div>
        </div>
      </div>

      <div className="block md:hidden overflow-x-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300">
        <div className="flex gap-4">
          {data.map((item, index) => (
            <a
              href="#openModalMobile"
              key={item.id || index}
              className="flex-none w-[300px]"
              onClick={() => setSelectedDesc(item.descripcion)}
            >
              <p className="font-semibold mb-2">{item.name}</p>
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
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm mx-auto">
              <a
                href="#close"
                title="Close"
                className="close text-gray-600 hover:text-gray-900"
              >
                ×
              </a>

              <h2 className="text-xl font-bold mb-2">{selectedDesc.title}</h2>
              <p className="mb-2">{selectedDesc.detalle}</p>
              <p className="mb-2">
                <strong>Beneficios:</strong> {selectedDesc.beneficios}
              </p>
              <p>
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
