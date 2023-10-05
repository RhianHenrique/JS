// Importe das classes Tarefa e Tarefas.
import { Produto } from './Produto.js';
import { Produtos } from './Produtos.js';

// Cria uma instância da classe Tarefas.
let produtos = new Produtos();

//Função que é chamada qdo o usuário clica no botão "Adicionar Tarefa".
function adicionarProduto() {
    //Obtém os valores dos campos de entrada.
    let nome = document.getElementById("nomeProdutoInput").value;
    let descricao = document.getElementById("descricaoProdutoInput").value;

    let idDoProduto = document.getElementById("idDoProdutoInput").value;

    //valida se todos os campos foram preenchidos.
    if ((nome === '') || (descricao === '') || (idDoProduto === '')) {
        document.getElementById("mensagem").innerText = "Preencha todos os quesitos para inserir um produto. ";
        return;
    }
    // Cria uma nova instância de Tarefa com os parâmetros criticidade, descricao, prazo.
    let novoProduto = new Produto(nome, descricao, idDoProduto);
    //chama o método adicionarTarefa passando a tarefa criada
    produtos.adicionarProduto(novoProduto);

    // Habilita o botão para listar tarefas.
    document.getElementById("btnListarProdutos").disabled = false;
    // Exibe o texto que a tarefa foi adicionada com sucesso.
    document.getElementById("mensagem").innerText = "Produto inserido com sucesso!";

    // Limpar a lista de tarefas (deixa de exibir as tarefas).
    let lista = document.getElementById("listaProdutos");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

/**
* Função para validar se uma entrada de caixa de seleção foi marcada 
* retorna true ou false pra isso.
**/
function verificarSeEntradaFoiMarcada(entrada) {
    if (entrada.checked) {
        return true;
    } else {
        return false;
    }
}

//Associa o evento "change" a cada caixa de seleção.
function validarEventoCliqueEmCaixaDeSelecao(entrada) {
    entrada.addEventListener("change", function tratarMudancaDeSelecao() {
        atualizarEstadoRemovedorItens();
    });
}

// Função que atualiza o estado do botão "Remover Itens".
function atualizarEstadoRemovedorItens() {
    let lista = document.getElementById("listaProdutos");
    let caixaDeSelecaoEntradas = lista.querySelectorAll("input[type='checkbox']");
    let algumSelecionado = Array.from(caixaDeSelecaoEntradas).some(verificarSeEntradaFoiMarcada);
    let btnRemoverProdutos = document.getElementById("btnRemoverProdutos");

    // Habilita ou desabilita o botão com base na seleção de caixas de seleção.
    if (algumSelecionado == true) {
        btnRemoverProdutos.disabled = false;
    } else {
        btnRemoverProdutos.disabled = true;
    }
}

// Função que lista as tarefas na página.
function exibirListaProdutos() {
    lista = document.getElementById("listaProdutos");

    // Remover todos os elementos filhos da lista.
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    // Lista as tarefas usando o método da classe Tarefas.
    lista.exibirListaProdutos;

    /**
     * O método querySelectorAll é uma função utilizada em elementos HTML 
     * para selecionar elementos que correspondam a um determinado seletor CSS. 
     * No contexto do nosso código, está buscando por todos os elementos <input> 
     * do tipo checkbox dentro do elemento com o id listaTarefas.
     * (assumindo que lista é uma referência ao elemento com id listaTarefas). 
     * O seletor "input[type='checkbox']" especifica que estamos procurando por 
     * elementos <input> do tipo checkbox.
     */
    let caixaDeSelecaoEntradas = lista.querySelectorAll("input[type='checkbox']");
    
    for (let i = 0; i < caixaDeSelecaoEntradas.length; i++) {
        let entrada = caixaDeSelecaoEntradas[i];
        validarEventoCliqueEmCaixaDeSelecao(entrada);
    }
    //Atualizar o estado do botão "Remover Itens".
    atualizarEstadoRemovedorItens();
    //Limpar a mensagem.
    document.getElementById("mensagem").innerText = "";
}

//Remove as tarefas selecionadas.
function removerProdutos() {
    let listaC = document.getElementById("listaProdutos");
    let caixaDeSelecaoEntradas = lista.querySelectorAll("input[type='checkbox']:checked");

    let indicesSelecionados = [];
    for (let i = 0; i < caixaDeSelecaoEntradas.length; i++) {
        let entrada = caixaDeSelecaoEntradas[i];
        // O método push() é utilizado para adicionar um novo elemento ao final da lista.
        indicesSelecionados.push(entrada.value);
    }
    // Remove as tarefas selecionadas.
    listaC.removerProdutos(indicesSelecionados);
    
    // Atualiza a lista.
    exibirListaProdutos();
}

/**
 * Inicializar a aplicação,
 * cria uma nova instância de Tarefas e configura os botões.
 **/ 
function iniciarAplicacao() {
    produtos = new Produtos(); // Cria uma instância de Tarefas.

    // Obtém referências aos botões de adicionar, listar e remover itens.
    let btnAdicionar = document.getElementById("btnInserir");
    let btnListar = document.getElementById("btnListarProdutos");
    let btnRemoverProdutos = document.getElementById("btnRemoverProdutos"); 

    // Adiciona eventos de clique aos botões.
    btnAdicionar.addEventListener("click", adicionarProduto);
    btnListar.addEventListener("click", exibirListaProdutos);
    btnRemoverProdutos.addEventListener("click", removerProdutos); 

    //Desabilita os botões de Listar e Remover Itens no início.
    btnRemoverProdutos.disabled = true;
    btnListar.disabled = true;
}
// Aguarda o carregamento completo do DOM antes de iniciar a aplicação.
document.addEventListener("DOMContentLoaded", iniciarAplicacao);
