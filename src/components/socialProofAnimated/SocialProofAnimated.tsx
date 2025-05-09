import React from "react";
import Comentarios from "./Comentarios.json";
import "./Animacion.css";

const SocialProofAnimated = () => {
  return (
    <>
      {/* Visible solo en pantallas lg y superiores */}
      <div className="hidden lg:block p-8 bg-gray-50 rounded-3xl shadow-lg">
        <div className="flex gap-8 animate-marquee">
          {Comentarios.map((comentario) => (
            <div
              key={comentario.id}
              className="bg-white rounded-2xl shadow-md p-8 h-[250px] flex flex-col justify-between text-center"
            >
              <p className="text-xl font-semibold text-gray-900">
                {comentario.name}
              </p>
              <p className="text-base text-gray-700 mt-4">
                {comentario.comment}
              </p>
              <p className="text-sm text-blue-500 mt-2">{comentario.footer}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Visible en pantallas md e inferiores */}
      <div className="block lg:hidden p-4 bg-gray-50 rounded-3xl shadow-md overflow-hidden">
        <div className="flex gap-4 animate-marquee whitespace-nowrap w-max">
          {[...Comentarios, ...Comentarios].map((comentario, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md px-4 py-3 w-[160px] text-center"
            >
              <p className="text-base font-semibold text-gray-900">
                {comentario.name}
              </p>
              <p className="text-sm text-gray-700 mt-2 whitespace-normal">
                {comentario.comment}
              </p>
              <p className="text-xs text-blue-500 mt-2">{comentario.footer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SocialProofAnimated;
