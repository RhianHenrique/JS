// Importe das classes Tarefa e Tarefas.
import { Tarefa } from './Tarefa.js';
import { Tarefas } from './Tarefas.js';

// Cria uma instância da classe Tarefas.
let tarefas = new Tarefas();

//Função que é chamada qdo o usuário clica no botão "Adicionar Tarefa".
function adicionarTarefa() {
    //Obtém os valores dos campos de entrada.
    let criticidade = document.getElementById("criticidadeInput").value;
    let descricao = document.getElementById("descricaoInput").value;
    let prazo = document.getElementById("prazoInput").value;

    //valida se todos os campos foram preenchidos.
    if ((criticidade === '') || (descricao === '') || (prazo === '')) {
        document.getElementById("mensagem").innerText = "A Tarefa precisa de todos os itens para ser adicionada.";
        return;
    }
    // Cria uma nova instância de Tarefa com os parâmetros criticidade, descricao, prazo.
    let novaTarefa = new Tarefa(criticidade, descricao, prazo);
    //chama o método adicionarTarefa passando a tarefa criada
    tarefas.adicionarTarefa(novaTarefa);

    // Habilita o botão para listar tarefas.
    document.getElementById("btnListar").disabled = false;
    // Exibe o texto que a tarefa foi adicionada com sucesso.
    document.getElementById("mensagem").innerText = "Tarefa adicionada com sucesso!";

    // Limpar a lista de tarefas (deixa de exibir as tarefas).
    let lista = document.getElementById("listaTarefas");
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
    let lista = document.getElementById("listaTarefas");
    let caixaDeSelecaoEntradas = lista.querySelectorAll("input[type='checkbox']");
    let algumSelecionado = Array.from(caixaDeSelecaoEntradas).some(verificarSeEntradaFoiMarcada);
    let btnRemoverItens = document.getElementById("btnRemoverItens");

    // Habilita ou desabilita o botão com base na seleção de caixas de seleção.
    if (algumSelecionado == true) {
        btnRemoverItens.disabled = false;
    } else {
        btnRemoverItens.disabled = true;
    }
}

// Função que lista as tarefas na página.
function listarTarefas() {
    let lista = document.getElementById("listaTarefas");

    // Remover todos os elementos filhos da lista.
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    // Lista as tarefas usando o método da classe Tarefas.
    tarefas.listarTarefas();

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
function removerItens() {
    let lista = document.getElementById("listaTarefas");
    let caixaDeSelecaoEntradas = lista.querySelectorAll("input[type='checkbox']:checked");

    let indicesSelecionados = [];
    for (let i = 0; i < caixaDeSelecaoEntradas.length; i++) {
        let entrada = caixaDeSelecaoEntradas[i];
        // O método push() é utilizado para adicionar um novo elemento ao final da lista.
        indicesSelecionados.push(entrada.value);
    }
    // Remove as tarefas selecionadas.
    tarefas.removerTarefa(indicesSelecionados);
    
    // Atualiza a lista.
    listarTarefas();
}

/**
 * Inicializar a aplicação,
 * cria uma nova instância de Tarefas e configura os botões.
 **/ 
function iniciarAplicacao() {
    tarefas = new Tarefas(); // Cria uma instância de Tarefas.

    // Obtém referências aos botões de adicionar, listar e remover itens.
    let btnAdicionar = document.getElementById("btnAdicionar");
    let btnListar = document.getElementById("btnListar");
    let btnRemoverItens = document.getElementById("btnRemoverItens"); 

    // Adiciona eventos de clique aos botões.
    btnAdicionar.addEventListener("click", adicionarTarefa);
    btnListar.addEventListener("click", listarTarefas);
    btnRemoverItens.addEventListener("click", removerItens); 

    //Desabilita os botões de Listar e Remover Itens no início.
    btnRemoverItens.disabled = true;
    btnListar.disabled = true;
}
// Aguarda o carregamento completo do DOM antes de iniciar a aplicação.
document.addEventListener("DOMContentLoaded", iniciarAplicacao);
