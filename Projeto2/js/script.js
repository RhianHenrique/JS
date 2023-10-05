// let nome = prompt("Digite seu nome: ");
// document.write("Olá " + nome);
// function exibirConteudo(){
//     let nome = document.getElementById("nomeInput").value;
//     document.write("Olá " + nome);
// }
function exibirConteudo() {
    let selecaoDeDisciplinas = document.getElementById("selecionarDisciplina");
    let i = selecaoDeDisciplinas.selectedIndex;
    //typeof;
    //console.log(i);

    let disciplinaSelecionada = selecaoDeDisciplinas.options[i].value;

    document.write("Disciplina Selecionada: " + disciplinaSelecionada);
}
