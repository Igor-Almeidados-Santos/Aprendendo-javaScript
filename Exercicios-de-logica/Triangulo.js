function ClassificarTriangulo(a1, a2, a3){
    let classificacao = 0;

    if((a1 + a2 > a3) && (a2 + a3 > a1) && (a1 + a3 > a2)){
        if(a1 == a2 && a1 == a3){
            classificacao = `É um triângulo Equilátero!`;
        }else  if(a1 == a2 || a1 == a3 || a2 == a3){
            classificacao = `É um triângulo Isóceles!`;
        }else classificacao = `É um triângulo Escaleno!`
    }else classificacao = `Não pode formar um triângulo!`;

    return classificacao;
};

console.log(ClassificarTriangulo(160, 16, 16));