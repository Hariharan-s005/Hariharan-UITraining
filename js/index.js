const formButton = document.querySelector(".formButton");
formButton.addEventListener("click", (event) => {
  event.preventDefault();
  // validate object containing regex, and error message for each input field type
  const validate = {
    firstName: {
      regex: /^[a-zA-Z]{1,30}$/,
      isEmpty: "First Name is required",
      isInvalid: "First Name is not valid",
    },
    lastName: {
      regex: /^[a-zA-Z]{1,30}$/,
      isEmpty: "Last Name is required",
      isInvalid: "Last Name is not valid",
    },
    emailId: {
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      isEmpty: "Email Address is required",
      isInvalid: "Email Address is not valid",
    },
    contactNumber: {
      regex: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/,
      isEmpty: "Contact Number is required",
      isInvalid: "Contact Number is not valid",
    },
    pinCode: {
      regex: /^\d{6}$/,
      isEmpty: "PIN Code is required",
      isInvalid: "PIN Code is not valid",
    },
    cardNumber: {
      regex: /^\d{16}$/,
      isEmpty: "Card Number is required",
      isInvalid: "Card Number is not valid",
    },
    cardExpiry: {
      regex:
        /^(?:20(?:2[3-9]|[3-9][0-9])|2[1-9][0-9][0-9]|[3-9][0-9][0-9][0-9])$/,
      isEmpty: "Card Expiry is required",
      isInvalid: "Card Expiry is not valid",
    },
    cvv: {
      regex: /^[0-9]{3,4}$/,
      isEmpty: "CVV is required",
      isInvalid: "CVV is not valid",
    },
  };

  // storing all input and h4
  const inputTextBox = document.querySelectorAll("input");
  const errorMessage = document.querySelectorAll("h4");

  // displaying the specific error messsage for each type of error
  for (let i = 0; i < inputTextBox.length; i++) {
    let type = inputTextBox[i].getAttribute("id");
    let regex = validate[type].regex;

    if (inputTextBox[i].value == "") {
      inputTextBox[i].classList.add("error");
      errorMessage[i].innerHTML = validate[type].isEmpty;
    } else if (!regex.test(inputTextBox[i].value)) {
      inputTextBox[i].classList.add("error");
      errorMessage[i].innerHTML = validate[type].isInvalid;
    } else {
      inputTextBox[i].classList.remove("error");
      errorMessage[i].innerHTML = "";
    }
  }
});
