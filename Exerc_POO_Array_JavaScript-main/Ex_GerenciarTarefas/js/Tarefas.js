// A classe Tarefas representa uma lista de Tarefas
export class Tarefas {
    #listaTarefas;

    // Construtor
    constructor() {
        this.#listaTarefas = [];
    }

    // Adiciona uma nova tarefa à lista
    adicionarTarefa(tarefa) {
        this.#listaTarefas.push(tarefa);

        // Limpa os campos de entrada após a adicionar a tarefa.
        document.getElementById("criticidadeInput").value = "";
        document.getElementById("descricaoInput").value = "";
        document.getElementById("prazoInput").value = "";
    }

    //Remove tarefas da lista com base nos índices.
    removerTarefa(indicesSelecionados) {
        let listaTarefas = this.#listaTarefas;

        /**
         * A linha indicesSelecionados.reverse(); 
         * está sendo usada para reverter a ordem dos índices armazenados no array indicesSelecionados. 
         * Isso é feito para garantir que as tarefas sejam removidas na ordem inversa da seleção 
         * do usuário, pois quando removemos um elemento de um array, os índices dos elementos 
         * subsequentes são atualizados e isso poderia afetar a remoção correta das tarefas.
         */
        indicesSelecionados.reverse();

        /**    
        * O método splice() está sendo usado para remover um 
        * elemento específico do array listaTarefas.
        */
        for (let i of indicesSelecionados) {
            listaTarefas.splice(i, 1);
        }
    }

    //exibe a lista das tarefas em tela.
    listarTarefas() {
        let listaDeTarefas = document.getElementById("listaTarefas");

        /*
        *  Remove os elementos filhos da lista antes de listar novamente.
        * Isso é feito para garantir que a lista seja recriada e atualizada 
        * com os dados mais recentes.
        */
        while (listaDeTarefas.firstChild) {
            listaDeTarefas.removeChild(listaDeTarefas.firstChild);
        }

        // Cria elementos HTML para cada tarefa e os adiciona na lista.
        for (let i = 0; i < this.#listaTarefas.length; i++) {
            let tarefa = this.#listaTarefas[i];
            let itemTarefa = document.createElement("li");
            let caixaDeSelecaoEntrada = document.createElement("input");

            caixaDeSelecaoEntrada.type = "checkbox";
            caixaDeSelecaoEntrada.value = i;

            /**
             *  Ao usar o método appendChild, estamos dizendo ao navegador 
             * para adicionar o elemento da caixa de seleção como um filho 
             * do elemento da tarefa (<li>). 
             */
            itemTarefa.appendChild(caixaDeSelecaoEntrada);

            let tarefaTexto = document.createTextNode(`Tarefa ${i + 1}: ${tarefa.toString()}`);
            itemTarefa.appendChild(tarefaTexto);

            listaDeTarefas.appendChild(itemTarefa);
        }
    }

}
