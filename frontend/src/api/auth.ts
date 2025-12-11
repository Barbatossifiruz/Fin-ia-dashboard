import type { User } from "../types/types";

export type LoginResponse = {
    access_token: string;
    user: User;
};

// Se renombra 'password' a '_password' para indicar que no se usará.
export async function loginUser({ email, _password }: { email: string; password: string }): Promise<LoginResponse> {
    // Simula login
    return {
        access_token: "fake-jwt-token",
        user: { id: 1, email, full_name: "Usuario Demo" },
    };
}

// Se renombra 'token' a '_token'.
export async function me(_token: string): Promise<User> {
    // Devuelve usuario de prueba
    return { id: 1, email: "demo@mail.com", full_name: "Usuario Demo" };
}

// Se renombra 'password' a '_password'.
export async function registerUser({ email, _password, full_name }: { email: string; password: string; full_name?: string }): Promise<User> {
    return { id: 2, email, full_name: full_name || "Nuevo Usuario" };
}
