"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox"; // Import Checkbox
import { useState } from "react";
import Link from "next/link";
import "./globals.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [keepSignedIn, setKeepSignedIn] = useState(false); // State for checkbox

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Por favor, rellena ambos campos.");
      return;
    }
    setError("");
    console.log("Login:", { email, password, keepSignedIn });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <Card
        className="p-8 w-full max-w-md bg-amber-50 rounded-[50px] border-4 border-red-500 shadow-md"
        style={{
          borderRadius: "80px",
          borderWidth: "5px",
        }}
      >
        <h2
          className="text-4xl font-bold text-center mb-6"
          style={{ fontFamily: "Gravitas One, sans-serif", color: "#FF0000" }}
        >
          Pizzasazo!
        </h2>
        {error && <p className="text-red-600 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label htmlFor="email" className="text-gray-700">
              Correo Electrónico
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico..."
              className="border border-gray-400 w-full rounded-md px-3 py-2 bg-white"
            />
          </div>
          <div className="mb-4">
            <Label htmlFor="password" className="text-gray-700">
              Contraseña
            </Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña..."
              className="border border-gray-400 w-full rounded-md px-3 py-2 bg-white"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-center mb-4 space-x-2">
            <Checkbox
              id="keep-signed-in"
              checked={keepSignedIn}
              onCheckedChange={(checked) => setKeepSignedIn(checked === true)}
              className="mr-2"
            />
            <Label htmlFor="keep-signed-in" className="text-gray-700">
              Mantener la sesión iniciada
            </Label>
          </div>

          <div className="flex justify-center">
            <Button
              type="submit"
              className="w-auto px-4 py-1 bg-gray-200 text-black border border-gray-500 rounded-md text-sm"
            >
              INICIAR SESIÓN
            </Button>
          </div>
          <div className="flex justify-center mt-4 text-xs">
            <Link href="/restablecer" className="text-blue-500">
              OLVIDE MI CONTRASEÑA
            </Link>
          </div>
          <div className="flex justify-center mt-10">
            <Link href="#" className="text-blue-500">
              REGISTRATE AQUÍ
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
