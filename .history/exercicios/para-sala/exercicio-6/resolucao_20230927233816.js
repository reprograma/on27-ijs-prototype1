function Account(numberAccount, agencyNumber, balance) {
  let account = Object.create(Account.prototype);

  account.numberAccount = numberAccount;
  account.agencyNumber = agencyNumber;
  account.balance = balance;

  return account;
}

Account.prototype.credit = function credit(amount) {
  this.balance += amount;
  console.log(`O novo valor é de ${this.balance}`);
}

Account.prototype.debit = function debit(amount) {
  if(this.balance >= amount) {
    this.balance -= amount;
    console.log(`O novo valor é de ${this.balance}`);
  } else {
    console.log('Você não tem saldo suficiente para essa operação.')
  }
}

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
  if(this.balance >= amount) {
    this.balance -= amount;
    anotherAccount.balance += amount;
    console.log(`Transferência realizada com sucesso. Seu novo saldo é de ${this.balance}`)
  } else {
    throw 'Você não tem saldo suficiente para essa operação.'
  }
}

module.exports = { Account }

// minha resolução
function Account(numero, agencia, montante){
  let account = Object.create(Account.prototype);

  account.numero = numero;
  account.agencia = agencia;
  account.montante = montante; // !== 0

  return account;
}

Account.prototype.credit = function credit (amount){ // não pode ser uma função anônima
  this.montante += amount;
  console.log(`Seu crédito é de R$${this.montante}`)
}

Account.prototype.debit = function debit (amount){
  if(this.montante >= amount){  
      this.montante -= amount;
      console.log(`Seu crédito é de R$${this.montante}`)
  } else{
      console.log(`Saldo insuficiente para realizar a transação. Seu crédito é de R$${this.montante}`)
  }
}

Account.prototype.transferTo= function transferTo(anotherAccount, amount){
  if (amount > this.montante){
      throw new Error('Saldo insuficiente para realizar a operação')
  } else{
      this.montante -= amount; // retira da minha conta; poderia usar a função debit
      // this.debit(amount)
      anotherAccount.montante += amount; // coloca no montante de outra conta
      console.log(`Transferência de R$${amount} realizada com sucesso. Seu saldo é R$ ${this.montante}`)
  }
}

const outraConta = Account(1234, 1212, 900)
const account1 = Account(2563, 1003, 500)
console.log(account1)
account1.debit(200)
account1.credit(900)
account1.transferTo(outraConta, 600)
