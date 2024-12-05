"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="bg-red-600 text-white py-4 flex justify-center items-center">
        <h1
          className="text-5xl font-bold"
          style={{ fontFamily: "Gravitas One, sans-serif" }}
        >
          Pizzasazo!
        </h1>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center bg-gray-200 p-4 shadow-md justify-between">
        {/* Menú e Inicio */}
        <div className="flex items-center gap-4">
          <button className="text-2xl">🍕</button>
          <Link href="/inicio" className="text-lg font-bold">
            INICIO
          </Link>
          <Link href="/menu" className="text-lg font-bold">
            MENÚ
          </Link>
          <Link href="/contacto" className="text-lg font-bold">
            CONTACTO
          </Link>
          <Link href="/conocenos" className="text-lg font-bold">
            CONÓCENOS
          </Link>
          <Link href="/pedidos" className="text-lg font-bold">
            PEDIDOS
          </Link>
          <Link href="/empleo" className="text-lg font-bold">
            EMPLEO
          </Link>
        </div>

        {/* Campo de Búsqueda Centrado */}
        <div className="flex items-center w-full justify-end">
          <Input
            placeholder="Buscar..."
            className="w-56 px-3 py-1 rounded-md placeholder:text-gray placeholder:opacity-80 bg-white"
          />
          <button className="ml-2 text-gray-600">🔍</button>
        </div>

        {/* Botones de Acción */}
        <Link href="/carrito">
          <div className="flex items-center gap-4">
            <button className="text-2xl">🛒</button>
          </div>
        </Link>
      </div>

      {/* About Section */}
      <div className="bg-white p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-600">
          Sobre Nosotros
        </h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-8">
          En Pizzasazo! nos especializamos en ofrecer las mejores pizzas
          artesanales. Con más de 20 años de experiencia, nos enorgullece
          utilizar ingredientes frescos y de alta calidad. Nuestro objetivo es
          hacerte disfrutar de una experiencia única con cada bocado.
        </p>

        {/* Historia Section */}
        <div className="max-w-4xl mx-auto mb-8">
          <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">
            Nuestra Historia
          </h3>
          <p className="text-gray-700 text-center">
            Fundada en 2004, Pizzasazo! comenzó como una pequeña pizzería
            familiar. Con el tiempo, nos hemos expandido gracias a nuestra
            dedicación y pasión por crear las mejores pizzas artesanales. Hoy en
            día, seguimos manteniendo nuestras raíces y compromiso con la
            calidad.
          </p>
        </div>

        {/* Valores Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">
            Nuestros Valores
          </h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>
              Compromiso con la calidad y frescura de nuestros ingredientes.
            </li>
            <li>
              Atención al cliente excepcional para brindar la mejor experiencia.
            </li>
            <li>
              Innovación constante en nuestras recetas para sorprender a
              nuestros clientes.
            </li>
            <li>Apoyo a la comunidad local y uso de productos regionales.</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-red-600 text-white py-4 flex justify-center items-center w-full mt-auto">
        <p>© 2024 Pizzasazo! Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
