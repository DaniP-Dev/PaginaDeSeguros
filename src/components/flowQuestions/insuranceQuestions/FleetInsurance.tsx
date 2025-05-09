"use client";
import React from "react";
import "./insuranceGlobal.css";

const FleetInsurance = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [vehicleCount, setVehicleCount] = React.useState("");
  const [vehicleDetails, setVehicleDetails] = React.useState("");
  const [vehicleUsage, setVehicleUsage] = React.useState("");
  const [annualMileage, setAnnualMileage] = React.useState("");
  const [fleetLocation, setFleetLocation] = React.useState("");
  const [coverageType, setCoverageType] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [rfc, setRfc] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [contactInfo, setContactInfo] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendToWhatsApp = () => {
    const message = `🚛*Cotización de Seguro de Flotilla.*🚛
    *Información de la Flotilla:*
    • *Número de vehículos:* ${vehicleCount || "Vacio"}
    • *Detalles de los vehículos:* ${vehicleDetails || "Vacio"}
    • *Uso de los vehículos:* ${vehicleUsage || "Vacio"}
    • *Kilometraje anual:* ${annualMileage || "Vacio"} km
    • *Ubicación de la flotilla:* ${fleetLocation || "Vacio"}
    • *Tipo de cobertura:* ${coverageType || "Vacio"}
    *Datos del Usuario:*
    • *Nombre de la empresa o responsable:* ${companyName || "Vacio"}
    • *RFC:* ${rfc || "Vacio"}
    • *Dirección:* ${address || "Vacio"}
    • *Contacto:* ${contactInfo || "Vacio"}
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
        Seguro Flotilla
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="p-6 rounded shadow-lg relative modal-insuranceQuestions">
            <button onClick={closeModal} className="close-insuranceQuestions">
              X
            </button>
            {/* Contenido del modal */}
            <div className="pagModals-insuranceQuestions">
              {/* Página 1: info de la flotilla */}
              <div
                className={`pagModal1-insuranceQuestions ${
                  currentPage === 1 ? "block" : "hidden"
                } md:block`}
              >
                <h1>Información de la Flotilla</h1>

                {/* Número de vehículos */}
                <label className="label-insuranceQuestions">
                  Número de vehículos en la flotilla:
                  <input
                    type="number"
                    placeholder="Ejemplo: 10"
                    className="input-insuranceQuestions"
                    value={vehicleCount}
                    onChange={(e) => setVehicleCount(e.target.value)}
                  />
                </label>

                {/* Detalles de los vehículos */}
                <label className="label-insuranceQuestions">
                  Marca, modelo y año de cada vehículo:
                  <textarea
                    placeholder="Ejemplo: Toyota Corolla 2020, Ford F-150 2019"
                    className="input-insuranceQuestions"
                    value={vehicleDetails}
                    onChange={(e) => setVehicleDetails(e.target.value)}
                  />
                </label>

                {/* Uso de los vehículos */}
                <label className="label-insuranceQuestions">
                  Uso de los vehículos:
                  <select
                    className="select-insuranceQuestions"
                    value={vehicleUsage}
                    onChange={(e) => setVehicleUsage(e.target.value)}
                  >
                    <option value="">Selecciona el uso</option>
                    <option value="personal">Personal</option>
                    <option value="comercial">Comercial</option>
                    <option value="transporte_carga">
                      Transporte de carga
                    </option>
                  </select>
                </label>

                {/* Kilometraje promedio anual */}
                <label className="label-insuranceQuestions">
                  Kilometraje promedio anual por vehículo:
                  <input
                    type="number"
                    placeholder="Ejemplo: 20000"
                    className="input-insuranceQuestions"
                    value={annualMileage}
                    onChange={(e) => setAnnualMileage(e.target.value)}
                  />
                </label>

                {/* Ubicación de la flotilla */}
                <label className="label-insuranceQuestions">
                  Ubicación de la flotilla:
                  <input
                    type="text"
                    placeholder="Ejemplo: Ciudad de México"
                    className="input-insuranceQuestions"
                    value={fleetLocation}
                    onChange={(e) => setFleetLocation(e.target.value)}
                  />
                </label>

                {/* Tipo de cobertura */}
                <label className="label-insuranceQuestions">
                  Tipo de cobertura deseada:
                  <select
                    className="select-insuranceQuestions"
                    value={coverageType}
                    onChange={(e) => setCoverageType(e.target.value)}
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

                {/* Nombre de la empresa o responsable */}
                <label className="label-insuranceQuestions">
                  Nombre de la empresa o responsable:
                  <input
                    type="text"
                    placeholder="Ejemplo: Transportes XYZ"
                    className="input-insuranceQuestions"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </label>

                {/* RFC */}
                <label className="label-insuranceQuestions">
                  RFC (en caso de ser empresa):
                  <input
                    type="text"
                    placeholder="Ejemplo: ABC123456789"
                    className="input-insuranceQuestions"
                    value={rfc}
                    onChange={(e) => setRfc(e.target.value)}
                  />
                </label>

                {/* Dirección */}
                <label className="label-insuranceQuestions">
                  Dirección o ubicación:
                  <input
                    type="text"
                    placeholder="Ejemplo: Av. Reforma 123, CDMX"
                    className="input-insuranceQuestions"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>

                {/* Contacto */}
                <label className="label-insuranceQuestions">
                  Contacto (teléfono y correo electrónico):
                  <textarea
                    placeholder="Ejemplo: 555-123-4567, contacto@empresa.com"
                    className="input-insuranceQuestions"
                    value={contactInfo}
                    onChange={(e) => setContactInfo(e.target.value)}
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

export default FleetInsurance;
