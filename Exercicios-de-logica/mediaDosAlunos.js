function Media(array){
    let mediaFinal = array.sort((a, b) => (a.nome > b.nome) ? 1 : (b.nome > a.nome) ? -1 : 0).map(e => {
        let media = e.notas.reduce(calcMedia) / 3;

        return `Aluno ${e.nome} ficou com média final ${media.toFixed(1)}`;
    });

    return mediaFinal;
};


const alunos = [
    {nome: 'Carlos', notas:[8.5, 9.4, 9.9]},
    {nome: 'Amanda', notas:[9.8, 9.9, 10.0]},
    {nome: 'Pedro', notas:[5.2, 3.4, 5.1]},
    {nome: 'João', notas:[5.8, 6.0, 6.3]},
    {nome: 'Matias', notas:[7.5, 6.4, 7.6]},
    {nome: 'Carla', notas:[6.9, 6.4, 5.0]},
    {nome: 'Mariane', notas:[7.2, 8.1, 7.5]},
    {nome: 'Jessica', notas:[8.7, 8.3, 7.5]},
    {nome: 'Matheus', notas:[7.2, 6.2, 7.6]},
    {nome: 'Zune', notas:[2.1, 3.4, 2.5]}
];

const calcMedia = (a, e) => a + e;

console.log(Media(alunos));