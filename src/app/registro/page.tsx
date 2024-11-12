"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Card
        className="p-8 w-full max-w-4xl bg-white rounded-lg shadow-md flex"
        style={{
          borderRadius: "20px",
          borderWidth: "2px",
        }}
      >
        {/* Left Section with Image Placeholder */}
        <div className="w-1/2 flex justify-center items-center bg-gray-100 border-r border-gray-300 p-6">
          <div className="text-center w-full h-full">
            <Image
              src="/pizza.webp"
              alt="Pizza"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Right Section with Registration Options */}
        <div className="w-1/2 p-6 flex flex-col items-center">
          <h2
            className="text-4xl font-bold text-center mb-6"
            style={{ fontFamily: "Gravitas One, sans-serif", color: "#FF0000" }}
          >
            Pizzasazo!
          </h2>
          <h3
            className="text-2xl font-bold text-center mb-6"
            style={{ fontFamily: "Gravitas One, sans-serif", color: "#FF0000" }}
          >
            Regístrate
          </h3>

          {/* Registration Options */}
          <div className="space-y-3 w-full flex flex-col items-center">
            <Button className="w-full bg-gray-300 text-black py-2 rounded-md">
              CORREO ELECTRÓNICO
            </Button>
            <Link href="/signupCell" className="w-full">
              <Button className="w-full bg-green-500 text-white py-2 rounded-md">
                TELÉFONO
              </Button>
            </Link>
            <Button className="w-full bg-white text-gray-600 border border-gray-300 py-2 rounded-md">
              <span className="text-blue-500 mr-1">G</span>
              <span className="text-red-500 mr-1">o</span>
              <span className="text-yellow-500 mr-1">o</span>
              <span className="text-blue-500 mr-1">g</span>
              <span className="text-green-500 mr-1">l</span>
              <span className="text-red-500">e</span>
            </Button>
            <Button className="w-full bg-blue-600 text-white py-2 rounded-md">
              FACEBOOK
            </Button>
            <Button className="w-full bg-black text-white py-2 rounded-md">
              APPLE
            </Button>
          </div>

          {/* Link for Existing Users */}
          <div className="mt-6">
            <Link href="/" className="text-red-500 font-bold">
              YA TENGO UNA CUENTA
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
