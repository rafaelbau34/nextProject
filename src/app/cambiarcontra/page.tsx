"use client"; // If using state or effects

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ChangePassword() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Card
        className="p-8 w-full max-w-md bg-amber-50 rounded-xl border-4 border-orange-500 shadow-md" // Customize the background and border
        style={{
          borderRadius: "30px", // Custom border radius
          borderWidth: "2px", // Thinner border
        }}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Cambiar contraseña
        </h2>
        <form>
          <div className="mb-4">
            <Label htmlFor="new-password" className="text-gray-700">
              Nueva contraseña
            </Label>
            <Input
              id="new-password"
              type="password"
              placeholder="Nueva contraseña..."
              className="border border-gray-400 w-full rounded-md px-3 py-2 bg-white"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="confirm-password" className="text-gray-700">
              Confirmar contraseña
            </Label>
            <Input
              id="confirm-password"
              type="password"
              placeholder="Confirmar contraseña..."
              className="border border-gray-400 w-full rounded-md px-3 py-2 bg-white"
            />
          </div>
          <div className="flex justify-center">
            <Button className="bg-green-500 text-white px-4 py-2 rounded-md text-sm hover:bg-green-600">
              HECHO
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
