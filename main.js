"use strict";

let closeMenuButton = document.querySelector(".close_menu__button");
let openMenuButton = document.querySelector(".open_menu__button");
let menuSec = document.querySelector(".menu");
let headerEl = document.querySelector("header");
let footerEl = document.querySelector("footer");

/* let myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("Hello !!"); }, 3000);
});

myPromise.then(function(value) {
  document.getElementById("demo").innerHTML = value;
}); */

openMenuButton.addEventListener("click", () => {
  toggleMobileMenu();
});

closeMenuButton.addEventListener("click", () => {
  toggleMobileMenu();
});

function toggleMobileMenu() {
  headerEl.classList.toggle("header--expanded");
  menuSec.classList.toggle("menu--visible");
  footerEl.classList.toggle("footer--invisible");
  closeMenuButton.classList.toggle("close_menu__button--visible");
  openMenuButton.classList.toggle("open_menu__button--invisible");
}

// const johnHeight = 1.95;
// const johnWeight = 92;

// const markHeight = 1.69
// const markWeight = 78;

// const johnBMI = johnWeight / (johnHeight ** 2);
// const markBMI = markWeight / (markHeight ** 2);

/* console.log(johnBMI);
console.log(markBMI); */

// const markHigherBMI = markBMI > johnBMI;

// if(markHigherBMI) {
//     console.log(`Mark has higher BMI: ${markBMI}`)
// } else {
//     console.log(`John has higher BMI: ${johnBMI}`)
// }

//////////////////////////////////////////////////////////////////

// console.log(`Don't spend all money`)

// const averageDolphinsScore = (97 + 112 + 101)/3;
// const averageKoalasScore = (109 + 95 + 123)/3;

// console.log(averageDolphinsScore, averageKoalasScore);

// if(averageKoalasScore === averageDolphinsScore) {
//     console.log("No one wins, we have a draw")
// }
// else if (averageDolphinsScore > averageKoalasScore) {
//     console.log(`Dolphins wins with average score ${averageDolphinsScore}`)
// }
// else {
//     console.log(`Koalas wins with average score ${averageKoalasScore}`)
// }

///////////////////////////////////////////////////////

// let age = 19;
// let drink;
//     if (age >= 18) {
//         drink = `wine`;
//     }
//     else {
//         drink = `water`;
//     }

// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip} and the value was ${bill + tip}.`);

/////////////////////////////////////////////////////////

// let hasLicence = false;
// const passTest = true;

// if (passTest) hasLicence = true;
// if (hasLicence) console.log(`I can drive`);

// function logger () {
//   console.log(`fhsk`);
// }

// logger();

// function fruitProcessor (apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(`${fruitProcessor(5,1)}`);

////////////////////////////////////////////////////////////

// function calcAge (birthYear) {
//   const age = 2021 - birthYear;
//   console.log(age);
// }

// calcAge(1991);

// const age = birthYear => 2021 - birthYear;
// console.log(age(1991));

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2021 - birthYear;
//   const retirement = 67 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, `Michał`));

/////////////////////////////////////////////////////

// function cutFruitPieces(fruit) {
//   const pieces = fruit * 4;
//   return pieces;
// }

// function fruitProcessor (apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   console.log(apples, oranges);
//   const juice = `Juice with ${applePieces} pieces of apple
//   and ${orangePieces} pieces of orange`;
//   return juice;
// }

// console.log(fruitProcessor(5,1));

////////////////////////////////////////////////////////////////

// TestData1

// const dolphinScore1 = 44;
// const dolphinScore2 = 71;
// const dolphinScore3 = 23;

// const koalaScore1 = 65;
// const koalaScore2 = 54;
// const koalaScore3 = 49;

// TestData2

// const dolphinScore1 = 85;
// const dolphinScore2 = 54;
// const dolphinScore3 = 41;

// const koalaScore1 = 23;
// const koalaScore2 = 34;
// const koalaScore3 = 27;

