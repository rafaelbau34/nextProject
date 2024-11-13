"use client"; // If using state or effects

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link"; // For the "Regresar" link

export default function CambiarContraseña() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Card
        className="p-8 w-full max-w-md bg-amber-50 rounded-[50px] border-4 border-red-500 shadow-md" // Updated to match other components
        style={{
          borderRadius: "40px", // Match the ResetPassword component
          borderWidth: "4px", // Match the ResetPassword component
          borderColor: "#FF0000", // Bright red border
          borderStyle: "solid", // Solid border style
        }}
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          Crear cuenta
        </h2>
        <form>
          <div className="mb-4">
            <Input
              id="newPassword"
              type="password"
              placeholder="Correo electrónico..."
              className="border border-gray-400 w-full rounded-md px-3 py-2 bg-white"
            />
          </div>
          <div className="mb-4">
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Contraseña..."
              className="border border-gray-400 w-full rounded-md px-3 py-2 bg-white"
            />
          </div>
          <div className="flex justify-center">
            <Link href="/" className="w-full">
              <Button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600 w-full">
                HECHO
              </Button>
            </Link>
          </div>
          <div className="flex justify-center mt-4">
            <Link
              href="/registro"
              className="text-gray-500 text-sm hover:underline"
            >
              Regresar
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
