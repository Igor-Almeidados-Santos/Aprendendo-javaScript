function calcularMedia(notas, tipo) {
    let tipoMedia = tipo.toUpperCase();

    if(tipoMedia == 'A'){
        mediaFinal = notas.reduce(mediaAritmetica) / notas.length;
    }else if(tipoMedia == 'P'){
        mediaFinal = notas.map(mediaPonderada).reduce((a, e) => a + e) / (5 + 3 +2);
    }

    return `A média final do aluno é igual á: ${mediaFinal.toFixed(1) - 0.1}. `;
}

const mediaAritmetica = (e, a) => e + a;

const mediaPonderada = (e, i) => {
    if(i == 0){
        return e + 5;
    }else if(i == 2){
        return e + 3;
    }else {
        return e + 2;
    };
}

const notas = [5.3, 5.9, 8.3];

console.log(calcularMedia(notas, 'p'));