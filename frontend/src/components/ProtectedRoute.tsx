// src/components/ProtectedRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const { user, loading } = useAuth();
    if (loading) return <div className="p-4">Cargando...</div>;
    if (!user) return <Navigate to="/login" replace />;
    return children;
};
