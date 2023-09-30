const { Account } = require("./resolucao.js");

luaraAccount = Account(123, 1234, 1000);
luaraAccount.credit(2000);
luaraAccount.debit(500);
outraconta = Account(456, 1234, 100);
luaraAccount.transferTo(outraconta, 500);
luaraAccount.transferTo(outraconta, 6500);
