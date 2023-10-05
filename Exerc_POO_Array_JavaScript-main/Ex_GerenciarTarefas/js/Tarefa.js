export class Tarefa {
    // Atributos privados
    #criticidade;
    #descricao;
    #prazo;
    #selecionada;

    // Construtor
    constructor(criticidade, descricao, prazo) {
        this.#criticidade = criticidade;
        this.#descricao = descricao;
        this.#prazo = prazo;
        this.#selecionada = false;
    }

    // Métodos getters
    get getCriticidade() {
        return this.#criticidade;
    }

    get getDescricao() {
        return this.#descricao;
    }

    get getPrazo() {
        return this.#prazo;
    }

    get isSelecionada() {
        return this.#selecionada;
    }

    // Métodos setters
    set setCriticidade(valor) {
        this.#criticidade = valor;
    }

    set setDescricao(valor) {
        this.#descricao = valor;
    }

    set setPrazo(valor) {
        this.#prazo = valor;
    }

    setSelecionada(selecionada) {
        this.#selecionada = selecionada;
    }

    //Retorna uma representação em texto da tarefa
    toString() {
        return `Criticidade: ${this.#criticidade}, Descrição: ${this.#descricao}, Prazo: ${this.#prazo}`;
    }
}
