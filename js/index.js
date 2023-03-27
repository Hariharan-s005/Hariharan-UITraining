const formButton = document.querySelector(".formButton");
formButton.addEventListener("click", (event) => {
  event.preventDefault();

  //returns the first Element that matches the specified selector
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");
  const emailId = document.querySelector("#emailId");
  const contactNumber = document.querySelector("#contactNumber");
  const pinCode = document.querySelector("#pinCode");
  const cardNumber = document.querySelector("#cardNumber");
  const cardExpiry = document.querySelector("#cardExpiry");
  const CVV = document.querySelector("#CVV");

  const firstNameError = document.querySelector(".first-name-error");
  const lastNameError = document.querySelector(".last-name-error");
  const emailIDError = document.querySelector(".email-error");
  const contactNumberError = document.querySelector(".contact-number-error");
  const pinCodeError = document.querySelector(".pin-code-error");
  const cardNumberError = document.querySelector(".card-number-error");
  const cardExpiryError = document.querySelector(".card-expiry-error");
  const CVVError = document.querySelector(".CVV-error");

  //regular expressions
  let nameRegex = /^[a-zA-Z]{1,30}$/;
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let contactNumberRegex = /^\d{10}$/;
  let pincodeRegex = /^\d{6}$/;
  let CardnumberRegex = /^\d{16}$/;
  let CardExpiryRegex =
    /^(?:20(?:2[3-9]|[3-9][0-9])|2[1-9][0-9][0-9]|[3-9][0-9][0-9][0-9])$/;
  let CVVRegex = /^\d{3}$/;

  //Validation for First Name
  if (firstName.value == "") {
    firstName.classList.add("error");
    firstNameError.innerHTML = "First Name is required";
  } else if (!nameRegex.test(firstName.value)) {
    firstName.classList.add("error");
    firstNameError.innerHTML = "First Name is not valid";
  } else {
    firstName.classList.remove("error");
    firstNameError.innerHTML = "";
  }

  //Validation for Last Name
  if (lastName.value == "") {
    lastName.classList.add("error");
    lastNameError.innerHTML = "Last Name is required";
  } else if (!nameRegex.test(lastName.value)) {
    lastName.classList.add("error");
    lastNameError.innerHTML = "Last Name is not valid";
  } else {
    lastName.classList.remove("error");
    lastNameError.innerHTML = "";
  }

  //Validation for email
  if (emailId.value == "") {
    emailId.classList.add("error");
    emailIDError.innerHTML = "Email Address is required";
  } else if (!emailRegex.test(emailId.value)) {
    emailId.classList.add("error");
    emailIDError.innerHTML = "Email Address is not valid";
  } else {
    emailId.classList.remove("error");
    emailIDError.innerHTML = "";
  }

  //validation for ContactNumber
  if (contactNumber.value == "") {
    contactNumber.classList.add("error");
    contactNumberError.innerHTML = "Contact Number is required";
  } else if (!contactNumberRegex.test(contactNumber.value)) {
    contactNumber.classList.remove("error");
    contactNumberError.innerHTML = "Contact Number is not valid";
  } else {
    contactNumber.classList.remove("error");
    contactNumberError.innerHTML = "";
  }
  //Validation for Pincode
  if (pinCode.value == "") {
    pinCode.classList.add("error");
    pinCodeError.innerHTML = "PIN Code is required";
  } else if (!pincodeRegex.test(pinCode.value)) {
    pinCodeError.classList.add("error");
    pinCodeError.innerHTML = "PIN Code is not valid";
  } else {
    pinCode.classList.remove("error");
    pinCodeError.innerHTML = "";
  }
  //Validation for  Card Number
  if (cardNumber.value == "") {
    cardNumber.classList.add("error");
    cardNumberError.innerHTML = "Card Number is required";
  } else if (!CardnumberRegex.test(cardNumber.value)) {
    cardNumber.classList.add("error");
    cardNumberError.innerHTML = "Card Number is not valid";
  } else {
    cardNumber.classList.remove("error");
    cardNumberError.innerHTML = "";
  }
  //Validation for CardExpiry date
  if (cardExpiry.value == "") {
    cardExpiry.classList.add("error");
    cardExpiryError.innerHTML = "Card Expiry is required";
  } else if (!CardExpiryRegex.test(cardExpiry.value)) {
    cardExpiry.classList.add("error");
    cardExpiryError.innerHTML = "Card Expiry is not valid";
  } else {
    cardExpiry.classList.remove("error");
    cardExpiryError.innerHTML = "";
  }
  //Validation for CVV
  if (CVV.value == "") {
    CVV.classList.add("error");
    CVVError.innerHTML = "CVV is required ";
  } else if (!CVVRegex.test(CVV.value)) {
    CVV.classList.add("error");
    CVVError.innerHTML = "CVV is not valid ";
  } else {
    CVV.classList.remove("error");
    CVVError.innerHTML = "";
  }
});
