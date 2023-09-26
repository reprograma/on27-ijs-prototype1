function Account(numero, agencia, montante, numeroBanco){
    this.numero = numero;
    this.agencia = agencia;
    this.montante = montante; // !== 0
    this.numeroBanco = numeroBanco
}

Account.prototype.credit = function credit (amount){ // não pode ser uma função anônima
    this.montante += amount;
    console.log(`Seu crédito é de R$${this.montante}`)
}

Account.prototype.debit = function debit (amount){
    if(this.montante >= amount){  
        this.montante -= amount;
        console.log(`Seu crédito é de R$${this.montante}`);
    } else{
        console.log(`Saldo insuficiente para realizar a transação. Seu crédito é de R$${this.montante}`);
    }
}

Account.prototype.encerrarConta = function encerrarConta(){
    if(this.montante > 0){
        console.log(`A conta ainda tem R$${this.montante} de saldo e por isso não pode ser encerrada.`)
    } else if (this.montante === 0){
        console.log('Conta encerrada com sucesso')
    }
}

Account.prototype.transferTo= function transferTo(anotherAccount, amount, taxa){
    if (this.numeroBanco === anotherAccount.numeroBanco){    
        if (amount > this.montante){
            throw new Error('Saldo insuficiente para realizar a operação')
        } else{
            let valor = amount + taxa
            this.montante -= valor; 
            anotherAccount.montante += amount; 
            console.log(`Transferência de R$${amount} realizada com sucesso, a taxa de transferência foi R$${taxa}. Seu saldo é R$ ${this.montante}`)
        }
    } else{
        if (amount > this.montante){
            throw new Error('Saldo insuficiente para realizar a operação')
        } else{
            this.montante -= amount;
            anotherAccount.montante += amount; 
            console.log(`Transferência de R$${amount} realizada com sucesso. Seu saldo é R$ ${this.montante}`)
        }
    }
}

const outraConta = Account(1234, 1212, 900, 1)
const account1 = Account(2563, 1003, 500, 2)
console.log(account1)
account1.debit(200)
account1.credit(900)
account1.transferTo(outraConta, 600, 10)