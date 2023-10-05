// A classe Tarefas representa uma lista de Tarefas
export class Produtos {
    #listaDosProdutos;

    // Construtor
    constructor() {
        this.#listaDosProdutos = [];
    }

    // Adiciona uma nova tarefa à lista
    adicionarProduto(produto) {
        this.#listaDosProdutos.push(produto);

        // Limpa os campos de entrada após a adicionar a tarefa.
        document.getElementById("nomeProdutoInput").value = "";
        document.getElementById("descricaoProdutoInput").value = "";
        document.getElementById("idDoProdutoInput").value = "";
    }

    //Remove tarefas da lista com base nos índices.
    removerProduto(indicesSelecionados) {
        let listaDosProdutos = this.#listaDosProdutos;

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
            listaDosProdutos.splice(i, 1);
        }
    }

    //exibe a lista das tarefas em tela.
    exibirListaProdutos() {
        let exibeLista = document.getElementById("listaProdutos");

        /*
        *  Remove os elementos filhos da lista antes de listar novamente.
        * Isso é feito para garantir que a lista seja recriada e atualizada 
        * com os dados mais recentes.
        */
        while (exibeLista.firstChild) {
            exibeLista.removeChild(exibeLista.firstChild);
        }

        // Cria elementos HTML para cada tarefa e os adiciona na lista.
        for (let i = 0; i < this.#listaDosProdutos.length; i++) {
            let produto = this.#listaDosProdutos[i];
            let itemProduto = document.createElement("li");
            let caixaDeSelecaoEntrada = document.createElement("input");

            caixaDeSelecaoEntrada.type = "checkbox";
            caixaDeSelecaoEntrada.value = i;

            /**
             *  Ao usar o método appendChild, estamos dizendo ao navegador 
             * para adicionar o elemento da caixa de seleção como um filho 
             * do elemento da tarefa (<li>). 
             */
            itemProduto.appendChild(caixaDeSelecaoEntrada);

            let produtoTexto = document.createTextNode(`Tarefa ${i + 1}: ${produto.toString()}`);
            itemProduto.appendChild(produtoTexto);

            listaDeProdutos.appendChild(itemProduto);
        }
    }

}
