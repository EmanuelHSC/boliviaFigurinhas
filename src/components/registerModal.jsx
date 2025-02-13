import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent, TextField, DialogActions, Button } from "@mui/material";
import PropTypes from "prop-types";
import api from "../api/api";

function RegisterModal({ open, onClose, onRegister }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
    endereco: "",
    cidade: "",
    cep: "",
    pais: "",
    telefone: "",
    cpf: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // Nome não pode estar vazio
    if (!formData.name.trim()) {
      newErrors.name = "Nome é obrigatório.";
    }

    // Validação de Email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido.";
    }

    // Validação de Senha
    if (formData.password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    } else if (!/[A-Z]/.test(formData.password) || !/\d/.test(formData.password) || !/[!@#$%^&*]/.test(formData.password)) {
      newErrors.password = "A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.";
    }

    // Validação de CPF (apenas estrutura básica)
    if (!/^\d{11}$/.test(formData.cpf)) {
      newErrors.cpf = "CPF deve ter 11 dígitos numéricos.";
    }

    // Validação de CEP
    if (!/^\d{8}$/.test(formData.cep)) {
      newErrors.cep = "CEP deve conter 8 dígitos numéricos.";
    }

    // Validação de Telefone (mínimo 10 dígitos)
    if (!/^\d{10,11}$/.test(formData.telefone)) {
      newErrors.telefone = "Telefone inválido. Deve conter entre 10 e 11 dígitos.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async () => {
    if (!validate()) {
      return;
    }

    try {
      const response = await api.post("/register", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        is_admin: formData.isAdmin,
        endereco: formData.endereco,
        cidade: formData.cidade,
        cep: formData.cep,
        pais: formData.pais,
        telefone: formData.telefone,
        cpf: formData.cpf,
      });

      const { access_token } = response.data;
      localStorage.setItem("access_token", access_token);
      onRegister(access_token);
      onClose();
    } catch (error) {
      console.error("Erro ao registrar:", error);
      alert("Erro ao registrar. Verifique os dados e tente novamente.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Registrar</DialogTitle>
      <DialogContent>
        <TextField margin="dense" label="Nome" type="text" fullWidth variant="outlined" name="name" value={formData.name} onChange={handleChange} error={!!errors.name} helperText={errors.name} InputProps={{ style: { color: "#000" } }}/>
        <TextField margin="dense" label="Email" type="email" fullWidth variant="outlined" name="email" value={formData.email} onChange={handleChange} error={!!errors.email} helperText={errors.email} InputProps={{ style: { color: "#000" } }}/>
        <TextField margin="dense" label="Senha" type="password" fullWidth variant="outlined" name="password" value={formData.password} onChange={handleChange} error={!!errors.password} helperText={errors.password} InputProps={{ style: { color: "#000" } }}/>
        <TextField margin="dense" label="Endereço" type="text" fullWidth variant="outlined" name="endereco" value={formData.endereco} onChange={handleChange} InputProps={{ style: { color: "#000" } }}/>
        <TextField margin="dense" label="Cidade" type="text" fullWidth variant="outlined" name="cidade" value={formData.cidade} onChange={handleChange} InputProps={{ style: { color: "#000" } }}/>
        <TextField margin="dense" label="CEP" type="number" fullWidth variant="outlined" name="cep" value={formData.cep} onChange={handleChange} error={!!errors.cep} helperText={errors.cep} InputProps={{ style: { color: "#000" } }}/>
        <TextField margin="dense" label="País" type="text" fullWidth variant="outlined" name="pais" value={formData.pais} onChange={handleChange} InputProps={{ style: { color: "#000" } }}/>
        <TextField margin="dense" label="Telefone" type="number" fullWidth variant="outlined" name="telefone" value={formData.telefone} onChange={handleChange} error={!!errors.telefone} helperText={errors.telefone} InputProps={{ style: { color: "#000" } }}/>
        <TextField margin="dense" label="CPF" type="number" fullWidth variant="outlined" name="cpf" value={formData.cpf} onChange={handleChange} error={!!errors.cpf} helperText={errors.cpf} InputProps={{ style: { color: "#000" } }}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button onClick={handleSubmit}>Registrar</Button>
      </DialogActions>
    </Dialog>
  );
}

RegisterModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onRegister: PropTypes.func.isRequired,
};

export default RegisterModal;
