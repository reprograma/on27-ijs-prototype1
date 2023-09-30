const { Gato, Cachorro, AnimalExotico, HistoricoMedico } = require('./animal.js'); 

// meus testes das instâncias
const meuGato = new Gato('Pipoca', 18, 'branco', true);
console.log(meuGato);
const meuCachorro = new Cachorro('Rex', 36, 'marrom', false, 'Labrador');
console.log(meuCachorro);
const meuAnimalExotico = new AnimalExotico('Hamster Bob', 2, 'cinza', 'Hamster', false);
console.log(meuAnimalExotico);

// teste dos métodos
meuGato.miar();
meuCachorro.latir();
console.log(meuAnimalExotico.ehAdulto());

// teste do Histórico Médico

// novas consultas, vacinas e procedimentos para cada animal
meuGato.historico.consultar('2023-09-21');
meuGato.historico.consultar('2023-09-20');
meuGato.historico.consultar('2023-10-20'); // teste da organização das datas
meuGato.historico.vacinar('Raiva');
meuGato.historico.vacinar('V8');

meuCachorro.historico.consultar('2023-08-15');
meuCachorro.historico.vacinar('V8');

meuAnimalExotico.historico.consultar('2023-07-10');
meuAnimalExotico.historico.vacinar('Vacina X');

meuGato.historico.procedimento('ultrassom', 'dores');
meuCachorro.historico.procedimento('raio-x', 'fratura');
meuAnimalExotico.historico.procedimento('exame de sangue', 'check-up');

// Exiba o histórico médico de cada animal
console.log('Histórico do Gato:', meuGato.historico);
console.log('Histórico do Cachorro:', meuCachorro.historico);
console.log('Histórico do Animal Exótico:', meuAnimalExotico.historico);
