import { useAuth } from "./context/AuthContext";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";

function App() {
    const { user, loading } = useAuth();

    if (loading) return <p>Cargando...</p>;

    return (
        <div>
            <h1>Fin-IA Dashboard</h1>
            {user ? <Dashboard /> : <LoginForm />}
        </div>
    );
}

export default App;
