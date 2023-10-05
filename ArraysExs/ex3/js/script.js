function popShift(){
    let numeros = [1, 2, 3, 4, 5, 6];
    numeros.pop();
    numeros.shift();
    return(numeros);
}
console.log(popShift());