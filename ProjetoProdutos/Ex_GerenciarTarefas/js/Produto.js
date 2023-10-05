export class Produto {
    // Atributos privados
    #nome;
    #descricao;
    #idDoProduto;
    #selecionada;

    // Construtor
    constructor(nome, descricao, idDoProduto) {
        this.#nome = nome;
        this.#descricao = descricao;
        this.#idDoProduto = idDoProduto;
        this.#selecionada = false;
    }

    // Métodos getters

    get getNome(){
        return this.#nome;
    }

    get getDescricao() {
        return this.#descricao;
    }

    get getIdDOProduto() {
        return this.#idDoProduto;
    }

    get isSelecionada() {
        return this.#selecionada;
    }

    // Métodos setters

    set setNome(valor) {
        this.#nome = valor;
    }

    set setDescricao(valor) {
        this.#descricao = valor;
    }

    set setIdDoProduto(valor) {
        this.#idDoProduto = valor;
    }

    setSelecionada(selecionada) {
        this.#selecionada = selecionada;
    }

    //Retorna uma representação em texto da tarefa
    toString() {
        return `Nome: ${this.#nome}, Descrição: ${this.#descricao}, ID do Produto: ${this.#idDoProduto}`;
    }
}
