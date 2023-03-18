//Section 1

console.log("Section 1:");

console.log(1 + 2);
console.log("apple" + "orange");
console.log(1 + 2 + "apple");
console.log("apple" + 1 + 2);
console.log(1 + true);
console.log(0 == false);
console.log(1 === true);
console.log(2 == "2");

//Section 2
console.log("Section 2:");
console.log("1:");
cricketTeam = [
  "Ram Charan",
  "Srinivas",
  "Sai Charan",
  "Dhanush Kumar",
  "Hari",
  "Kumar",
  " Yousuf",
  "Harry",
  "Sammy",
  "Karan",
  "Brian'O'Conner",
];
console.log("Team:" + cricketTeam);

console.log("2:");
var injuredPlayer = cricketTeam.shift();
console.log("Injured Player:" + injuredPlayer);
console.log("Team after removing injured player:" + cricketTeam);

console.log("3:");
console.log("Total players:" + cricketTeam.length);

console.log("4:");
cricketTeam.push("Vinod");
console.log(
  "Team after adding extra player:" +
    cricketTeam +
    "Total players:" +
    cricketTeam.length
);

console.log("5:");
cricketTeam.sort();
console.log("Team after sorting:" + cricketTeam);

console.log("6:");
for (let i of cricketTeam) {
  jerseyNumber = Math.floor(Math.random() * 10);
  console.log(jerseyNumber + "-" + i);
}

console.log("7:");
namesInUpperCase = cricketTeam.map((v) => v.toUpperCase());
console.log("Names in Upper Case:" + namesInUpperCase);

//Section 3
console.log("Section 3:");
console.log("Display Numbers from 1 to 100:");
displayNumbers = () => {
  for (let i = 1; i <= 100; i++) {
    console.log(i);
  }
};
displayNumbers();

console.log("Display date:");
var date = new Date();
displayDate = () => {
  currDate = date.getDate().toString().padStart(2, 0);
  currMonth = date.getMonth().toString().padStart(2, 0);
  currYear = date.getFullYear().toString().padStart(2, 0);

  return currDate + "/" + currMonth + "/" + currYear;
};
console.log(displayDate());
console.log("Celsius to Fahrenheit:");
toFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
console.log(toFahrenheit(34));

console.log("Average of an array of numbers");

averageOfArray = (numbers) => {
  return numbers.reduce((a, b) => a + b) / numbers.length;
};

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(averageOfArray(numbers));

console.log("Reverse a string:");
stringReverse = (string) => {
  return string.split("").reverse().join("").toString();
};
console.log(stringReverse("ENGINE"));
