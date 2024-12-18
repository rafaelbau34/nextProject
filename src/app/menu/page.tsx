"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export default function MenuPage() {
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

        <Link href="/carrito">
          <div className="flex items-center gap-4">
            <button className="text-2xl">🛒</button>
          </div>
        </Link>
      </div>

      {/* Menú de Pizzas */}
      <div className="p-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-red-600">
          Menú de Pizzas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Pizza Margarita", price: "$129.99", img: "/marga.jpg" },
            { name: "Pepperoni Lovers", price: "$149.99", img: "/npp.jpg" },
            { name: "Hawaiana", price: "$139.99", img: "/hawa.jpg" },
            { name: "Vegetariana", price: "$139.49", img: "/vege.png" },
            { name: "BBQ Chicken", price: "$159.49", img: "/bbq.jpg" },
            { name: "4 Quesos", price: "$159.49", img: "/pizza-4-quesos.jpg" },
          ].map((pizza, index) => (
            <Card
              key={index}
              className="flex flex-col items-stretch p-4 shadow-lg h-full"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 mb-4">
                <Image
                  src={pizza.img}
                  alt={pizza.name}
                  fill
                  className="rounded-lg object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {pizza.name}
                </h3>
                <p className="text-gray-700 mb-4 text-center">{pizza.price}</p>
              </div>

              {/* Button Section */}
              <div className="mt-auto">
                <Button className="bg-red-500 text-white w-full">
                  Añadir al Carrito
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="bg-red-600 text-white py-4 flex justify-center">
        <p>© 2024 Pizzasazo! Todos los derechos reservados.</p>
      </div>
    </div>
  );
}
