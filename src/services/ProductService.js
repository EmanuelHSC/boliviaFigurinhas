// src/api/ProductService.js

import api from "../api/api";

class ProductService {
  async getAll() {
    try {
      const response = await api.get("/products");
      return response.data;
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      return [];
    }
  }

  async create(product) {
    try {
      const response = await api.post("/products", product);
      return response.data;
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      return null;
    }
  }

  async update(product) {
    try {
      await api.put(`/products/${product.id}`, product);
      return product;
    } catch (error) {
      console.error("Erro ao atualizar produto:", error);
      return null;
    }
  }

  async delete(id) {
    try {
      await api.delete(`/products/${id}`);
      return true;
    } catch (error) {
      console.error("Erro ao deletar produto:", error);
      return false;
    }
  }
}

export default new ProductService();