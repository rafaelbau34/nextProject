"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Empleo() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
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

      {/* Main Content Area with Equal Top & Bottom Margins */}
      <div className="flex-grow flex flex-col justify-between p-8">
        <div>
          {/* Main Section - Content */}
          <div className="flex flex-col md:flex-row items-center justify-around p-8">
            {/* Left Section - Image */}
            <div className="md:w-1/2 p-4">
              <Image
                src="/pman.jpg"
                alt="Trabaja con Nosotros"
                width={700}
                height={400}
                className="rounded-lg shadow-md object-cover"
              />
            </div>

            {/* Right Section - Job Opportunities */}
            <div className="md:w-1/2 p-4">
              <h2 className="text-3xl font-bold mb-6 text-red-600">
                ¡Estamos Contratando!
              </h2>
              <p className="text-gray-700 mb-4">
                En Pizzasazo! buscamos personas apasionadas y con ganas de
                trabajar en equipo. Ofrecemos un ambiente dinámico,
                oportunidades de crecimiento, y la mejor pizza para disfrutar en
                el descanso.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6">
                <li>Repartidor</li>
                <li>Chef de Pizza</li>
                <li>Atención al Cliente</li>
                <li>Mesero</li>
                <li>Lavaloza</li>
              </ul>
              <Button className="bg-red-500 text-white py-2 px-6 rounded-md mb-4">
                Ver Más Ofertas
              </Button>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white py-8 px-6 shadow-md rounded-lg mx-auto w-full max-w-lg mb-8">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-6">
              Solicita tu Empleo
            </h2>
            <form className="space-y-4">
              <Input
                placeholder="Nombre Completo"
                className="w-full rounded-md px-3 py-2 border border-gray-300"
              />
              <Input
                placeholder="Correo Electrónico"
                type="email"
                className="w-full rounded-md px-3 py-2 border border-gray-300"
              />
              <Input
                placeholder="Número de Teléfono"
                type="tel"
                className="w-full rounded-md px-3 py-2 border border-gray-300"
              />
              <textarea
                placeholder="Cuéntanos por qué quieres trabajar con nosotros"
                className="w-full rounded-md px-3 py-2 border border-gray-300 h-32"
              ></textarea>
              <Button
                type="submit"
                className="bg-red-500 text-white py-2 px-6 rounded-md mx-auto block"
              >
                Enviar Solicitud
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-red-600 text-white py-4 flex justify-center mt-auto">
        <p>© 2024 Pizzasazo! Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
