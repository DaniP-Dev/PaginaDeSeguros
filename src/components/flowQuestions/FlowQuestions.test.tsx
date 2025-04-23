import { render, screen, fireEvent } from "@testing-library/react";
import FlowQuestions from "./FlowQuestions";
import "@testing-library/jest-dom";

test("flujo con selección y resumen", () => {
  render(<FlowQuestions />);
  fireEvent.click(screen.getByText("Cotizar"));

  // Paso 1
  expect(screen.getByText("¿Qué tipo de seguro deseas?")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Auto"));
  fireEvent.click(screen.getByText("Siguiente"));

  // Paso 2
  expect(screen.getByText("Datos básicos")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Marca/Modelo/Año/Valor (vehículo)"));
  fireEvent.click(screen.getByText("Siguiente"));

  // Paso 3
  expect(screen.getByText("Riesgos y uso")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Kilometraje (kms/mes)"));
  fireEvent.click(screen.getByText("Siguiente"));

  // Paso 4
  expect(screen.getByText("Coberturas")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Cobertura amplia (daños propios + robo)"));
  fireEvent.click(screen.getByText("Siguiente"));

  // Resumen
  expect(screen.getByText("Resumen de tus respuestas")).toBeInTheDocument();
  expect(
    screen.getByText(/¿Qué tipo de seguro deseas\?: Auto/)
  ).toBeInTheDocument();
  expect(screen.getByText(/Datos básicos: Marca\/Modelo/)).toBeInTheDocument();
  fireEvent.click(screen.getByText("Finalizar"));
  expect(
    screen.queryByText("Resumen de tus respuestas")
  ).not.toBeInTheDocument();
});
