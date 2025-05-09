"use client";
import React from "react";
import "./insuranceGlobal.css";

const MotorcycleInsurance = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [brand, setBrand] = React.useState("");
  const [model, setModel] = React.useState("");
  const [year, setYear] = React.useState("");
  const [engineCapacity, setEngineCapacity] = React.useState("");
  const [usage, setUsage] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [coverage, setCoverage] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [age, setAge] = React.useState("");
  const [userPostalCode, setUserPostalCode] = React.useState("");
  const [licenseNumber, setLicenseNumber] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendToWhatsApp = () => {
    const message = `🏍️*Cotización de Seguro de Moto.*🏍️
    *Información de la Moto:*
    • *Marca:* ${brand || "Vacio"}
    • *Modelo:* ${model || "Vacio"}
    • *Año:* ${year || "Vacio"}
    • *Cilindraje:* ${engineCapacity || "Vacio"}
    • *Uso:* ${usage || "Vacio"}
    • *Código postal o ubicación:* ${postalCode || "Vacio"}
    • *Tipo cobertura deseada:* ${coverage || "Vacio"}
    *Datos del Usuario:*
    • *Nombre completo:* ${fullName || "Vacio"}
    • *Edad: ${age || "Vacio"}
    • *Código postal o ubicación:* ${userPostalCode || "Vacio"}
    • *Número licencia:* ${licenseNumber || "Vacio"}
    ✨Quedo atento a su respuesta. ¡Gracias!✨`;

    const whatsappNumber = "573016328564"; // Incluye el código de país sin signos '+' ni espacios
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <button onClick={openModal} className="openFlujo-insuranceQuestions">
        Seguro Moto
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"></div>
          <div className="p-6 rounded shadow-lg relative modal-insuranceQuestions bg-white z-50">
            <button onClick={closeModal} className="close-insuranceQuestions">
              X
            </button>
            {/* Contenido del modal */}
            <div className="pagModals-insuranceQuestions">
              {/* Página 1: info de la moto */}
              <div
                className={`pagModal1-insuranceQuestions ${
                  currentPage === 1 ? "block" : "hidden"
                } md:block`}
              >
                <h1>Información de la Moto</h1>

                {/* Marca de la moto */}
                <label className="label-insuranceQuestions">
                  Marca de la moto:
                  <input
                    type="text"
                    placeholder="Ejemplo: Yamaha"
                    className="input-insuranceQuestions"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  />
                </label>

                {/* Modelo de la moto */}
                <label className="label-insuranceQuestions">
                  Modelo de la moto:
                  <input
                    type="text"
                    placeholder="Ejemplo: MT-07"
                    className="input-insuranceQuestions"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </label>

                {/* Año de la moto */}
                <label className="label-insuranceQuestions">
                  Año de la moto:
                  <input
                    type="number"
                    placeholder="Ejemplo: 2022"
                    className="input-insuranceQuestions"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </label>

                {/* Cilindraje */}
                <label className="label-insuranceQuestions">
                  Cilindraje:
                  <input
                    type="text"
                    placeholder="Ejemplo: 689cc"
                    className="input-insuranceQuestions"
                    value={engineCapacity}
                    onChange={(e) => setEngineCapacity(e.target.value)}
                  />
                </label>

                {/* Uso de la moto */}
                <label className="label-insuranceQuestions">
                  Uso de la moto:
                  <select
                    className="select-insuranceQuestions"
                    value={usage}
                    onChange={(e) => setUsage(e.target.value)}
                  >
                    <option value="">Selecciona el uso</option>
                    <option value="personal">Personal</option>
                    <option value="comercial">Comercial</option>
                  </select>
                </label>

                {/* Código postal */}
                <label className="label-insuranceQuestions">
                  Código postal o ubicación:
                  <input
                    type="text"
                    placeholder="Ejemplo: 12345"
                    className="input-insuranceQuestions"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </label>

                {/* Tipo de cobertura */}
                <label className="label-insuranceQuestions">
                  Tipo de cobertura deseada:
                  <select
                    className="select-insuranceQuestions"
                    value={coverage}
                    onChange={(e) => setCoverage(e.target.value)}
                  >
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

              {/* Página 2: datos del usuario */}
              <div
                className={`pagModal2-insuranceQuestions ${
                  currentPage === 2 ? "block" : "hidden"
                } md:block`}
              >
                <h1>Datos del Usuario</h1>

                {/* Nombre completo */}
                <label className="label-insuranceQuestions">
                  Nombre completo:
                  <input
                    type="text"
                    placeholder="Ejemplo: Juan Pérez"
                    className="input-insuranceQuestions"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </label>

                {/* Edad */}
                <label className="label-insuranceQuestions">
                  Edad:
                  <input
                    type="number"
                    placeholder="Ejemplo: 30"
                    className="input-insuranceQuestions"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </label>

                {/* Código postal */}
                <label className="label-insuranceQuestions">
                  Código postal o ubicación:
                  <input
                    type="text"
                    placeholder="Ejemplo: 12345"
                    className="input-insuranceQuestions"
                    value={userPostalCode}
                    onChange={(e) => setUserPostalCode(e.target.value)}
                  />
                </label>

                {/* Número de licencia */}
                <label className="label-insuranceQuestions">
                  Número de licencia de conducir (opcional):
                  <input
                    type="text"
                    placeholder="Ejemplo: ABC123456"
                    className="input-insuranceQuestions"
                    value={licenseNumber}
                    onChange={(e) => setLicenseNumber(e.target.value)}
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
                    className="button-insuranceQuestionsW"
                  >
                    Conoce tu Cotización
                  </button>
                </div>
              </div>
            </div>
            <button
              onClick={sendToWhatsApp}
              className="hidden sm:block button-insuranceQuestions"
            >
              Conoce tu Cotización
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MotorcycleInsurance;
