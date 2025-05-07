"use client";
import React from "react";
import "./insuranceGlobal.css";

const CarInsurance = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [year, setYear] = React.useState("");
  const [usage, setUsage] = React.useState("");
  const [mileage, setMileage] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendToWhatsApp = () => {
    const message = `Cotización de Seguro de Auto:
    \t•Marca: ${brand}
    \t•Modelo: ${model}
    \t•Año: ${year}
    \t•Uso: ${usage}
    \t•Kilometraje: ${mileage}`;
    const whatsappNumber = "3016328564"; // Reemplaza con el número de WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <button
        onClick={openModal}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Auto
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="p-6 rounded shadow-lg relative modal-insuranceQuestions">
            <button onClick={closeModal} className="close-insuranceQuestions">
              X
            </button>
            {/* Contenido del modal */}

            <div className="pagModals-insuranceQuestions">
              {/* Página 1: info del seguro */}
              <div
                className={`pagModal1-insuranceQuestions ${
                  currentPage === 1 ? "block" : "hidden"
                } md:block`}
              >
                <h1>info del seguro</h1>

                {/* Marca del vehículo */}
                <label className="label-insuranceQuestions">
                  Marca del vehículo:
                  <select className="select-insuranceQuestions">
                    <option value="">Selecciona una marca</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Ford">Ford</option>
                    <option value="Chevrolet">Chevrolet</option>
                    {/* Agrega más opciones según sea necesario */}
                  </select>
                </label>

                {/* Modelo del vehículo */}
                <label className="label-insuranceQuestions">
                  Modelo del vehículo:
                  <select className="select-insuranceQuestions">
                    <option value="">Selecciona un modelo</option>
                    <option value="Corolla">Corolla</option>
                    <option value="Civic">Civic</option>
                    <option value="F-150">F-150</option>
                    <option value="Silverado">Silverado</option>
                    {/* Agrega más opciones según sea necesario */}
                  </select>
                </label>

                {/* Año del vehículo */}
                <label className="label-insuranceQuestions">
                  Año del vehículo:
                  <input
                    type="number"
                    placeholder="Ejemplo: 2020"
                    className="input-insuranceQuestions"
                  />
                </label>

                {/* Uso del vehículo */}
                <label className="label-insuranceQuestions">
                  Uso del vehículo:
                  <select className="select-insuranceQuestions">
                    <option value="">Selecciona el uso</option>
                    <option value="personal">Personal</option>
                    <option value="comercial">Comercial</option>
                  </select>
                </label>

                {/* Kilometraje anual estimado */}
                <label className="label-insuranceQuestions">
                  Kilometraje anual estimado:
                  <input
                    type="number"
                    placeholder="Ejemplo: 15000"
                    className="input-insuranceQuestions"
                  />
                </label>

                {/* Código postal o ubicación */}
                <label className="label-insuranceQuestions">
                  Código postal o ubicación:
                  <input
                    type="number"
                    placeholder="Ejemplo: 12345"
                    className="input-insuranceQuestions"
                  />
                </label>

                {/* Tipo de cobertura deseada */}
                <label className="label-insuranceQuestions">
                  Tipo de cobertura deseada:
                  <select className="select-insuranceQuestions">
                    <option value="">Selecciona la cobertura</option>
                    <option value="basica">Básica</option>
                    <option value="amplia">Amplia</option>
                    <option value="limitada">Limitada</option>
                  </select>
                </label>

                {/* Botón para avanzar en móviles */}
                <button
                  className="button-insuranceQuestions md:hidden"
                  onClick={() => setCurrentPage(2)}
                >
                  Siguiente
                </button>
              </div>

              {/* Página 2: info personal */}
              <div
                className={`pagModal2-insuranceQuestions ${
                  currentPage === 2 ? "block" : "hidden"
                } md:block`}
              >
                <h1>info personal</h1>

                {/* Nombre completo */}
                <label className="label-insuranceQuestions">
                  Nombre completo:
                  <input
                    type="text"
                    placeholder="Ejemplo: Juan Pérez"
                    className="input-insuranceQuestions"
                  />
                </label>

                {/* Edad */}
                <label className="label-insuranceQuestions">
                  Edad:
                  <input
                    type="number"
                    placeholder="Ejemplo: 30"
                    className="input-insuranceQuestions"
                  />
                </label>

                {/* Género */}
                <label className="label-insuranceQuestions">
                  Género:
                  <select className="select-insuranceQuestions">
                    <option value="">Selecciona el género</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                </label>

                {/* Estado civil */}
                <label className="label-insuranceQuestions">
                  Estado civil:
                  <select className="select-insuranceQuestions">
                    <option value="">Selecciona el estado civil</option>
                    <option value="soltero">Soltero</option>
                    <option value="casado">Casado</option>
                    <option value="divorciado">Divorciado</option>
                    <option value="viudo">Viudo</option>
                  </select>
                </label>

                {/* Código postal o ubicación */}
                <label className="label-insuranceQuestions">
                  Código postal o ubicación:
                  <input
                    type="number"
                    placeholder="Ejemplo: 12345"
                    className="input-insuranceQuestions"
                  />
                </label>

                {/* Historial de manejo (opcional) */}
                <label className="label-insuranceQuestions">
                  Historial de manejo:
                  <textarea
                    placeholder="Ejemplo: Sin accidentes en los últimos 5 años"
                    className="input-insuranceQuestions"
                  />
                </label>

                {/* Número de licencia de conducir (opcional) */}
                <label className="label-insuranceQuestions">
                  Número de licencia de conducir:
                  <input
                    type="text"
                    placeholder="Ejemplo: ABC123456"
                    className="input-insuranceQuestions"
                  />
                </label>

                {/* Botones para navegar en móviles */}
                <div className="flex justify-between md:hidden">
                  <button
                    className="button-insuranceQuestions"
                    onClick={() => setCurrentPage(1)}
                  >
                    Anterior
                  </button>
                  <button
                    onClick={sendToWhatsApp}
                    className="button-insuranceQuestions"
                  >
                    Conoce tu Cotizacion
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={sendToWhatsApp}
              className="hidden sm:block button-insuranceQuestions"
            >
              Conoce tu Cotizacion
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CarInsurance;
