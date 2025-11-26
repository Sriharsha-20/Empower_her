function createBankAccount() {
  let balance = 0;
  let transactionHistory = []; 

  function deposit(amount) {
    balance += amount;
    transactionHistory.push({ type: "Deposit", amount });
    console.log("Deposited:", amount);
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log("Insufficient balance");
      transactionHistory.push({ type: "Failed Withdrawal", amount });
    } else {
      balance -= amount;
      transactionHistory.push({ type: "Withdrawal", amount });
      console.log("Withdrawn:", amount);
    }
  }

  function getBalance() {
    console.log("Current Balance:", balance);
  }

  function getHistory() {
    console.log("Transaction History:", transactionHistory);
  }

  return {
    deposit,
    withdraw,
    getBalance,
    getHistory
  };
}

const acc = createBankAccount();

acc.deposit(100);
acc.withdraw(30);
acc.withdraw(100);
acc.getHistory();

