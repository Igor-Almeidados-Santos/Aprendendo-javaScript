function NovoVetor(vetor1, vetor2){
    let posicao = 1;
    const novoVetor = vetor1.map(e => e);

    vetor2.forEach(e => {
        novoVetor.splice(posicao, 0, e);
        posicao += 2;

        return novoVetor
    });

    console.log(vetor1, vetor2, novoVetor);
}

const vetor1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23];
const vetor2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22];

NovoVetor(vetor1, vetor2);