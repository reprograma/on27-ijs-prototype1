const {AnimalExotico} = require('../Animais');

let chico = new AnimalExotico("Chico", 2, "Branco", "Hamster");

chico.vacinar("v8");
chico.vacinar("v10");
chico.consultar("12/01/2023");
chico.consultar("27/09/2023");
chico.consultar("25/05/2023");
chico.realizarProcedimento("ultrassom", "dores");

console.log("");

console.log(`Nome: ${chico.nome}`);
console.log (`Idade(meses): ${chico.idade}`);
console.log(`Cor: ${chico.cor}`);
console.log(`Espécie: ${chico.especie}`);
console.log(`Adulto: ${chico.adulto}`);
console.log(chico.historicoMedico);
