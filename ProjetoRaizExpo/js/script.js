function raiz() {
    let numero = parseInt(document.getElementById("inputNumeros").value);

    let resultado = Math.sqrt(numero);
    document.write(resultado);
}

function exponencial() {
    let numero = parseInt(document.getElementById("inputNumeros").value);

    let resultado = Math.pow(numero);
    document.write(resultado);
}