// function averageOfThree(firstScore, secondScore, thirdScore) {
//   const average = (firstScore + secondScore + thirdScore)/3;
//   return average;
// };

// function dolphinsAverage() {
//   const average = averageOfThree(dolphinScore1,
//     dolphinScore2, dolphinScore3);

//   return average;
// };

// function koalasAverage() {
//   const average = averageOfThree(koalaScore1,
//     koalaScore2, koalaScore3);

//   return average;
// };

// function checkWinner() {

//   const dolphinsAverageScore = dolphinsAverage();
//   console.log(dolphinsAverageScore);

//   const koalasAverageScore = koalasAverage();
//   console.log(koalasAverageScore);

//   if(dolphinsAverageScore >= (2 * koalasAverageScore)) {
//     console.log(`The winner is Dolphins Team with score ${dolphinsAverageScore}
//     vs ${koalasAverageScore}`);
//   }
//   else if (koalasAverageScore > (2 * dolphinsAverageScore)) {
//     console.log(`The winner is Koalas Team with score ${koalasAverageScore}
//     vs ${dolphinsAverageScore}`);
//   }
//   else {
//     console.log(`No one wins`)
//   }
// };

// checkWinner();

///////////////////////////////////////////////////////////////////

// const friends = [`Michael`, `Steven`, `Peter`];
// console.log(friends);

// console.log(friends.push(`Jay`));

// console.log(friends);

// console.log(friends.unshift('Clara'));
// console.log(friends);

// console.log(friends.pop()); // Last
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// const shifted = friends.shift();// First
// console.log(shifted);
// console.log(friends);

// console.log(friends.indexOf(`Steven`));
// // console.log(friends.pop())
// console.log(friends);

// console.log(friends.includes(`Steven`));

///////////////////////////////////////////////////

// const billsArray = [125, 555, 44];
// const total = new Array();
// const paymentParts = new Array();

// function calcTip(bill) {
//   if(bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   }
//   else {
//     return bill * 0.2;
//   }
// }

// function calcTips(billsArray) {
//   let tipsArray = new Array();

//   billsArray.forEach(bill => {
//     const tip = calcTip(bill);
//     console.log(`Tip from ${bill} bill is ${tip}`);

//     tipsArray.push(tip);
//     total.push(bill + tip);
//     paymentParts.push(new Array(bill, tip));
//   });

//   return tipsArray;
// }

// console.log(calcTips(billsArray));
// console.log(total);
// console.log(paymentParts);

// const person = {
//   firstName : `John`,
//   lastName : `Doe`,
//   birthYear: 1990,
//   job: `teacher`,
//   friends : [`Michael`, `Steven`, `John`],

//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   }
// }

// // console.log(`${person[`firstName`]} has ${person.friends.length} friends, and his best friend is called ${person.friends[0]}`)
// console.log(`${person[`firstName`]} is ${person.calcAge()}-years old ${person.job}, and he ${person.calcAge() >= 18 ? `has` : `has not`} driving licence`);

// function fsl() {
//   // if(person.age >= 18) {
//   //   return `has`;
//   // } else {
//   //   return `has not`;
//   // }

//   person.calcAge() >= 18 ? `has` : `has not`;
// };

// const johnData = {
//   firstName : `John`,
//   height : 1.95,
//   weight : 92,

//   calcBMI : function() {
//     this.BMI = this.weight / (this.height ** 2);
//     return this.BMI;
//   }
// }

// const markData = {
//   firstName : `Mark`,
//   height : 1.69,
//   weight : 78,

//   calcBMI : function() {
//     this.BMI = this.weight / (this.height ** 2);
//     return this.BMI;
//   }
// }

