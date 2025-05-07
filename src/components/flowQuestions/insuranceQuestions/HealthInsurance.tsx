"use client";
import React from "react";
import "./insuranceGlobal.css";

const HealthInsurance = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [insuredAge, setInsuredAge] = React.useState("");
  const [insuredGender, setInsuredGender] = React.useState("");
  const [healthStatus, setHealthStatus] = React.useState("");
  const [coverageType, setCoverageType] = React.useState("");
  const [insuredCount, setInsuredCount] = React.useState("");
  const [postalCode, setPostalCode] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [userAge, setUserAge] = React.useState("");
  const [userGender, setUserGender] = React.useState("");
  const [userHealthStatus, setUserHealthStatus] = React.useState("");
  const [userPostalCode, setUserPostalCode] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendToWhatsApp = () => {
    const message = `🏥 *Cotización de Seguro de Gastos Médicos* 🏥

*Información del Seguro:*
• Edad del asegurado: ${insuredAge || "No especificada"}
• Género: ${insuredGender || "No especificado"}
• Estado de salud actual: ${healthStatus || "No especificado"}
• Cobertura deseada: ${coverageType || "No especificada"}
• Número de asegurados: ${insuredCount || "No especificado"}
• Código postal o ubicación: ${postalCode || "No especificado"}

*Datos del Usuario:*
• Nombre completo: ${fullName || "No especificado"}
• Edad: ${userAge || "No especificada"}
• Género: ${userGender || "No especificado"}
• Estado de salud actual: ${userHealthStatus || "No especificado"}
• Código postal o ubicación: ${userPostalCode || "No especificado"}

¡Gracias por confiar en nosotros!`;

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
        Seguro Médico
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
                <h1>Información del Seguro</h1>

                {/* Edad del asegurado */}
                <label className="label-insuranceQuestions">
                  Edad del asegurado:
                  <input
                    type="number"
                    placeholder="Ejemplo: 30"
                    className="input-insuranceQuestions"
                    value={insuredAge}
                    onChange={(e) => setInsuredAge(e.target.value)}
                  />
                </label>

                {/* Género */}
                <label className="label-insuranceQuestions">
                  Género:
                  <select
                    className="select-insuranceQuestions"
                    value={insuredGender}
                    onChange={(e) => setInsuredGender(e.target.value)}
                  >
                    <option value="">Selecciona el género</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                </label>

                {/* Estado de salud actual */}
                <label className="label-insuranceQuestions">
                  Estado de salud actual:
                  <textarea
                    placeholder="Ejemplo: Sin enfermedades preexistentes"
                    className="input-insuranceQuestions"
                    value={healthStatus}
                    onChange={(e) => setHealthStatus(e.target.value)}
                  />
                </label>

                {/* Cobertura deseada */}
                <label className="label-insuranceQuestions">
                  Cobertura deseada:
                  <select
                    className="select-insuranceQuestions"
                    value={coverageType}
                    onChange={(e) => setCoverageType(e.target.value)}
                  >
                    <option value="">Selecciona la cobertura</option>
                    <option value="nacional">Nacional</option>
                    <option value="internacional">Internacional</option>
                  </select>
                </label>

                {/* Número de asegurados */}
                <label className="label-insuranceQuestions">
                  Número de asegurados:
                  <input
                    type="number"
                    placeholder="Ejemplo: 1"
                    className="input-insuranceQuestions"
                    value={insuredCount}
                    onChange={(e) => setInsuredCount(e.target.value)}
                  />
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
                    value={userAge}
                    onChange={(e) => setUserAge(e.target.value)}
                  />
                </label>

                {/* Género */}
                <label className="label-insuranceQuestions">
                  Género:
                  <select
                    className="select-insuranceQuestions"
                    value={userGender}
                    onChange={(e) => setUserGender(e.target.value)}
                  >
                    <option value="">Selecciona el género</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                </label>

                {/* Estado de salud actual */}
                <label className="label-insuranceQuestions">
                  Estado de salud actual:
                  <textarea
                    placeholder="Ejemplo: Sin enfermedades preexistentes"
                    className="input-insuranceQuestions"
                    value={userHealthStatus}
                    onChange={(e) => setUserHealthStatus(e.target.value)}
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

export default HealthInsurance;
