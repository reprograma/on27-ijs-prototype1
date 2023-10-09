function realizarProcedimentos(procedimento) {
    this.historico.procedimentos.push(procedimento)
}

function vacinar(vacina) {
    this.historico.vacinas.push(vacina)
}

function consultar(data) {
    this.historico.consultas.unshift(data)
}

module.exports = { consultar, vacinar, realizarProcedimentos }