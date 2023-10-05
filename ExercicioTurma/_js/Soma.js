class Soma {
    #numero1;
    #numero2;

    constructor(numero1, numero2){
        this.#numero1 = numero1;
        this.#numero2 = numero2;
    }

    get getNumero1(){
        return this.#numero1;
    }

    get getNumero2(){
        return this.#numero2;
    }

    efetuarSoma(){
        return (this.#numero1 + this.#numero2);
    }
}