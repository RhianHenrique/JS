class Divisao {
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
        try{
            if(this.#numero2 <= 0 || this.#numero1 < 0){
                throw new Error("Divisao por zero nao é valida");
            }

            return(this.#numero1 / this.#numero2);

        } catch(error) {
            alert(error.message)
        }
        return (this.#numero1 / this.#numero2);
    }
}