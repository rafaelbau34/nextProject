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
          Cambiar contraseña
        </h2>
        <form>
          <div className="mb-4">
            <Label htmlFor="newPassword" className="text-gray-700">
              Nueva contraseña
            </Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="Nueva contraseña..."
              className="border border-gray-400 w-full rounded-md px-3 py-2 bg-white"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="confirmPassword" className="text-gray-700">
              Confirmar contraseña
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirmar contraseña..."
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
        </form>
      </Card>
    </div>
  );
}
