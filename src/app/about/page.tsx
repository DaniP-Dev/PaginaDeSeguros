import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Conoce más acerca de nosotros en esta página.",
};

const page = () => {
  return (
    <div>
      <h1>HOLA about</h1>
    </div>
  );
};

export default page;
