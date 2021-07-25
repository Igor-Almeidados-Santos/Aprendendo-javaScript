function inverterPosicoes(vetor){
    let vetor1 = [];
    let vetor2 = [];

    
    for(let i = 0; i < vetor.length; i++){
        if(i < (vetor.length / 2)){
            vetor1.push(vetor[i]);
        }else vetor2.push(vetor[i]);
    };

    return vetor2.concat(vetor1);
};

const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

console.log(inverterPosicoes(vetor));