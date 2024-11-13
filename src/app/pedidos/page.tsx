"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function OrderTrackingPage() {
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
          <Link href="/carrito">
            <button className="text-2xl">🛒</button>
          </Link>
        </div>
      </div>

      {/* Order Tracking Section */}
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-600">
          Seguimiento de Pedido
        </h2>
        <div className="max-w-lg mx-auto">
          <p className="text-lg mb-4 text-center">Pedido #12345</p>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <p className="font-bold">Estado: En preparación</p>
            <p className="text-gray-700">Tiempo estimado: 20-30 minutos</p>
          </div>

          {/* Progreso del Pedido */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-4">
            <h3 className="font-bold mb-2">Progreso del Pedido</h3>
            <ul className="list-disc list-inside text-gray-700">
              <li>🕐 Pedido realizado</li>
              <li>👨‍🍳 En preparación</li>
              <li>🚗 En camino</li>
              <li>🏠 Entregado</li>
            </ul>
          </div>

          {/* Botón para Actualizar */}
          <Button className="bg-red-500 text-white w-full py-2 rounded-md">
            Actualizar Estado
          </Button>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-red-600 text-white py-4 flex justify-center items-center w-full mt-auto">
        <p>© 2024 Pizzasazo! Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
