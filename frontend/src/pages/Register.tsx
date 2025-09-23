// src/pages/Register.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
    const { register } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        try {
            await register(email, password, fullName);
            navigate("/dashboard");
        } catch (err: any) {
            setError(err?.detail || err?.message || "Error en registro");
        }
    }

    return (
        <div className="max-w-md mx-auto mt-16 p-6 border rounded">
            <h1 className="text-2xl font-bold mb-4">Registro</h1>
            {error && <div className="bg-red-100 text-red-800 p-2 mb-4">{error}</div>}
            <form onSubmit={onSubmit} className="space-y-4">
                <input
                    className="w-full p-2 border rounded"
                    placeholder="Nombre completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input
                    className="w-full p-2 border rounded"
                    placeholder="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="w-full p-2 bg-green-600 text-white rounded" type="submit">
                    Crear cuenta
                </button>
            </form>
            <p className="text-sm mt-4">
                ¿Ya tienes cuenta?{" "}
                <Link className="text-blue-600" to="/login">
                    Entrar
                </Link>
            </p>
        </div>
    );
}
