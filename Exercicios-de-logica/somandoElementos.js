function somarElementos(x, y, array){
   return (array.filter((e, p) => p == x-1 || p == y-1).reduce((e, a) => e + a));
    
}

console.log(somarElementos(10, 1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]));