// var variavelGlobal = "global";

// function exibirConteudo(){
//     var variavelLocal = "local";
//     return variavelLocal;
// }

// document.write(variavelGlobal); // ou + <br>
// document.write("<br>");  
// document.write(exibirConteudo());

// function meuMetodo() {
//     let saida1 = "Olá";

//     if(saida1 == "Olá") {
//         let saida2 = " Mundo!";
//         return saida1 + saida2;
//     }
//     else {
//     return saida1 = saida2;
//     }
// }
//     document.write(meuMetodo());

// const CONSTANTE = 5;

// if(CONSTANTE === 5){
//     const CONSTANTE = 20;
//     document.write("dentro do bloco: " + CONSTANTE + "<br>");
// }

// document.write(" fora do bloco: " + CONSTANTE);

// let nome = prompt("digite seu nome: ");
// document.write("Olá " + nome + ", seja bem vindo!");

function exibirNome(){
    let nome = document.getElementById("nomeInput").value;
    document.write("Olá, " + nome + "!");
}
    