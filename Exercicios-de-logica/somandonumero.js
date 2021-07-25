function somarNumeros(vetor){
    const soma = vetor.reduce((e, a) => e + a);
    console.log(soma);
    vetor.forEach(element => {
        console.log(element)
    });
};

const vetor = [1, 3, 6,5,6,9];

somarNumeros(vetor);