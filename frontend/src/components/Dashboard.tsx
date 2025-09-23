import React from "react";
import { useAuth } from "../context/AuthContext";

const Dashboard: React.FC = () => {
    const { user, logout, loading } = useAuth();

    if (loading) return <p>Cargando...</p>;

    if (!user) return <p>No estás logueado</p>;

    return (
        <div>
            <p>Hola {user.full_name} 👋</p>
            <button onClick={logout}>Cerrar sesión</button>
        </div>
    );
};

export default Dashboard;
