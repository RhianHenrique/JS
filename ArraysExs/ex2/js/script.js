function exibirNumeros(){
    let numerosLista1 = [1, 2, 3];
    let numerosLista2 = [4, 5, 6];
    let numerosLigados =  numerosLista1.concat(numerosLista2);
    numerosLigados.push("...BOOOM");
    return(numerosLigados)
}
console.log(exibirNumeros());