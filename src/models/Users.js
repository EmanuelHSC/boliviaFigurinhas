export class User {
    constructor(id, name, email, password, isAdmin, endereco, cidade, cep, pais, telefone, cpf) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.endereco = endereco;
        this.cidade = cidade;
        this.cep = cep;
        this.pais = pais;
        this.telefone = telefone;
        this.cpf = cpf;
    }

    getId = () => this.id;
    getName = () => this.name;
    getEmail = () => this.email;
    getPassword = () => this.password;
    getIsAdmin = () => this.isAdmin;
    getEndereco = () => this.endereco;
    getCidade = () => this.cidade;
    getCep = () => this.cep;
    getPais = () => this.pais;
    getTelefone = () => this.telefone;
    getCpf = () => this.cpf;
}