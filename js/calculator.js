let calculator = {          //Calculator object
  add(number1, number2) {           //add
    return number1 + number2;
  },
  subtract(number1, number2) {      //subtract
    return number1 - number2;
  },
  divide(number1, number2) {       //division
    if (number2 == 0) return "Divison by zero not allowed";
    else return number1 / number2;
  },
  multiply(number1, number2) {      //multiply
    return number1 * number2;
  },
};
console.log("Addition:" + calculator.add(2, 3));
console.log("Subtract:" + calculator.subtract(5, 3));
console.log("Division:" + calculator.divide(14, 0));
console.log("Addition:" + calculator.multiply(4, 6));
