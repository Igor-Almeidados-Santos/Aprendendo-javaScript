function preencherComImpar(){
    const arrayDeImpares = [];

    for(let i = 0; i<20; i++){
        if(i%2 != 0){
            arrayDeImpares.push(i)
        };
    };

    console.log(arrayDeImpares);
};

preencherComImpar();