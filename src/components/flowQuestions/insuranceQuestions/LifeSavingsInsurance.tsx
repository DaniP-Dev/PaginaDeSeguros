"use client";
import React from "react";
import "./insuranceGlobal.css";

const LifeSavingsInsurance = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [insuredAge, setInsuredAge] = React.useState("");
  const [insuredGender, setInsuredGender] = React.useState("");
  const [monthlyIncome, setMonthlyIncome] = React.useState("");
  const [savingsGoal, setSavingsGoal] = React.useState("");
  const [insuranceTerm, setInsuranceTerm] = React.useState("");
  const [beneficiaries, setBeneficiaries] = React.useState("");
  const [healthStatus, setHealthStatus] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [userAge, setUserAge] = React.useState("");
  const [userGender, setUserGender] = React.useState("");
  const [userIncome, setUserIncome] = React.useState("");
  const [userBeneficiaries, setUserBeneficiaries] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendToWhatsApp = () => {
    const message = `💰 *Cotización de Seguro de Vida+Ahorro. Aquí está mi información:* 💰
    *Información del Seguro:*
    • *Edad del asegurado:* ${insuredAge || "No especificada"}
    • *Género:* ${insuredGender || "No especificado"}
    • *Ingresos mes/año:* ${monthlyIncome || "No especificados"}
    • *Monto ahorro deseado* ${savingsGoal || "No especificado"}
    • *Plazo del seguro:* ${insuranceTerm || "No especificado"} años
    • *Beneficiarios:* ${beneficiaries || "No especificados"}
    • *Estado salud actual:* ${healthStatus || "No especificado"}
    *Datos del Usuario:*
    • *Nombre completo:* ${fullName || "No especificado"}
    • *Edad:* ${userAge || "No especificada"}
    • *Género:* ${userGender || "No especificado"}
    • *Ingresos men/año* ${userIncome || "No especificados"}
    • *Beneficiarios:* ${userBeneficiaries || "No especificados"}
    ✨ Quedo atento a su respuesta. ¡Gracias! ✨`;

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
        Seguro Vida+Ahorro
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

                {/* Ingresos mensuales o anuales */}
                <label className="label-insuranceQuestions">
                  Ingresos mensuales o anuales:
                  <input
                    type="number"
                    placeholder="Ejemplo: 50000"
                    className="input-insuranceQuestions"
                    value={monthlyIncome}
                    onChange={(e) => setMonthlyIncome(e.target.value)}
                  />
                </label>

                {/* Monto de ahorro deseado */}
                <label className="label-insuranceQuestions">
                  Monto de ahorro deseado:
                  <input
                    type="number"
                    placeholder="Ejemplo: 1000000"
                    className="input-insuranceQuestions"
                    value={savingsGoal}
                    onChange={(e) => setSavingsGoal(e.target.value)}
                  />
                </label>

                {/* Plazo del seguro */}
                <label className="label-insuranceQuestions">
                  Plazo del seguro (años):
                  <input
                    type="number"
                    placeholder="Ejemplo: 20"
                    className="input-insuranceQuestions"
                    value={insuranceTerm}
                    onChange={(e) => setInsuranceTerm(e.target.value)}
                  />
                </label>

                {/* Beneficiarios */}
                <label className="label-insuranceQuestions">
                  Beneficiarios:
                  <input
                    type="text"
                    placeholder="Ejemplo: Juan, María"
                    className="input-insuranceQuestions"
                    value={beneficiaries}
                    onChange={(e) => setBeneficiaries(e.target.value)}
                  />
                </label>

                {/* Estado de salud actual */}
                <label className="label-insuranceQuestions">
                  Estado de salud actual:
                  <textarea
                    placeholder="Ejemplo: Buena salud, sin enfermedades crónicas"
                    className="input-insuranceQuestions"
                    value={healthStatus}
                    onChange={(e) => setHealthStatus(e.target.value)}
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

                {/* Ingresos mensuales o anuales */}
                <label className="label-insuranceQuestions">
                  Ingresos mensuales o anuales:
                  <input
                    type="number"
                    placeholder="Ejemplo: 50000"
                    className="input-insuranceQuestions"
                    value={userIncome}
                    onChange={(e) => setUserIncome(e.target.value)}
                  />
                </label>

                {/* Beneficiarios */}
                <label className="label-insuranceQuestions">
                  Beneficiarios:
                  <input
                    type="text"
                    placeholder="Ejemplo: Juan, María"
                    className="input-insuranceQuestions"
                    value={userBeneficiaries}
                    onChange={(e) => setUserBeneficiaries(e.target.value)}
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

export default LifeSavingsInsurance;
