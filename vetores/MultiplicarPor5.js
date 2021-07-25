function multiplicarPor5(...vetor){
    let multiplicacao = vetor.map(e => e * 5);

    return vetor.forEach((e, i) => {
        console.log(`${e} | ${multiplicacao[i]}`);
    });
};

console.log(multiplicarPor5(1, 2, 8, 4, 100, 5, 63, 89, 54, 78, 56, 23));