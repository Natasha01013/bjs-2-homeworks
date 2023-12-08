function getArrayParams(...arr) {
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        min = Math.min(min, arr[i])
        max = Math.max(max, arr[i])
        sum += arr[i];
    }
    let avg = +((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}

console.log(getArrayParams(-99, 99, 10));
console.log(getArrayParams(1, 2, 3, -100, 10));  
console.log(getArrayParams(5));




function summElementsWorker(...arr) {

}

function differenceMaxMinWorker(...arr) {

}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
