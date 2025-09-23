// src/pages/Login.tsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await login(email, password);
            navigate("/dashboard");
        } catch (err: any) {
            setError(err?.detail || err?.message || "Error en login");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-md mx-auto mt-16 p-6 border rounded">
            <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
            {error && <div className="bg-red-100 text-red-800 p-2 mb-4">{error}</div>}
            <form onSubmit={onSubmit} className="space-y-4">
                <input className="w-full p-2 border rounded" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input
                    className="w-full p-2 border rounded"
                    placeholder="Contraseña"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="w-full p-2 bg-blue-600 text-white rounded" type="submit" disabled={loading}>
                    {loading ? "Cargando..." : "Entrar"}
                </button>
            </form>
            <p className="text-sm mt-4">
                ¿No tienes cuenta?{" "}
                <Link className="text-blue-600" to="/register">
                    Regístrate
                </Link>
            </p>
        </div>
    );
}
