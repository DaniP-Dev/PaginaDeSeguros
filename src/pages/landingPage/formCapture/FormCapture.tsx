import React from "react";

const FormCapture = () => {
  return (
    <>
      <section className="bg-white text-gray-800 py-12 px-6 mt-10 rounded-xl shadow-md max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">
            ¿Prefieres hablar con una persona real?
          </h2>
          <p className="text-lg text-gray-600">
            Nuestros asesores están listos para ayudarte a encontrar el seguro
            ideal para ti. Sin presiones, sin compromisos.
          </p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Nombre completo"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Número de teléfono"
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
          />
          <textarea
            placeholder="¿En qué podemos ayudarte?"
            className="border border-gray-300 rounded-lg px-4 py-3 h-32 focus:outline-none focus:ring-2 focus:ring-blue-500 md:col-span-2"
          ></textarea>

          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Hablar con un asesor
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FormCapture;
