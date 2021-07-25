function preencherComImpares(){
    const impares = [];

    for(let i = 0; i < 20; i++){
        if(i%2 != 0){
            impares.push(i);
        };
    };

    return impares;
};

console.log(preencherComImpares());