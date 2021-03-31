function BuscaFuncionário(nome, sobrenome, metodo, lista){
    let funcionario = lista.reduce()
};


const funcionarios = [
    {
        nome:'Carlos',
        sobrenome:'Silva Santos',
        funcao: 'Produção',
        salarioBruto: 1360.68,
        salarioHora: 6.5,
        horasTrabalhadas: 176,
        horasExtras: 4,

        salarioLiquido(){
            let salarioComDesconto = 0;

            if(this.salarioBruto <= 900){

                salarioComDesconto = this.salarioBruto;

            }else if(this.salarioBruto > 900 && this.salarioBruto <= 1500){

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 5/100);

            }else if(this.salarioBruto > 1500 && this.salarioBruto <= 2500){

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 10/100);

            }else {

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 20/100);

            }

            salarioComDesconto -= (this.salarioBruto * 3/100);

            return `O Salário liquido do funcionário ${this.nome} é: R$${salarioComDesconto.toFixed(2).toString().replace(".", ",")}`;
        },
    
        calcHorasExtras(){
           return this.horasExtras > 0 ? (this.salarioHora + this.salarioHora / 2) * this.horasExtras : `O Funcionário ${this.nome} Não fez horas extras este mês!`;
        }
        
    },

    {
        nome:'Amanda',
        sobrenome:'Sales Almeida',
        funcao: 'RH',
        salarioBruto: 2500.50,
        salarioHora: 8.52,
        horasTrabalhadas: 176,
        horasExtras: 0,

        salarioLiquido(){
            let salarioComDesconto = 0;

            if(this.salarioBruto <= 900){

                salarioComDesconto = this.salarioBruto;

            }else if(this.salarioBruto > 900 && this.salarioBruto <= 1500){

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 5/100);

            }else if(this.salarioBruto > 1500 && this.salarioBruto <= 2500){

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 10/100);

            }else {

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 20/100);

            }

            salarioComDesconto < 900? salarioComDesconto : salarioComDesconto -= (this.salarioBruto * 3/100) ;

            return `O Salário liquido do funcionário ${this.nome} é: R$${salarioComDesconto.toFixed(2).toString().replace(".", ",")}`;
        },
    
        calcHorasExtras(){
           return this.horasExtras > 0 ? (this.salarioHora + this.salarioHora / 2) * this.horasExtras : `O Funcionário ${this.nome} Não fez horas extras este mês!`;
        }
    },

    {
        nome:'Pedro',
        sobrenome:'Rodrigues Silva',
        funcao: 'Jovem Aprendiz',
        salarioBruto: 560.00,
        salarioHora: 5,
        horasTrabalhadas: 92,

        salarioLiquido(){
            let salarioComDesconto = 0;

            if(this.salarioBruto <= 900){

                salarioComDesconto = this.salarioBruto;

            }else if(this.salarioBruto > 900 && this.salarioBruto <= 1500){

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 5/100);

            }else if(this.salarioBruto > 1500 && this.salarioBruto <= 2500){

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 10/100);

            }else {

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 20/100);

            }

            salarioComDesconto < 900? salarioComDesconto : salarioComDesconto -= (this.salarioBruto * 3/100) ;

            return `O Salário liquido do funcionário ${this.nome} é: R$${salarioComDesconto.toFixed(2).toString().replace(".", ",")}`;
        },
    },

    {
        nome:'Jonas',
        sobrenome:'Fernandes Gomes',
        funcao: 'Supervisor de Produção',
        salarioBruto: 3855.62,
        salarioHora: 16.2,
        horasTrabalhadas: 176,
        horasExtras: 0,

        salarioLiquido(){
            let salarioComDesconto = 0;

            if(this.salarioBruto <= 900){

                salarioComDesconto = this.salarioBruto;

            }else if(this.salarioBruto > 900 && this.salarioBruto <= 1500){

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 5/100);

            }else if(this.salarioBruto > 1500 && this.salarioBruto <= 2500){

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 10/100);

            }else {

                salarioComDesconto = this.salarioBruto - (this.salarioBruto * 20/100);

            }

            salarioComDesconto < 900? salarioComDesconto : salarioComDesconto -= (this.salarioBruto * 3/100) ;

            return `O Salário liquido do funcionário ${this.nome} é: R$${salarioComDesconto.toFixed(2).toString().replace(".", ",")}`;
        },

        calcHorasExtras(){
            let valorHoraExtra = 0;
        
            if(this.horasExtras > 0){
                valorHoraExtra = (this.salarioHora + (this.salarioHora * 50/100)) * this.horasExtras;
        
                return this.salarioBruto + valorHoraExtra;
            }else {
                return `O Funcionário ${this.nome} Não fez horas extras este mês`;  
            }      
        }
    }
];

console.log(funcionarios[3].salarioLiquido())