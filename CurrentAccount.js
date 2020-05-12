const {Account}=require('./Account');
class Current extends Account{
    constructor(AccountNumber,AccountName,AccountBalance){
        super(AccountNumber,AccountName);
        this.AccountBalance=AccountBalance;
    }

    Deposit(value){
       var Balance=this.AccountBalance + value;
      return `${this.getAccountInfo()}, Account Balance: ${Balance}`;
    }

    Interest(){
        var Interest= this.AccountBalance * 2/100;
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


const currentAccount = new Current(100000151002, " Ravi Shrivastava", 1201);




console.log(currentAccount);

console.log(currentAccount.Deposit(1201));

console.log(currentAccount.Withdraw(1901));

console.log(currentAccount.Interest());

console.log(currentAccount.Withdraw(501));

