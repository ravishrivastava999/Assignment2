
class Account{
    constructor(AccountNumber,AccountName){
        this.AccountNumber=AccountNumber;
        this.AccountName=AccountName;
        
    }
    getAccountInfo() {
        return `Account number : ${this.AccountNumber}, Name: ${this.AccountName}`;
      
    }
}

module.exports={Account};