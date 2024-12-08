import React, { useState } from "react";
import styles from "../styles/Login.module.css";

interface LoginProps {
    onLogin: (token: string) => void; // Modificado para aceitar o token recebido
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            const response = await fetch("http://localhost:3001/webmob/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage("Login bem-sucedido!");
                onLogin(data.token); // Passa o token para o componente pai
            } else {
                const error = await response.json();
                setMessage(error.message || "Erro ao fazer login");
            }
        } catch (error) {
            setMessage("Erro de conexão com o servidor");
            console.error("Erro:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={styles.loginContainer}>
            <div className={styles.loginForm}>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Entrando..." : "Entrar"}
                    </button>
                </form>
                {message && <p>{message}</p>}
            </div>
        </div>
    );
};

export default Login;
