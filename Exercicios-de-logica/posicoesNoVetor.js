function posicaoDoVetor(p1, p2){
    return [vetor[p1 - 1], vetor[p2 - 1]];
};

const vetor = [1, 2, 'a', 'Neiva', 5.87, true, [5, 8.9], false];

console.log(posicaoDoVetor(8, 7));