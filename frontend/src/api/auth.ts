import { User } from "../types";

export type LoginResponse = {
    access_token: string;
    user: User;
};

export async function loginUser({ email, password }: { email: string; password: string }): Promise<LoginResponse> {
    // Simula login
    return {
        access_token: "fake-jwt-token",
        user: { id: 1, email, full_name: "Usuario Demo" },
    };
}

export async function me(token: string): Promise<User> {
    // Devuelve usuario de prueba
    return { id: 1, email: "demo@mail.com", full_name: "Usuario Demo" };
}

export async function registerUser({ email, password, full_name }: { email: string; password: string; full_name?: string }): Promise<User> {
    return { id: 2, email, full_name: full_name || "Nuevo Usuario" };
}
