function calcularMatriz(){
    let tamanhoDaMatriz = document.getElementById("inputTamMatriz").value;
    console.log(parseInt(typeof("tamanhoDaMatriz")));
    let resultado;
    for(let i = 0; i < tamanhoDaMatriz; i++){
        document.getElementById("saida").innerHTML += "<br>";
        for(let j = 0; j < tamanhoDaMatriz; j++){
            resultado = (i+j)%2;
            if(resultado == 0){
                document.getElementById("saida").innerText += 0;
            }
            else{
                document.getElementById("saida").innerText += 1;
            }
        }        
    }
}
    