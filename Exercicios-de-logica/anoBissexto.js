function anoBissexto(ano){
    let result = new Date(ano, 1, 29).getMonth() == 1;

    return result == true ? `O ano ${ano} é bissexto!`: `O ano ${ano} não é bissexto!`;
};

console.log(anoBissexto(2020));