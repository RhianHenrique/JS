import Soma from "./Soma.js";
import Divisao from "./Divisao.js";
import Subtracao from "./Subtracao.js";
import Multi from "./Multi.js";

const campoNumero2 = document.getElementById("numero2");
const campoNumero1 = document.getElementById("numero1");

const botaoSoma = document.getElementById("btnSoma");
const botaoDivisao = document.getElementById("btnDivisao");
const botaoMultiplicacao = document.getElementById("btnMulti");
const botaoSub = document.getElementById("btnSubtracao");

botaoSoma.addEventListener("click", function() {
    try {
        if (isNaN(campoNumero1.value) || isNaN(campoNumero2.value)){
            throw new Error("Digite apenas numeros");
        }
    } catch (error) {
        saida.textContent = error.message;
        return;
    }

    const numero1 = parseFloat(campoNumero1.value);
    const numero2 = +campoNumero2.value;

    let somar = new Somar (numero1, numero2);
    somar.efetuarSoma();
});
