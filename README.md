
# Projeto de Desenvolvimento Web - Sistema de Gerenciamento de Produtos e Usuários

Este é um projeto desenvolvido para a disciplina de Engenharia de software (IFES-Serra). O objetivo do projeto é criar um sistema de gerenciamento de vendas de figurinhas e usuários utilizando React para o frontend e uma API Flask para o backend. 

## Links para avaliação

### Sonar
   ```bash
   https://sonarcloud.io/summary/
   ```
### Analise do projeto
   ```bash
   https://docs.google.com/
   ```
### BackEnd
   ```bash
   https://github.com/GuilhermeFiorot/
   ```

## Funcionalidades

- **Autenticação de Usuários**: Login e registro de usuários com verificação de permissões administrativas.
- **Gerenciamento de Produtos**: Adição, edição e exclusão de produtos.
- **Gerenciamento de Usuários**: Adição, edição e exclusão de usuários.
- **Carrinho de Compras**: Adição de produtos ao carrinho de compras.

## Tecnologias Utilizadas

- **Frontend**: React, Material-UI, Redux
- **Backend**: Flask
- **API**: Axios para comunicação com a API
- **Gerenciamento de Estado**: Redux no carrinho de compras.

## Instalação e Execução

### Pré-requisitos

- Node.js
- NPM

### Configuração do Frontend

1. Clone o repositório
   ```bash
   git clone https://github.com/EmanuelHSC/boliviafigurinhas.git
   ```
2. Navegue até o diretório do frontend
   ```bash
   cd <diretorio>
   ```
3. Instale as dependências
   ```bash
   npm install
   ```
4. Inicie o servidor de desenvolvimento
   ```bash
   npm run dev
   ```

---

## 🚀 Tecnologias Utilizadas  
- **Frontend:** React.js, Redux, Redux-Saga, Vite  
- **Gerenciamento de Estado:** Redux Ducks  
- **Estilização:** CSS  
- **Controle de Versão:** Git e GitHub  
- **Infraestrutura:** Docker e Nginx  

---

## 📂 Estrutura do Projeto  

```
📦 BoliviaFigurinhas
├── 📂 .github/workflows      # Configuração para CI/CD
│   ├── ci-cd.yml             # Pipeline de integração contínua
│
├── 📂 node_modules           # Dependências do projeto
├── 📂 public                 # Arquivos estáticos
│   ├── th.jpeg               # Imagem de exemplo
│   ├── vite.svg              # Ícone do Vite
│
├── 📂 src                    # Código-fonte principal
│   ├── 📂 api                # Chamadas para API
│   ├── 📂 assets             # Arquivos estáticos (ícones, imagens, etc.)
│   ├── 📂 components         # Componentes reutilizáveis
│   │   ├── CartItem.jsx
│   │   ├── checkoutModal.jsx
│   │   ├── loginModal.jsx
│   │   ├── profileMenu.jsx
│   │   ├── productCard.jsx
│   │   ├── registerModal.jsx
│   │   ├── resetPasswordModal.jsx
│   │   ├── navBar.jsx
│   │
│   ├── 📂 config             # Configurações globais
│   │   ├── config.js
│   │
│   ├── 📂 data               # Dados mockados para testes
│   │   ├── products.jsx
│   │   ├── users.jsx
│   │
│   ├── 📂 models             # Modelos de dados
│   │   ├── Product.js
│   │   ├── Users.js
│   │
│   ├── 📂 services           # Serviços de comunicação com backend
│   │   ├── ProductService.js
│   │
│   ├── 📂 store              # Gerenciamento de estado
│   │   ├── 📂 ducks          # Implementação de Redux Ducks
│   │   │   ├── cart.js
│   │   │   ├── index.js
│   │   ├── 📂 saga           # Implementação de Redux Saga
│   │   │   ├── cart.js
│   │   │   ├── index.js
│   │   ├── index.js          # Configuração principal do store
│   │
│   ├── 📂 views              # Páginas da aplicação
│   │   ├── adminPage.jsx
│   │   ├── cart.jsx
│   │   ├── finishOrder.jsx
│   │   ├── productList.jsx
│   │   ├── userAdminPanel.jsx
│   │
│   ├── App.css               # Estilização global
│   ├── App.jsx               # Componente principal
│   ├── index.css             # Estilos globais adicionais
│   ├── index.js              # Ponto de entrada da aplicação
│   ├── main.jsx              # Renderização do app
│
├── .dockerignore             # Arquivos ignorados pelo Docker
├── .env                      # Variáveis de ambiente
├── .eslintrc.cjs             # Configuração do ESLint
├── .gitignore                # Arquivos ignorados pelo Git
├── index.html                # Página principal do projeto
├── nginx.conf                # Configuração do Nginx para servir a aplicação
├── package-lock.json         # Controle de versão das dependências
├── package.json              # Dependências e scripts do projeto
├── README.md                 # Documentação do projeto
├── vite.config.js            # Configuração do Vite
```
---
