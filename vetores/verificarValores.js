function verificarValores(array, valor){
    const newArray = array.filter(e => {
        if(e == valor) return e
    });

    console.log(`No array existem ${newArray.length} valores iguais a '${valor}'.`);
};

const numberArray = [1, 2, 3, 4, 8, 8, 3, 8 , 2, 8, 8, 8];
const stringArray = ['a', 'a', 'b', 'c', 'a', 'a', 'a'];
const booleanArray = [true, false, true, true];

verificarValores(booleanArray, true);