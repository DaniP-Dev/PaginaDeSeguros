import React from "react";
import FlowQuestions from "@/components/flowQuestions/FlowQuestions";

const CTA = () => {
  return (
    <>
      <section className="bg-blue-600 text-white text-center py-12 px-6 rounded-xl mt-10">
        <h2 className="text-3xl font-bold mb-4">
          ¿Listo para proteger lo que más importa?
        </h2>
        <p className="text-lg mb-6">
          Contrata tu seguro en minutos y únete a miles de personas que ya
          confían en nosotros.
        </p>

        <div className="flex justify-center">
          <FlowQuestions />
        </div>
      </section>
    </>
  );
};

export default CTA;
