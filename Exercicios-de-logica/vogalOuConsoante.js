function VogalOuConsoante(letra){
    let valor = letra.toLowerCase();
    let vogal = ['a', 'e', 'i', 'o', 'u'];
 
    let result = vogal.reduce(e => {
        if(e === valor) return e ;
    });
 
    return result == undefined ? `A letra ${letra} é uma consoante.`: `A letra ${letra} é uma vogal.`
 };
 
 console.log(VogalOuConsoante('a'));