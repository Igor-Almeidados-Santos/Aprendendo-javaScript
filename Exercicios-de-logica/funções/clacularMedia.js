function calcularMedia(notas, tipo) {
    let mediaFinal ;
    let tipo = tipo.toUppercase();

    if(tipo === 'A'){
        mediaFinal = (notas.reduce((e, a) => e + a)) / notas.lenght;
    }else if(tipo === 'P'){
        
    }
}