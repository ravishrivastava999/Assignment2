const {Account}=require('./Account');
class Saving extends Account{
    constructor(AccountNumber,AccountName,AccountBalance){
        super(AccountNumber,AccountName);
        this.AccountBalance=AccountBalance;
    }

    Deposit(value){
       var Balance=this.AccountBalance + value;
      return `${this.getAccountInfo()}, Account Balance: ${Balance}`;
    }

    Interest(){
        var Interest= this.AccountBalance * 4/100;
        return `${this.getAccountInfo()}, Account Balance: ${this.AccountBalance}, Interest: ${Interest}`;
    }
    

    Withdraw(value){
        if(this.AccountBalance<value){
            return "Low Balance"
        }
        else 
        {
            var Balance=this.AccountBalance-value;
            return `${this.getAccountInfo()}, Account Balance: ${Balance}`;
        }
    }

    
}


const SavingAccount = new Saving(100000151001, " Ravi", 10000);


console.log(SavingAccount);

console.log(SavingAccount.Deposit(5000));

console.log(SavingAccount.Withdraw(8000));

console.log(SavingAccount.Interest());

console.log(SavingAccount.Withdraw(5000));


