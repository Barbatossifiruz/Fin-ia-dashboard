import { useEffect, useState } from "react";

function App() {
    const [status, setStatus] = useState("cargando...");

    useEffect(() => {
        fetch("/api/health")
            .then((r) => r.json())
            .then((d) => setStatus(d.status))
            .catch(() => setStatus("error"));
    }, []);

    return (
        <main className="p-8 font-sans">
            <h1 className="text-3xl font-bold mb-4">Dashboard de Ahorro con IA</h1>
            <p className="text-lg">
                Estado de la API: <span className="font-semibold">{status}</span>
            </p>
            <p className="text-sm text-gray-600 mt-2">Si ves "ok", el front ya habla con el backend ✅</p>
        </main>
    );
}

export default App;
