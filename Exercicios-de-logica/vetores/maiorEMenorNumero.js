function menorEMaiorNumero(...params){
    let result = params.sort();

    return `O maior número é ${result[result.length - 1]} e o menor é ${result[0]}.`;
};

console.log(menorEMaiorNumero(2, 8, 7, 1, 9));