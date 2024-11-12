"use client"; // If using state or effects

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link"; // Import Link for navigation

export default function ResetPassword() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Card
        className="p-8 w-full max-w-md bg-amber-50 rounded-[50px] border-4 border-red-500 shadow-md" // Updated to match Login component
        style={{
          borderRadius: "40px", // Match the Login component
          borderWidth: "4px", // Match the Login component
          borderColor: "#FF0000", // Bright red border
          borderStyle: "solid", // Solid border style
        }}
      >
        <h2 className="text-2xl font-bold text-center mb-2 text-gray-800">
          TELÉFONO
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Ingrese su número telefónico
        </p>

        <form>
          <div className="mb-4">
            <Input
              placeholder="Ingrese su número telefónico..."
              className="border border-gray-400 w-full rounded-md px-3 py-2 bg-white"
            />
          </div>

          <div className="flex justify-center">
            {/* Wrap Button in Link to navigate to cambiarcontra */}
            <Link href="/cell2">
              <Button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
                ENVIAR
              </Button>
            </Link>
          </div>

          <div className="flex justify-center mt-4">
            <Link href="/" className="text-gray-500 text-sm hover:underline">
              Regresar
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
