class BankAccount {
  constructor(accountNumber, ownerName, balance) {
    this.accountNumber = accountNumber;
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount} into account ${this.accountNumber}`);
    } else {
      console.log("Invalid deposit amount");
    }
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount} from account ${this.accountNumber}`);
    } else {
      console.log("Insufficient funds");
    }
  }

  getBalance() {
    return this.balance;
  }

  displayAccountInfo() {
    console.log(
      `Account Number: ${this.accountNumber} \nOwner Name: ${this.ownerName} \nBalance: $${this.balance}`
    );
  }
}

// Create two instances of BankAccount
const account1 = new BankAccount(1001, "John Doe", 1000);

// Demonstrate functionality
account1.displayAccountInfo();
account1.deposit(200);
account1.withdraw(3000);
account1.displayAccountInfo();
