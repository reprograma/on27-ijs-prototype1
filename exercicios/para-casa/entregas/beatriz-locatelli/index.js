const { Gatos } = require('./classes/Gatos');
const { Cachorros } = require('./classes/Cachorros');
const { AnimaisExoticos } = require('./classes/AnimaisExoticos');

const gato1 = new Gatos('Pipoca', '18', 'branco', true);
gato1.historico.vacinar('raiva');
gato1.historico.vacinar('v10');
gato1.historico.consultar('25/02/2024');
gato1.historico.consultar('01/03/2024');
gato1.historico.realizarProcedimento('ultrasom', 'dor')
gato1.historico.realizarProcedimento('exame de sangue', 'rotina')
gato1.miar();

const cachorro1 = new Cachorros('Paçoca', '30', 'caramelo', false, 'shih tzu');
cachorro1.historico.vacinar('sinomose');
cachorro1.historico.consultar('30/04/2024');
cachorro1.historico.consultar('05/05/2024');
cachorro1.historico.realizarProcedimento('exame de fezes', 'verme')
cachorro1.latir();

const hamster1 = new AnimaisExoticos('Hantaro', '2', 'cinza', 'Hamster');
hamster1.historico.vacinar('v10');
hamster1.historico.consultar('06/06/2024');
hamster1.historico.realizarProcedimento('cerrar os dentes', 'dor')
console.log(hamster1.ehAdulto());




