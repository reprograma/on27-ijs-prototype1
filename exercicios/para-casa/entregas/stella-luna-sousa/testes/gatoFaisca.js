const {Gato} = require('../Animais');

let faisca = new Gato("Faísca", 10, "Cinza", true);

faisca.vacinar("v8");
faisca.vacinar("v10");
faisca.consultar("12/01/2023");
faisca.consultar("27/09/2023");
faisca.consultar("25/05/2023");
faisca.realizarProcedimento("ultrassom", "dores");

console.log("");

console.log(`Nome: ${faisca.nome}`);
console.log (`Idade(meses): ${faisca.idade}`)
console.log(`Cor: ${faisca.cor}`)
console.log(`Castrado: ${faisca.castrado}`)
console.log(faisca.historicoMedico);

console.log("");

faisca.miar();
