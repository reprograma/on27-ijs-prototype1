const { Account } = require('./resolucao');

luaraAccount = Account(123, 0o1, 1000);
luaraAccount.credit(2000);
luaraAccount.debit(10000);

outraconta = Account(456, 0o1, 100);
luaraAccount.transferTo(outraconta, 500);