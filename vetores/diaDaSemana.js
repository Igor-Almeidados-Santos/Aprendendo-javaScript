function diaCorrespondente(numero){
    const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    
    return diasDaSemana[numero - 1];
};

console.log(diaCorrespondente());