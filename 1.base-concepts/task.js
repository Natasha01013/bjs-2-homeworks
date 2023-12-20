//Задача 1
"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - (4 * a * c);

  if (d < 0) {
    return arr = [];
  } else if (d === 0) {
    arr.push(- b / (2 * a));
  } else {
  arr.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
  }
  return arr;
}

console.log(solveEquation(5, 12, 3));


// Задча 2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percentBet = percent / 100; // процентная ставка 
  let bodyCredit = amount - contribution; // тело кредита
  
  let monthlyFee = bodyCredit * ((percentBet / 12) + ((percentBet / 12) / (((1 + (percentBet / 12)) ** countMonths) - 1)));
  let totalCredit = +((monthlyFee * countMonths).toFixed(2))

  return totalCredit;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));