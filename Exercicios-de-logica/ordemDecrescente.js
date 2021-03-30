function OrdemDecrescente(...params){
    return params.sort((a, b) => a - b).reverse();
};

console.log(OrdemDecrescente(2, 10, 1, -3, 89, 125, -125, 7));