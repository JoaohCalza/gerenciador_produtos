import { Request, Response } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (email !== "aluno@teste.com" || password !== "teste") {
            return res.status(401).json({ message: "Credenciais inválidas" });
        }
        const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

        console.log("Token gerado:", token);
        return res.status(200).json({
            message: "Login bem-sucedido",
            token,
        });
    } catch (error) {
        console.error("Erro ao fazer login:", error);
        return res.status(500).json({ message: "Erro ao fazer login", error: error.message });
    }
};
