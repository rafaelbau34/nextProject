"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
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
          <Link href="/" className="text-lg font-bold">
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
        </div>

        {/* Campo de Búsqueda Centrado */}
        <div className="flex items-center w-full max-w-md justify-center">
          <Input
            placeholder="Buscar..."
            className="w-56 px-3 py-1 rounded-md placeholder:text-sm placeholder:text-gray-500"
          />
          <button className="ml-2 text-gray-600">🔍</button>
        </div>

        {/* Botones de Acción */}
        <div className="flex items-center gap-4">
          <Button className="bg-gray-300 text-black">Buscar</Button>
          <button className="text-2xl">🛒</button>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-600">
          Contáctanos
        </h2>
        <div className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <Input placeholder="Nombre" className="mb-4" />
          <Input placeholder="Correo Electrónico" className="mb-4" />
          <Input placeholder="Asunto" className="mb-4" />
          <Textarea
            placeholder="Escribe tu mensaje aquí..."
            className="mb-4"
            rows={5}
          />

          <Button className="bg-red-500 text-white w-full">
            Enviar Mensaje
          </Button>
        </div>
      </div>

      {/* Additional Contact Information */}
      <div className="max-w-xl mx-auto mt-8 text-center">
        <h3 className="text-2xl font-bold text-red-600 mb-4">
          Información de Contacto
        </h3>
        <p className="text-lg">📍 Dirección: Av. Principal 123, Ciudad</p>
        <p className="text-lg">📞 Teléfono: +123 456 7890</p>
        <p className="text-lg">📧 Email: contacto@pizzasazo.com</p>
        <p className="text-lg">
          🕒 Horario: Lunes a Domingo, 10:00 AM - 11:00 PM
        </p>
      </div>

      {/* Footer */}
      <div className="bg-red-600 text-white py-4 flex justify-center">
        <p>© 2024 Pizzasazo! Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
