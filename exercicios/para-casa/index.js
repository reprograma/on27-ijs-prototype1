const { Gato, Cachorro, AnimalExotico } = require('./resolucao');

function realizarAcoes(animal, acoes) {
  acoes.forEach((acao) => {
    if (acao.tipo === 'vacina') {
      animal.historico.vacinar(acao.vacina);
    } else if (acao.tipo === 'consulta') {
      animal.historico.consultar(acao.data);
    } else if (acao.tipo === 'procedimento') {
      animal.historico.realizarProcedimento(acao.tipoProc, acao.motivoProc);
    }
  });
}

function mostrarInformacoes(animal) {
  console.log(`Informações sobre ${animal.nome} - idade: ${animal.idade} meses, cor: ${animal.cor}, castrado: ${animal.castrado}`);
}

function mostrarHistoricoMedico(animal) {
  console.log('Histórico Médico:');
  console.log('Consultas:', animal.historico.consultas);
  console.log('Vacinas:', animal.historico.vacinas);
  console.log('Procedimentos:', animal.historico.procedimentos);
  console.log('\n');
}

// Ações para Pipoca (Gato)
const acoesPipoca = [
  { tipo: 'vacina', vacina: 'raiva' },
  { tipo: 'vacina', vacina: 'v8' },
  { tipo: 'consulta', data: '09/28/2023' },
  { tipo: 'consulta', data: '09/30/2023' },
  { tipo: 'procedimento', tipoProc: 'ultrassom', motivoProc: 'dores' },
  { tipo: 'procedimento', tipoProc: 'exame de sangue', motivoProc: 'anemia' },
  { tipo: 'miar' },
];

const pipoca = new Gato('Pipoca', 18, 'branco', true);
realizarAcoes(pipoca, acoesPipoca);
mostrarInformacoes(pipoca);
mostrarHistoricoMedico(pipoca);

// Ações para Aslam (Cachorro)
const acoesAslam = [
  { tipo: 'vacina', vacina: 'giárdia' },
  { tipo: 'vacina', vacina: 'v10' },
  { tipo: 'consulta', data: '09/26/2023' },
  { tipo: 'consulta', data: '09/29/2023' },
  { tipo: 'procedimento', tipoProc: 'exame de urina', motivoProc: 'doença renal' },
  { tipo: 'procedimento', tipoProc: 'exame de sangue', motivoProc: 'infecção' },
  { tipo: 'latir' },
];

const aslam = new Cachorro('Aslam', 42, 'preto', false, 'srd');
realizarAcoes(aslam, acoesAslam);
mostrarInformacoes(aslam);
mostrarHistoricoMedico(aslam);

// Ações para Iogurte (Animal Exótico - Hamster)
const acoesIogurte = [
  { tipo: 'consulta', data: '09/25/2023' },
  { tipo: 'consulta', data: '09/30/2023' },
  { tipo: 'procedimento', tipoProc: 'raio x', motivoProc: 'pata quebrada' },
];

const iogurte = new AnimalExotico('Iogurte', 19, 'branco e laranja', 'hamster');
realizarAcoes(iogurte, acoesIogurte);
console.log(`Informações sobre ${iogurte.nome} - idade: ${iogurte.idade} meses, cor: ${iogurte.cor}, espécie: ${iogurte.especie}, adulto: ${iogurte.ehAdulto()}`);
mostrarHistoricoMedico(iogurte);
