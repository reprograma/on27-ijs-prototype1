const { Employee } = require('./resolucao');

const employee1 = Employee('Noemi', 'Cunha', 20000);
employee1.addBenefit('VR');
employee1.addBenefit('VA');
employee1.addBenefit('Zenklub');
employee1.listBenefits();
employee1.removeBenefit('VA');
employee1.listBenefits();
