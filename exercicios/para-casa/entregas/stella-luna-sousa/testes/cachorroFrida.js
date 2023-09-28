const {Cachorro} = require('../Animais');

let frida = new Cachorro("Frida", 84, "Branco e preto", true, "Border Collie");

frida.vacinar("v8");
frida.vacinar("v10");
frida.consultar("12/01/2023");
frida.consultar("27/09/2023");
frida.consultar("25/05/2023");
frida.realizarProcedimento("ultrassom", "dores");

console.log("");

console.log(`Nome: ${frida.nome}`);
console.log (`Idade(meses): ${frida.idade}`)
console.log(`Cor: ${frida.cor}`)
console.log(`Castrado: ${frida.castrado}`)
console.log(`Raça: ${frida.raca}`)
console.log(frida.historicoMedico);

console.log("");

frida.latir();
