function fibonacci(){
    let termo = parseInt(document.getElementById("numero").value);
    let resposta = document.getElementById('resposta');
    let penultimo = 0, ultimo = 1;
    let numero;

    if(termo <= 2)
        numero = termo - 1;
    else
        for(let count = 3; count <= termo; count++){
    numero = ultimo + penultimo;
    penultimo = ultimo;
    ultimo = numero;
    }

    resposta.innerHTML = numero;
}

