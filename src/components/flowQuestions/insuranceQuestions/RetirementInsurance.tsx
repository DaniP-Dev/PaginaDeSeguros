"use client";
import React from "react";
import "./insuranceGlobal.css";

const RetirementInsurance = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [insuredAge, setInsuredAge] = React.useState("");
  const [monthlyIncome, setMonthlyIncome] = React.useState("");
  const [savingsGoal, setSavingsGoal] = React.useState("");
  const [retirementYears, setRetirementYears] = React.useState("");
  const [beneficiaries, setBeneficiaries] = React.useState("");
  const [healthStatus, setHealthStatus] = React.useState("");
  const [fullName, setFullName] = React.useState("");
  const [userAge, setUserAge] = React.useState("");
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
    const message = `🛡️*Cotización de Seguro de Retiro.*🛡️
    *Información del Seguro:*
    • *Edad del asegurado:* ${insuredAge || "Vacio"}
    • *Ingresos mes/año:* ${monthlyIncome || "Vacio"}
    • *Monto ahorro deseado:* ${savingsGoal || "Vacio"}
    • *Plazo para retiro:* ${retirementYears || "Vacio"} años
    • *Beneficiarios:* ${beneficiaries || "Vacio"}
    • *Estado salud actual:* ${healthStatus || "Vacio"}
    *Datos del Usuario:*
    • *Nombre completo:* ${fullName || "Vacio"}
    • *Edad:* ${userAge || "Vacio"}
    • *Ingresos mes/año:* ${userIncome || "Vacio"}
    • *Beneficiarios:* ${userBeneficiaries || "Vacio"}
    ✨Quedo atento a su respuesta. ¡Gracias!✨`;

    const whatsappNumber = "573016328564"; // Incluye el código de país sin signos '+' ni espacios
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <button
        onClick={openModal}
        className="openFlujo-insuranceQuestions"
      >
        Seguro Retiro
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
                    placeholder="Ejemplo: 40"
                    className="input-insuranceQuestions"
                    value={insuredAge}
                    onChange={(e) => setInsuredAge(e.target.value)}
                  />
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

                {/* Plazo para el retiro */}
                <label className="label-insuranceQuestions">
                  Plazo para el retiro (años hasta la jubilación):
                  <input
                    type="number"
                    placeholder="Ejemplo: 20"
                    className="input-insuranceQuestions"
                    value={retirementYears}
                    onChange={(e) => setRetirementYears(e.target.value)}
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

export default RetirementInsurance;
