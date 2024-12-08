import { Request, Response } from "express";
import { AppDataSource } from "../database";
import { Category } from "../entity/category";
import { Product } from "../entity/product";

// Função para criar uma nova categoria
export const postCategory = async (req: Request, res: Response) => {
    try {
        const category = AppDataSource.getRepository(Category).create(req.body);
        const result = await AppDataSource.getRepository(Category).save(category);
        return res.status(201).json(result);
    } catch (error) {
        console.error('Erro ao inserir Categoria:', error);
        return res.status(500).json({ message: 'Erro ao inserir Categoria', error: error.message });
    }
};

// Função para listar todas as categorias
export const getCategories = async (req: Request, res: Response) => {
    try {
        const results: Category[] = await AppDataSource.getRepository(Category).find();
        return res.status(200).send(results);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao listar Categorias' });
    }
};

// Função para obter uma categoria específica
export const getCategory = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;
        const results: Category | null = await AppDataSource.getRepository(Category).findOneBy({ id });
        if (!results) {
            return res.status(404).json({ message: 'Categoria não encontrada' });
        }
        return res.status(200).send(results);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar Categoria' });
    }
};

// Função para atualizar uma categoria
export const updateCategory = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;
        const category: Category | null = await AppDataSource.getRepository(Category).findOneBy({ id });

        if (!category) {
            return res.status(404).json({ error: 'Categoria não encontrada' });
        }

        AppDataSource.getRepository(Category).merge(category, req.body);
        const results: Category = await AppDataSource.getRepository(Category).save(category);
        return res.status(200).send(results);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao atualizar Categoria' });
    }
};

// Função para deletar uma categoria
export const deleteCategory = async (req: Request, res: Response) => {
    try {
        const id: number = +req.params.id;
        const results = await AppDataSource.getRepository(Category).delete(id);
        return res.status(200).send(results);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao deletar Categoria' });
        console.error(error);
    }
};

export const getProducts2 = async (req: Request, res: Response) => {
    try {
        const productRepository = AppDataSource.getRepository(Product);
        const products = await productRepository.find({ relations: ['category'] });
        return res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar produtos' });
        console.error(error); // Mostre o erro no console para depuração
    }
};
