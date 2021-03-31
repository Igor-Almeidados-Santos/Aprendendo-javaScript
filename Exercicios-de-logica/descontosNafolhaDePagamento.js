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
        
    },

    {
        nome:'Amanda',
        sobrenome:'Sales Almeida',
        funcao: 'RH',
        salarioBruto: 2500.50,
        salarioHora: 8.52,
        horasTrabalhadas: 176,
        horasExtras: 0,

        calcHorasExtras(){
            let valorHoraExtra = 0;
        
            if(this.horasExtras > 0){
                valorHoraExtra = (this.salarioHora + (this.salarioHora * 50/100)) * this.horasExtras;
        
                return this.salarioBruto + valorHoraExtra;
            }else {
                return `O Funcionário ${this.nome} Não fez horas extras este mês`;  
            }      
        }
    },

    {
        nome:'Pedro',
        sobrenome:'Rodrigues Silva',
        funcao: 'Jovem Aprendiz',
        salarioBruto: 560.00,
        salarioHora: 5,
        horasTrabalhadas: 92
    },

    {
        nome:'Jonas',
        sobrenome:'Fernandes Gomes',
        funcao: 'Supervisor de Produção',
        salarioBruto: 3855.62,
        salarioHora: 16.2,
        horasTrabalhadas: 176,
        horasExtras: 0,

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

console.log(funcionarios[0].calcHorasExtras())