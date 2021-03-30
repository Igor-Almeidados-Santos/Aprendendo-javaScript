function maiorNumero(...params){
    return params.reduce((e, a) => e > a ? e : a);
};

console.log(maiorNumero(10, 2, 3));