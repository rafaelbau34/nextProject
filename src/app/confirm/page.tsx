"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function OrderConfirmation() {
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

      {/* Confirmation Message */}
      <div className="flex-grow flex justify-center items-center bg-gray-50 px-4">
        <Card className="p-10 max-w-2xl w-full text-center bg-white rounded-lg shadow-lg">
          <h2
            className="text-4xl font-bold mb-6 text-red-600"
            style={{ fontFamily: "Gravitas One, sans-serif" }}
          >
            ¡Pedido Realizado!
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Gracias por tu compra. Tu pedido ha sido procesado exitosamente y
            estará listo muy pronto.
          </p>
          <Button className="bg-red-500 text-white py-3 px-8 rounded-md mb-6">
            <Link href="/pedidos">Rastrear Pedido</Link>
          </Button>
          <Button className="bg-red-500 text-white py-3 px-8 rounded-md mb-6 ml-6">
            <Link href="/inicio">Volver al Inicio</Link>
          </Button>
        </Card>
      </div>

      {/* Footer */}
      <div className="bg-red-600 text-white py-4 flex justify-center items-center w-full">
        <p>© 2024 Pizzasazo! Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