// const result = function() {
//   if(markData.calcBMI() > johnData.calcBMI())
//     return `${markData.firstName}'s BMI (${markData.calcBMI()}) is higher than ${johnData.firstName}'s (${johnData.calcBMI()})!`;
//   else if(johnData.calcBMI() > markData.calcBMI())
//     return `${johnData.firstName}'s BMI (${johnData.calcBMI()}) is higher than ${markData.firstName}'s (${markData.calcBMI()})!`;
// }

// console.log(result());

// const johnHeight = 1.95;
// const johnWeight = 92;

// const markHeight = 1.69
// const markWeight = 78;

// const johnBMI = johnWeight / (johnHeight ** 2);
// const markBMI = markWeight / (markHeight ** 2);

// console.log(johnBMI);
// console.log(markBMI);

//  const markHigherBMI = markBMI > johnBMI;

// if(markHigherBMI) {
//     console.log(`Mark has higher BMI: ${markBMI}`)
// } else {
//     console.log(`John has higher BMI: ${johnBMI}`)
// }

// const person = {
//   firstName : `John`,
//   lastName : `Doe`,
//   birthYear: 1990,
//   job: `teacher`,
//   friends : [`Michael`, `Steven`, `John`],

//   calcAge: function () {
//     this.age = 2021 - this.birthYear;
//     return this.age;
//   }
// }

// for(let i = 0; i < person.friends.length; i++) {
//   console.log(person.friends[i]);
// }

// let i = 0;

// while(i < person.friends.length) {
//   console.log(person.friends[i]);
//   i++;
// }

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = new Array();
// const totals = new Array();

// // const billsArray = [125, 555, 44];
// // const total = new Array();
// // const paymentParts = new Array();

// function calcTip(bill) {
//   if(bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   }
//   else {
//     return bill * 0.2;
//   }
// }

// function calcTips(billsArray) {
//   let tipsArray = new Array();

//   // billsArray.forEach(bill => {
//   //   const tip = calcTip(bill);
//   //   console.log(`Tip from ${bill} bill is ${tip}`);

//   //   tips.push(tip);
//   //   totals.push(bill + tip);
//   //   // paymentParts.push(new Array(bill, tip));
//   // });

//   for(let i = 0; i < billsArray.length; i++) {
//     const tip = calcTip(billsArray[i]);
//     console.log(`Tip from ${billsArray[i]} bill is ${tip}`);

//     tips.push(tip);
//     totals.push(billsArray[i] + tip);
//   }

//   return tipsArray;
// }

// calcTips(bills);

// console.log(totals);

// function calcAverage(arr) {
//   let i = 0;
//   let sum = 0;

//   while(i < arr.length) {
//     sum += arr[i];

//     i++;
//   }

//   return sum / arr.length;
// }

// console.log(calcAverage(bills));
// console.log(calcAverage(totals));

// const arr = [5, 10, 48, 45, 64, 79, 82, 95, 98, 106, 120, 135];
// // const arr = [5, 10];

// let whatTodo = prompt(`1 = sum, 2 = average`);

// function calcSum(arr) {
//   let sum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }

//   return sum;
// }

// function calcAverage(arr) {
//   console.log(arr.length);
//   return calcSum(arr) / arr.length;
// }

// function calc(arr, whatTodo) {
//   console.log(arr, whatTodo);
//   let operation;

//   if (whatTodo == `1`) {
//     operation = calcSum;
//   } else if (whatTodo == `2`) {
//     operation = calcAverage;
//   }

//   return operation(arr);
// }

// console.log(calc(arr, whatTodo));

// function hasRepeatingLetters(word) {
//   const characters = word.split(``);
//   console.log(characters);

//   for (let i = 0; i < characters.length; i++) {
//     let repeteance = 0;

//     for (let j = 0; j < characters.length; j++) {
//       if (characters[i].toLowerCase() === characters[j].toLowerCase()) {
//         repeteance += 1;
//         if (repeteance > 1) return true;
//       }
//     }
//   }

//   return false;
// }

// console.log(hasRepeatingLetters(`wordw`));
