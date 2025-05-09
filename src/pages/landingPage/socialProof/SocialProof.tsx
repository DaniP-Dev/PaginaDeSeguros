import React from "react";
import SocialProofAnimated from "@/components/socialProofAnimated/SocialProofAnimated";

const SocialProof = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-12 px-6 rounded-3xl shadow-lg">
      <h1 className="text-center text-4xl font-semibold text-gray-800 mb-10">
        Confianza basada en experiencias reales
      </h1>
      <SocialProofAnimated />
    </section>
  );
};

export default SocialProof;
