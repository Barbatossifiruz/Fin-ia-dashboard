import React, { createContext, useContext, useEffect, useState } from "react";
import { loginUser, me, registerUser } from "../api/auth";
import type { User } from "../types";

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (email: string, password: string, full_name?: string) => Promise<void>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            me(token)
                .then((u) => setUser(u))
                .catch(() => localStorage.removeItem("auth_token"))
                .finally(() => setLoading(false));
        } else setLoading(false);
    }, []);

    async function login(email: string, password: string) {
        const resp = await loginUser({ email, password });
        localStorage.setItem("auth_token", resp.access_token);
        setUser(resp.user);
    }

    async function register(email: string, password: string, full_name?: string) {
        await registerUser({ email, password, full_name });
        await login(email, password);
    }

    function logout() {
        localStorage.removeItem("auth_token");
        setUser(null);
    }

    return <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>;
};

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
}
