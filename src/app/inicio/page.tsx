"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
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

      {/* Featured Pizza Section */}
      <div className="flex flex-col md:flex-row items-center p-8">
        <div className="md:w-1/2 p-4">
          <h2 className="text-4xl font-bold mb-4 text-red-600">
            ¡La Pizza del Mes!
          </h2>
          <p className="text-gray-700 mb-4">
            Prueba nuestra nueva **Pizza Cuatro Quesos**, hecha con una mezcla
            de mozzarella, parmesano, gorgonzola, y ricotta. ¡Es una explosión
            de sabor que no te querrás perder!
          </p>
          <Button className="bg-red-500 text-white py-2 px-6 rounded-md">
            Ordenar Ahora
          </Button>
        </div>
        <div className="md:w-1/2 p-4">
          <Image
            src="/pizza-4-quesos.jpg"
            alt="Pizza Cuatro Quesos"
            width={600}
            height={400}
            className="rounded-lg shadow-md object-cover"
          />
        </div>
      </div>

      {/* Specials Section */}
      <div className="bg-white py-12">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
          Ofertas Especiales
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Pizza Margarita",
              price: "$12.99",
              img: "/marga.jpg",
            },
            {
              title: "Pepperoni Lovers",
              price: "$14.99",
              img: "/pepe.jpg",
            },
            { title: "Hawaiana", price: "$13.99", img: "/hawa.jpg" },
          ].map((pizza, index) => (
            <Card key={index} className="w-80 p-4 shadow-lg">
              <Image
                src={pizza.img}
                alt={pizza.title}
                width={320}
                height={200}
                className="rounded-lg object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{pizza.title}</h3>
              <p className="text-gray-700 mb-2">{pizza.price}</p>
              <Button className="bg-red-500 text-white w-full py-2 rounded-md">
                Añadir al Carrito
              </Button>
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
