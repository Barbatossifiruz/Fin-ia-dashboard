import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const LoginForm: React.FC = () => {
    const { login, user, logout } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        try {
            await login(email, password);
            console.log("✅ Login exitoso");
        } catch (err) {
            console.error("❌ Error en login", err);
        }
    }

    if (user) {
        return (
            <div>
                <p>Hola, {user.full_name || user.email} 👋</p>
                <button onClick={logout}>Cerrar sesión</button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Iniciar sesión</button>
        </form>
    );
};

export default LoginForm;
