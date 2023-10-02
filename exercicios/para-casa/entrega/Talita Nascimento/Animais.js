function consultar(dataDaConsulta) {
    let consultasRealizadas = this.historicoMedico.datasDasConsultas;

    consultasRealizadas.unshift(dataDaConsulta);
    console.log(`Data ${dataDaConsulta} adicionada ao histórico!`);
}

function vacinar(nomeDaVacina) {
    let vacinasRecebidas = this.historicoMedico.nomesDasVacinas;

    //verificar se o parametro de vacinas está vazio (undefined)
    if (nomeDaVacina == undefined) {
        console.log("Não há histórico de vacinas.");
    } else {
        vacinasRecebidas.push(nomeDaVacina);
        console.log(`Vacina "${nomeDaVacina}" adicionada ao histórico!\nVacinas recebidas: ${vacinasRecebidas}`);
    }
}

function realizarProcedimento(tipoDeProcedimento, motivoDoProcedimento) {
    let procedimentosSubmetidos = this.historicoMedico.procedimentosSubmetidos;

    procedimentosSubmetidos.push(tipoDeProcedimento, motivoDoProcedimento);
    console.log(`Tipo de procedimento realizado: ${tipoDeProcedimento}. Motivo do procedimento: ${motivoDoProcedimento}.`);
}

module.exports = { consultar, vacinar, realizarProcedimento };