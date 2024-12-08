import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Product } from "../entity/product";

export const postProduct = async (req: Request, res: Response) => {
    try {
        const product = AppDataSource.getRepository(Product).create(req.body);
        const result = await AppDataSource.getRepository(Product).save(product);
        return res.status(201).json(result);
    } catch (error) {
        console.error('Erro ao inserir Produto:', error);
        return res.status(500).json({ message: 'Erro ao inserir Produto', error: error.message });
    }
};

export const getProducts = async (req: Request, res: Response) => {
    try {
        const results: Product[] = await AppDataSource.getRepository(Product).find();
        return res.status(200).send(results);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar Produtos' });
    }
};

export const getProduct = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;
        const results: Product | null = await AppDataSource.getRepository(Product).findOneBy({ id });
        if (!results) {
            return res.status(404).json({ message: 'Produto não encontrado' });
        }
        return res.status(200).send(results);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar Produto' });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;
        const product: Product | null = await AppDataSource.getRepository(Product).findOneBy({ id });

        if (!product) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        AppDataSource.getRepository(Product).merge(product, req.body);
        const results: Product = await AppDataSource.getRepository(Product).save(product);
        return res.status(200).send(results);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar Produto' });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;
        const results = await AppDataSource.getRepository(Product).delete(id);
        return res.status(200).send(results);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar Produto' });
    }
};
