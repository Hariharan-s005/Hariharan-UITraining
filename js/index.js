/*bank function*/
function bank() {
  const BankDetails = [
    {
      accountNo: 1,
      cardNumber: 1111,
      pin: 1111,
      accountBalance: 4000,
    },
    {
      accountNo: 2,
      cardNumber: 2222,
      pin: 2222,
      accountBalance: 20000,
    },
    {
      accountNo: 3,
      cardNumber: 3333,
      pin: 3333,
      accountBalance: 100000,
    },
    {
      accountNo: 4,
      cardNumber: 4444,
      pin: 4444,
      accountBalance: 23,
    },
    {
      accountNo: 5,
      cardNumber: 5555,
      pin: 5555,
      accountBalance: 5000000001,
    },
  ];
  //ATM Operations function
  function atmOperations() {
    const CustomerCardNumber = prompt(
      "*****Welcome to Sirius Bank*****\nEnter your ATM Card Number"
    );
    const CustomerPin = prompt("Enter your ATM Pin");
    for (customerAccount of BankDetails) {
      if (
        CustomerCardNumber == customerAccount.cardNumber &&
        customerAccount.pin == CustomerPin
      ) {
        const option = prompt(
          "*****Select one of the options*****\nPress 1 for Money Withdrawal\nPress 2 for Money Deposit\nPress 3 for Balance Enquiry\nPress 4 for changing ATM Pin"
        );
        switch (option) {
          case "1":
            const amount = Number(prompt("Enter the amount to be withdrawn"));
            if (amount < 0) {
              alert("Please enter the amount correctly");
              atmOperations();
            }
            if (customerAccount.accountBalance < amount) {
              alert("*****Insuffient Funds*****\n Transaction Failed\n");
              atmOperations();
            } else {
              customerAccount.accountBalance -= amount;
              alert(
                "Amount Rs" +
                  amount +
                  " is successful withdrawn. " +
                  " Remaining balance  is Rs" +
                  customerAccount.accountBalance
              );
              atmOperations();
            }
            break;

          case "2":
            const amountDeposited = Number(
              prompt("Enter the amount to be deposited")
            );
            if (amountDeposited < 0) {
              alert("Please enter the amount correctly");
              atmOperations();
            }
            customerAccount.accountBalance =
              customerAccount.accountBalance + amountDeposited;
            alert(
              "Amount Rs" +
                amountDeposited +
                " is successful deposited. " +
                " Remaining balance  Rs" +
                customerAccount.accountBalance
            );
            atmOperations();
            break;

          case "3":
            alert("Account balance is Rs" + customerAccount.accountBalance);
            atmOperations();
            break;

          case "4":
            const oldPin = Number(prompt("Enter the Old Pin"));
            if (oldPin == customerAccount.pin) {
              const newPin = Number(prompt("Enter the New Pin"));
              customerAccount.pin = newPin;
              alert("****Pin successfully changed*****");
            } else {
              alert("Old Pin entered is wrong");
              atmOperations();
            }
            atmOperations();
            break;

          default:
            alert("Enter the correct option");
            atmOperations();
            break;
        }
      } else if (
        CustomerCardNumber == customerAccount.cardNumber &&
        customerAccount.pin != CustomerPin
      ) {
        alert("The pin entered is wrong");
        atmOperations();
      } else {
        alert("Customer card number does not exist");
        atmOperations();
      }
    }
  }
  return atmOperations();
}
// Calling the bank function
bank();
