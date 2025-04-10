import React from "react";

const SocialProof = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 justify-center p-6 bg-gray-100">
        {/* Seguro de Familia */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-2">🛡️ Seguro Familiar</h2>
          <p className="text-gray-700 mb-3 font-medium">Testimonio:</p>
          <blockquote className="italic text-gray-600 border-l-4 border-blue-400 pl-4 mb-4">
            "Gracias a este seguro, pudimos salir adelante cuando mi esposo
            perdió el trabajo. Me siento tranquila sabiendo que mi familia está
            protegida."
            <br />
            <span className="block mt-2 font-semibold">– Mariana G.</span>
          </blockquote>
          <ul className="list-disc pl-5 text-gray-700">
            <li>✅ Más de 15.000 familias protegidas</li>
            <li>🕊️ 99.2% de satisfacción</li>
          </ul>
        </div>

        {/* Seguro de Autos */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-2">🚗 Seguro de Autos</h2>
          <p className="text-gray-700 mb-3 font-medium">Testimonio:</p>
          <blockquote className="italic text-gray-600 border-l-4 border-green-400 pl-4 mb-4">
            "Tuve un accidente menor y en 2 días me ayudaron con todo. Súper
            rápido y sin dolores de cabeza."
            <br />
            <span className="block mt-2 font-semibold">– Carlos M.</span>
          </blockquote>
          <ul className="list-disc pl-5 text-gray-700">
            <li>🔧 +10.000 vehículos asegurados</li>
            <li>⏱️ Atención en menos de 24h</li>
          </ul>
        </div>

        {/* Seguro de Salud */}
        <div className="bg-white shadow-md rounded-2xl p-6 w-full md:w-1/3">
          <h2 className="text-xl font-bold mb-2">🏥 Seguro de Salud</h2>
          <p className="text-gray-700 mb-3 font-medium">Testimonio:</p>
          <blockquote className="italic text-gray-600 border-l-4 border-pink-400 pl-4 mb-4">
            "Mi hija necesitó una cirugía urgente y el seguro cubrió todo. Estoy
            infinitamente agradecida."
            <br />
            <span className="block mt-2 font-semibold">– Rosa D.</span>
          </blockquote>
          <ul className="list-disc pl-5 text-gray-700">
            <li>🏥 +150 clínicas privadas disponibles</li>
            <li>📞 Línea médica 24/7</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SocialProof;
