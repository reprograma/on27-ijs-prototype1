const { format } = require("date-fns");

function imprimeVacina(nome, vacina) {
  console.log(`Parabéns, ${nome} tomou a vacina ${vacina}`);
}

function imprimeConsultas(nome, consultas) {
  console.log(
    `Lista de consultas de ${nome}:\n- ${consultas
      .map((consulta) => format(consulta, "dd/MM/yyyy"))
      .join("\n- ")} `
  );
}

function imprimeProcedimento(nome, tipo, motivo) {
  console.log(`${nome} passou pelo procedimento: ${tipo} - motivo: ${motivo}`);
}

module.exports = { imprimeVacina, imprimeConsultas, imprimeProcedimento };
