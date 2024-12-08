import React, { useState, useEffect } from 'react';
import { Product, postFunction, updateFunction, deleteFunction } from "@/services/APIServiceProducts";
import { getProducts, getFunction, Categoria } from '@/services/APIServiceCategory';
import styles from "../styles/Product.module.css";

const ProductHomePage: React.FC = () => {
  const [data, setData] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Categoria[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [productForm, setProductForm] = useState<Product>({
    name: '',
    price: 0,
    category: undefined,
  });
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const cats = await getFunction();
      setCategories(cats);
    })();
  }, []);

  const btnGetFunctionClick = async () => {
    try {
      const products = await getProducts();
      const cats = await getFunction();
      setData(products);
      setCategories(cats);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
      setMessage("Erro ao carregar produtos ou categorias.");
    }
  };

  const handleAddProduct = async () => {
    try {
      await postFunction(productForm);
      setMessage("Produto adicionado com sucesso!");
      setShowForm(false);
      setProductForm({ name: '', price: 0, category: undefined });
      btnGetFunctionClick();
    } catch (err) {
      console.error("Erro ao adicionar produto:", err);
      setMessage("Erro ao adicionar produto.");
    }
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setProductForm(product);
    setShowForm(true);
  };

  const handleUpdateProduct = async () => {
    if (editingProduct) {
      try {
        await updateFunction(editingProduct.id!, productForm);
        setMessage("Produto atualizado com sucesso!");
        setEditingProduct(null);
        setShowForm(false);
        setProductForm({ name: '', price: 0, category: undefined });
        btnGetFunctionClick();
      } catch (err) {
        console.error("Erro ao atualizar produto:", err);
        setMessage("Erro ao atualizar produto.");
      }
    }
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteFunction(id);
      setMessage("Produto excluído com sucesso!");
      btnGetFunctionClick();
    } catch (err) {
      console.error("Erro ao excluir produto:", err);
      setMessage("Erro ao excluir produto.");
    }
  };

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Bem-vindo à Página de Produto</h1>
      {message && (<p className={`${styles.message} ${message.includes('Erro') ? styles.error : styles.success}`}>{message}</p>)}
      <button className={styles.getButton} onClick={btnGetFunctionClick}>Listar Produtos</button>

      {showForm && (
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>{editingProduct ? "Editar Produto" : "Adicionar Produto"}</h2>
          <form className={styles.productForm} onSubmit={(e) => { e.preventDefault(); editingProduct ? handleUpdateProduct() : handleAddProduct(); }}>
            <input
              type="text"
              placeholder="Nome do Produto"
              value={productForm.name}
              onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
              required
              className={styles.formInput}
            />
            <input
              type="number"
              placeholder="Preço do Produto"
              value={productForm.price}
              onChange={(e) => setProductForm({ ...productForm, price: Number(e.target.value) })}
              required
              className={styles.formInput}
            />
            <select
              value={productForm.category?.id || ''}
              onChange={(e) => {
                const selectedCategory = categories.find(cat => cat.id === Number(e.target.value));
                setProductForm({ ...productForm, category: selectedCategory });
              }}
              required
              className={styles.formSelect}
            >
              <option value="">Selecione uma Categoria</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
            <div className={styles.formButtons}>
              <button type="submit" className={styles.submitButton}>
                {editingProduct ? "Atualizar Produto" : "Adicionar Produto"}
              </button>
              <button type="button" onClick={() => {
                setShowForm(false);
                setEditingProduct(null);
                setProductForm({ name: '', price: 0, category: undefined });
              }} className={styles.cancelButton}>Cancelar</button>
            </div>
          </form>
        </div>
      )}

      <ul className={styles.productList}>
        {data.map((item) => (
          <li key={item.id} className={styles.productItem}>
            <div className={styles.productInfo}>
              <span><strong>ID:</strong> {item.id}</span>
              <span><strong>Nome:</strong> {item.name}</span>
              <span><strong>Preço:</strong> R$ {item.price.toString().replace('.', ',')}</span>
              <span><strong>Categoria:</strong> {item.category?.name || 'Sem Categoria'}</span>
            </div>
            <div className={styles.actionButtons}>
              <button onClick={() => handleEditProduct(item)} className={styles.editButton}>Editar</button>
              <button onClick={() => handleDeleteProduct(item.id!)} className={styles.deleteButton}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>

      <button className={styles.addProductButton} onClick={() => {
        setShowForm(true);
        setEditingProduct(null);
        setProductForm({ name: '', price: 0, category: undefined });
      }}>Adicionar Produto</button>
    </div>
  );
};

export default ProductHomePage;
