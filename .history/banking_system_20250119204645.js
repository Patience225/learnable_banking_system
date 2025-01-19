class Account {
  constructor(accountID, balance = 0) {
    this.accountID = accountID;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
    } else {
      this.balance -= amount;
    }
  }

  checkBalance() {
    return this.balance;
  }
}

class Customer {
  constructor(customerID, name) {
    this.customerID = customerID;
    this.name = name;
  }

  register() {
    console.log(`${this.name} has been registered.`);
  }
}

// Example Usage
const account = new Account("A123");
account.deposit(1000);
console.log("Balance:", account.checkBalance());
account.withdraw(500);
console.log("Balance after withdrawal:", account.checkBalance());
