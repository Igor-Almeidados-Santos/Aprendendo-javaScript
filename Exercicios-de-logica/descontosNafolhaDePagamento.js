function BuscaFuncionário(nome, sobrenome, lista){
    let funcionario = lista.filter(e => e.nome == nome && e.sobrenome == sobrenome);

    let salarioLiquido = 0;

    funcionario.length == 0 ? funcionario = `funcionário não encontrado!` : salarioLiquido = calcSalarioLiquido(funcionario);

    return typeof salarioLiquido == 'string' ? salarioLiquido : funcionario;
};

function calcSalarioLiquido(funcionario){
    let salarioComDesconto = 0;

    if(funcionario[0].salarioBruto <= 900){

        salarioComDesconto = funcionario[0].salarioBruto;

    }else if(funcionario[0].salarioBruto > 900 && funcionario[0].salarioBruto <= 1500){

        salarioComDesconto = funcionario[0].salarioBruto - (funcionario[0].salarioBruto * 5/100);

    }else if(funcionario[0].salarioBruto > 1500 && funcionario[0].salarioBruto <= 2500){

        salarioComDesconto = funcionario[0].salarioBruto - (funcionario[0].salarioBruto * 10/100);

    }else {

        salarioComDesconto = funcionario[0].salarioBruto - (funcionario[0].salarioBruto * 20/100);

    }

    salarioComDesconto -= (funcionario[0].salarioBruto * 3/100);

    salarioComDesconto += calcHorasExtras(funcionario);

    return `O Salário liquido do funcionário ${funcionario[0].nome} é: R$${salarioComDesconto.toFixed(2).toString().replace(".", ",")}`;
};

const calcHorasExtras = funcionario => {
    return (funcionario[0].salarioHora + funcionario[0].salarioHora / 2) * funcionario[0].horasExtras; 
}

const funcionarios = [
    {
        nome:'Carlos',
        sobrenome:'Silva Santos',
        funcao: 'Produção',
        salarioBruto: 1360.68,
        salarioHora: 6.5,
        horasTrabalhadas: 176,
        horasExtras: 4,
    },

    {
        nome:'Amanda',
        sobrenome:'Sales Almeida',
        funcao: 'RH',
        salarioBruto: 2500.50,
        salarioHora: 8.52,
        horasTrabalhadas: 176,
        horasExtras: 0,
    },

    {
        nome:'Pedro',
        sobrenome:'Rodrigues Silva',
        funcao: 'Jovem Aprendiz',
        salarioBruto: 560.00,
        salarioHora: 5,
        horasTrabalhadas: 92,
    },

    {
        nome:'Jonas',
        sobrenome:'Fernandes Gomes',
        funcao: 'Supervisor de Produção',
        salarioBruto: 3855.62,
        salarioHora: 16.2,
        horasTrabalhadas: 176,
        horasExtras: 0,
    }
];

console.log(BuscaFuncionário('Carlos', 'Silva Santos', funcionarios));