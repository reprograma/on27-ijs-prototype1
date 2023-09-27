function HistoricoMedico() {
    this.vacinas = [];
    this.consultas = [];
    this.procedimentos = [];

    this.vacinar = (vacina) => {
        this.vacinas.push(vacina);
        console.log(`Vacinas aplicadas: [${this.vacinas}].`)
    }
    this.consultar = (consulta) => {
        this.consultas.push(consulta);
        this.consultas.reverse(consulta)
        console.log(`Histórico de consultas: [${this.consultas}].`)
    }
    this.realizarProcedimento = (tipo, motivo) => {
        let procedimento = {
            tipo: tipo,
            motivo: motivo,
        }
        this.procedimentos.push(procedimento)
        console.log(`Procedimentos - Tipo: ${procedimento.tipo}, Motivo:${procedimento.motivo}.`)
    }

}

module.exports = { HistoricoMedico }