// src/lib/fetchWithAuth.ts
export function fetchWithAuth(input: RequestInfo, init: RequestInit = {}) {
    const token = localStorage.getItem("auth_token");
    const headers = new Headers(init.headers || {});
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return fetch(input, { ...init, headers });
}
