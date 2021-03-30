function calcReajusteSalarial(lista, funcNome){
    let result = lista.filter(e => e.nome == funcNome).map(reajuste);

    return result.toString();
};

const reajuste = e => {
    if(e.salario <= 1100){
        let salarioComReajuste = e.salario + (e.salario * 20/100);

        return `O funcionário ${e.nome} teve um reajuste de 20% no salário: salário ${e.salario.toFixed(2).toString().replace(".", ",")} | salário com Reajuste ${salarioComReajuste.toFixed(2).toString().replace(".", ",")}.`;

    }else if(e.salario > 1100 && e.salario <= 1500){
        let salarioComReajuste = e.salario + (e.salario * 10/100);

        return `O funcionário ${e.nome} teve um reajuste de 10% no salário: salário ${e.salario.toFixed(2).toString().replace(".", ",")} | salário com Reajuste ${salarioComReajuste.toFixed(2).toString().replace(".", ",")}.`;

    }else{
        let salarioComReajuste = e.salario + (e.salario * 5/100);

        return `O funcionário ${e.nome} teve um reajuste de 5% no salário: salário ${e.salario.toFixed(2).toString().replace(".", ",")} | salário com Reajuste R$${salarioComReajuste.toFixed(2).toString().replace(".", ",")}.`;
    };
};

const funcionarios = [
    {nome: 'Ana', funcao: 'Chefe-RH', salario: 1653.36},
    {nome: 'Carlos', funcao: 'Administração', salario: 1462.00},
    {nome: 'Janaina', funcao: 'Reposição', salario: 1462.00},
    {nome: 'Gabriel', funcao: 'Assistente-RH', salario: 1325.20},
    {nome: 'Carina', funcao: 'Assistente-ADM', salario: 1205.36}
];

console.log(calcReajusteSalarial(funcionarios, 'Carina'));