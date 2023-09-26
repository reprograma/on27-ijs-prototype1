function Account(numero, agencia, montante, numeroB){
    this.numero = numero;
    this.agencia = agencia;
    this.montante = montante; // !== 0
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

Account.prototype.transferTo= function transferTo(anotherAccount, amount, taxa){
    if (amount > this.montante){
        throw new Error('Saldo insuficiente para realizar a operação')
    } else{
        let valor = amount + taxa
        this.montante -= valor; // retira da minha conta; poderia usar a função debit
        this.debit(valor)
        anotherAccount.montante += amount; // coloca no montante de outra conta
        console.log(`Transferência de R$${amount} realizada com sucesso, a taxa de transferência foi R$${taxa}. Seu saldo é R$ ${this.montante}`)
    }
}

const outraConta = Account(1234, 1212, 900)
const account1 = Account(2563, 1003, 500)
console.log(account1)
account1.debit(200)
account1.credit(900)
account1.transferTo(outraConta, 600, 10)