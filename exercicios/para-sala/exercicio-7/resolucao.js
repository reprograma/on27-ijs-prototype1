function Account(number, agency, numberBank, balance) {
	this.number = number;
	this.agency = agency;
	this.numberBank = numberBank;
	this.balance = balance;
}

Account.prototype.credit = function credit(amount) {
	this.balance += amount;
	console.log(
		`O valor de ${amount} foi adicionado à sua conta. Seu saldo é de R$${this.balance}.`
	);
};

Account.prototype.debit = function debit(amount) {
	if (this.balance >= amount) {
		this.balance -= amount;
		console.log(
			`O valor de ${amount} foi debitado de sua conta. Seu saldo é de R$${this.balance}.`
		);
	} else {
		console.log("Você não tem saldo suficiente para esta operação");
	}
};

Account.prototype.transferTo = function transferTo(anotherAccount, amount) {
	//opção de taxa variável
	let tax = 0;
	if (this.numberBank !== anotherAccount.numberBank) {
		tax = 0.05;
	}
	const amountToDebit = amount + (amount * tax);

	if (this.balance >= amountToDebit) {
		this.balance -= amountToDebit;
		anotherAccount.balance = amount;
		console.log(
			`Transferência realizada com sucesso! Seu novo saldo é de: R$${this.balance}`
		);
	} else {
		console.log("Você não tem saldo suficiente para esta operação.");
	}

	//opção de taxa fixa
	// let tax = 7;
	// if (this.balance >= amount + tax) {
	// 	this.balance -= amount + tax;
	// 	anotherAccount.balance += amount;

	// 	console.log(
	// 		`Transferência realizada com sucesso! Seu novo saldo é de: R$${this.balance}`
	// 	);
	// } else {
	// 	throw "Você não tem saldo suficiente para esta operação.";
	// }
};

Account.prototype.closeAccount = function closeAccount() {
	if (this.balance === 0) {
		this.number = undefined;
		this.agency = undefined;
		this.numberBank = undefined;
		this.balance = undefined;

		console.log("Sua conta foi encerrada com sucesso!");
	} else {
		console.log(
			`Não será possível encerrar sua conta pois o saldo é de R$${this.balance}.`
		);
	}
};

module.exports = { Account };
