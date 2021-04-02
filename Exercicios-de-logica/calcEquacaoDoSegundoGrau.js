function EquacaoDoSegundoGrau(a, b, c){
    let Delta = 0;
    let raiz = [];
    

    if(a > 0 || a < 0){
        Delta = (b)**2 - 4 * a * c;

        if(Delta < 0){
            return`A equação não possui Raiz Real: Delta:${Delta}`;

        }else if(Delta == 0){
            raiz.push((-b + Math.sqrt(Delta)) / 2*a);

            return `Resultado: Delta:${Delta}, x1:${raiz[0]}, x2:${raiz[0]}.`

        }else if(Delta > 0){
            raiz.push((-b + Math.sqrt(Delta)) / 2*a);
            raiz.push((-b - Math.sqrt(Delta)) / 2*a);

            return `Resultado: Delta:${Delta}, x1:${raiz[0]}, x2:${raiz[1]}.`
        };
        
        
    }else return `Não é uma equação do segundo grau!`

   
};

console.log(EquacaoDoSegundoGrau(1, -2, 1))