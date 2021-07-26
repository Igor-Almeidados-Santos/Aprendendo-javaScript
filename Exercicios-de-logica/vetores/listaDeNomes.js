function listaDeNomes(...list){
    return list.sort((a, b) => a.localeCompare(b));//Locale Compare, compara strings acentuadas.
};

console.log(listaDeNomes('Pedro', 'Thiago', 'João', 'Jonas', 'Maria', 'Albeto'));