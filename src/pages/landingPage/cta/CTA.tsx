import React from "react";
import FlowQuestions from "@/components/flowQuestions/FlowQuestions";

const CTA = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-center py-12 px-6 rounded-3xl mt-10 shadow-lg">
        <div className="text-white">
          <h2 className="text-4xl font-semibold mb-4">
            ¿Listo para proteger lo que más importa?
          </h2>
          <p className="text-lg mb-6 font-light">
            Contrata tu seguro en minutos y únete a miles de personas que ya
            confían en nosotros.
          </p>
        </div>

        <div className="flex justify-center">
          <FlowQuestions />
        </div>
      </section>
    </>
  );
};

export default CTA;
