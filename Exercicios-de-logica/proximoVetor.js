function proximoVetor(array){
    let proximo = 0;

    for(let i in array){
        if(i == 0){
            console.log(array[i]);
            proximo = array[i];
        }else if(i > 0){
            if(array[proximo] <= 9){
                console.log(array[proximo]);
                proximo = array[proximo];
            }
        };
    };
};

const numeros = [3, 1, 4, 8, 7, 9, 2, 5, 6];

proximoVetor(numeros);