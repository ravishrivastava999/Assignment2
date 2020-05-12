const {Account}=require('./Account');


class Customers extends Account{
    constructor(AccountNumber,AccountName,AccountBalance){
        super(AccountNumber,AccountName);
        this.AccountBalance=AccountBalance;


    }
}


    const currentAccount = new Customers(100000151002, " Ravi Shrivastava", 1201);
    
    console.log(currentAccount);



    const SavingAccount = new Customers(100000151001, " Ravi", 10000);
    
    console.log(SavingAccount);

    
