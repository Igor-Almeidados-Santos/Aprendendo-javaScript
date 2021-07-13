function ajustarArray(array){
    const arrayDeZeros = [];
    const newArray = array.filter(e => {
        if(e != 0){
            return e;
        }else{
            arrayDeZeros.push(e);
        };
    });

    console.log(newArray.concat(arrayDeZeros));
};

const numberArray = [1, 0, 2, 0, 0, 0, 0, 3, 0, 7, 5, 4, 8, 0, 0, 4, 5, 9, 10, 100, 0, 0, 50, 56, 83, 65, 98, 78, 0];

ajustarArray(numberArray);