function imparPar(...vetor){
    let impar = [];
    let par = [];

    vetor.map(e => {
        if(e%2 === 0){
            par.push(e);
        }else {
            impar.push(e);
        };
    });

    impar.sort((a, b) => a - b);
    par.sort((a, b) => a - b);

    console.log(`Impares: ${impar} | Pares: ${par}`);
};

imparPar(1, 5, 9, 2, 6, 7, 12, 45, 66, 78, 98, 1025, 35);