import React, { useState, useEffect } from 'react';
import { getFunction, postFunction, updateFunction, deleteFunction } from "@/services/APIServiceCategory";
import { Categoria } from '@/services/APIServiceCategory';
import styles from '@/styles/Categories.module.css';

const CategoryHomePage: React.FC = () => {
  const [data, setData] = useState<Categoria[]>([]);
  const [editingCategory, setEditingCategory] = useState<Categoria | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [categoryForm, setCategoryForm] = useState<Categoria>({ name: '' });
  const [message, setMessage] = useState<string | null>(null);

  const btnGetFunctionClick = async () => {
    try {
      const data = await getFunction();
      setData(data);
    } catch (err) {
      console.error("Erro ao buscar dados:", err);
      setMessage("Erro ao carregar categorias.");
    }
  };

  const handleAddCategory = async () => {
    try {
      await postFunction(categoryForm);
      setMessage("Categoria adicionada com sucesso!");
      setShowForm(false);
      setCategoryForm({ name: '' });
      btnGetFunctionClick();
    } catch (err) {
      console.error("Erro ao adicionar categoria:", err);
      setMessage("Erro ao adicionar categoria.");
    }
  };

  const handleEditCategory = (category: Categoria) => {
    setEditingCategory(category);
    setCategoryForm(category);
    setShowForm(true);
  };

  const handleUpdateCategory = async () => {
    if (editingCategory) {
      try {
        await updateFunction(editingCategory.id!, categoryForm);
        setMessage("Categoria atualizada com sucesso!");
        setEditingCategory(null);
        setShowForm(false);
        setCategoryForm({ name: '' });
        btnGetFunctionClick();
      } catch (err) {
        console.error("Erro ao atualizar categoria:", err);
        setMessage("Erro ao atualizar categoria.");
      }
    }
  };

  const handleDeleteCategory = async (id: number) => {
    try {
      await deleteFunction(id);
      setMessage("Categoria excluída com sucesso!");
      btnGetFunctionClick();
    } catch (err) {
      console.error("Erro ao excluir categoria:", err);
      setMessage("Erro ao excluir categoria, verifique se ela está sendo utilizada.");
    }
  };

  return (
    <div className={styles.homePage}>
      <h1 className={styles.title}>Bem-vindo à Página de Categorias</h1>
      {message && (<p className={`${styles.message} ${message.includes('Erro') ? styles.error : styles.success}`}>{message}</p>)}
      <button className={styles.getButton} onClick={btnGetFunctionClick}>Listar Categorias</button>
      
      {showForm && (
        <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>{editingCategory ? "Editar Categoria" : "Adicionar Categoria"}</h2>
          <input
            type="text"
            placeholder="Nome da Categoria"
            value={categoryForm.name}
            onChange={(e) => setCategoryForm({ ...categoryForm, name: e.target.value })}
            required
            className={styles.formInput}
          />
          <div className={styles.formButtons}>
            <button onClick={editingCategory ? handleUpdateCategory : handleAddCategory} className={styles.submitButton}>
              {editingCategory ? "Atualizar Categoria" : "Adicionar Categoria"}
            </button>
            <button onClick={() => {
              setShowForm(false);
              setEditingCategory(null);
              setCategoryForm({ name: '' });
            }} className={styles.cancelButton}>Cancelar</button>
          </div>
        </div>
      )}

      <ul className={styles.categoryList}>
        {data.map((item) => (
          <li key={item.id} className={styles.categoryItem}>
            <div className={styles.categoryInfo}>
              <span className={styles.categoryId}><strong>ID:</strong> {item.id}</span>
              <span className={styles.categoryName}><strong>Nome:</strong> {item.name}</span>
            </div>
            <div className={styles.actionButtons}>
              <button onClick={() => handleEditCategory(item)} className={styles.editButton}>Editar</button>
              <button onClick={() => handleDeleteCategory(item.id!)} className={styles.deleteButton}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>

      <button className={styles.addCategoryButton} onClick={() => {
        setShowForm(true);
        setEditingCategory(null);
        setCategoryForm({ name: '' });
      }}>Adicionar Categoria</button>
    </div>
  );
};

export default CategoryHomePage;
