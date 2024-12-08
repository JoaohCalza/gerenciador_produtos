import axios from 'axios';
import { Categoria } from './APIServiceCategory';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

export interface Product {
  id?: number;
  name: string;
  price: number;
  category?: Categoria;
}

export const getFunction = async () => {
    const response = await axios.get(`${API_URL}/webmob/products`);
    return response.data;
};

export const postFunction = async (product: Product) => {
    await axios.post(`${API_URL}/webmob/products`, product);
};

export const updateFunction = async (id: number, product: Product) => {
    await axios.put(`${API_URL}/webmob/products/${id}`, product);
};

export const deleteFunction = async (id: number) => {
    await axios.delete(`${API_URL}/webmob/products/${id}`);
};

