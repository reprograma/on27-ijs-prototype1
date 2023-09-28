function Vacinar(vacina) {
    if(!vacina) return console.log(`ERRO: Insira uma vacina`);
    
    this.historicoMedico.vacinas.push(vacina);
    console.log(`${this.nome} recebeu a vacina ${vacina}.`)
}

function Consultar(dataConsulta) {
    if(DataValida(dataConsulta) === false) return console.log(`ERRO: Insira uma data válida para a consulta, ela deve seguir o formato dd/mm/aaaa.`);

    this.historicoMedico.consultas.push(dataConsulta);
    console.log(`${this.nome} realizou uma consulta em ${dataConsulta}.`)

    //reordenar as consultas por ordem cronologica reversa
    this.historicoMedico.consultas.sort((data1, data2) => ConverterData(data2) - ConverterData(data1));
}

function RealizarProcedimento(tipo, motivo) {
    if(!tipo || !motivo) return console.log(`ERRO: Insira um tipo e um motivo para o procedimento.`);

    const procedimento = {
        tipo: tipo,
        motivo: motivo
    }
    this.historicoMedico.procedimentos.push(procedimento);
    console.log(`${this.nome} realizou o procedimento "${procedimento.tipo}" com o motivo "${procedimento.motivo}".`);
}

//Checa se a data inserida está no formato dd/mm/aaaa e se é uma data válida
function DataValida(data) {
    const padraoData = /^\d{2}\/\d{2}\/\d{4}$/;
    if(padraoData.test(data) === false) return false;

    const partesData = data.split('/'); 
    const dia = parseInt(partesData[0], 10);
    const mes = parseInt(partesData[1], 10) - 1;
    const ano = parseInt(partesData[2], 10);

    data = new Date(ano, mes, dia);
    return data.getDate() === dia && data.getMonth() === mes && data.getFullYear() === ano;
}

//Converte datas no formato dd/mm/aaaa pro formato do objeto Date
function ConverterData(data) {
    const partesData = data.split('/');
    return new Date(partesData[2], partesData[1] - 1, partesData[0]);
}



function HistoricoMedico() {
    this.consultas = [];
    this.vacinas = [];
    this.procedimentos = [];
}

module.exports = {Vacinar, Consultar, RealizarProcedimento, HistoricoMedico};