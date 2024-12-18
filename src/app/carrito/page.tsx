"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CartPage() {
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

      {/* Cart Section */}
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-600">
          Tu Carrito
        </h2>
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
          {/* Productos del Carrito */}
          <div className="flex justify-between mb-4">
            <p>Pizza Pepperoni</p>
            <p>$149.99</p>
          </div>
          <div className="flex justify-between mb-4">
            <p>Pizza Hawaiana</p>
            <p>$139.99</p>
          </div>

          {/* Total */}
          <hr className="my-4" />
          <div className="flex justify-between font-bold">
            <p>Total</p>
            <p>$289.98</p>
          </div>

          {/* Botón de Pago */}
          <Link href="/confirm">
            <Button className="bg-red-500 text-white w-full mt-6">Pagar</Button>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-red-600 text-white py-4 flex justify-center items-center w-full mt-auto">
        <p>© 2024 Pizzasazo! Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
