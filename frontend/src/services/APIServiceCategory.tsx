import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export interface Categoria {
    id?: number; // O id pode ser opcional para novos produtos
    name: string;
}

  export const getFunction = async () => {
    const response = await axios.get(`${API_URL}/webmob/categories`);
    return response.data;
};

export const postFunction = async (category: Categoria) => {
    await axios.post(`${API_URL}/webmob/categories`, category);
};

export const updateFunction = async (id: number, category: Categoria) => {
    await axios.put(`${API_URL}/webmob/categories/${id}`, category);
};

export const deleteFunction = async (id: number) => {
    await axios.delete(`${API_URL}/webmob/categories/${id}`);
};

export const getProducts = async () => {
    const response = await axios.get(`${API_URL}/webmob/productsCat`); // Altere para a URL correta
    return response.data
};
