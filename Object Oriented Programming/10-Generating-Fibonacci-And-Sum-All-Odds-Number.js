// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

sumFibs(1) // should return a number.
Passed:sumFibs(1000) // should return 1785.
Passed:sumFibs(4000000) // should return 4613732.
Passed:sumFibs(4) // should return 5.
Passed:sumFibs(75024) // should return 60696.
Passed:sumFibs(75025) // should return 135721.

function sumFibs(num) {
    let fibArr = [0,1]
    let filteredArr = []
    let sumOdds = 0
    let n1 = 0
    let n2 = 1
    let nextTerm = 0
    for(let i = 0; i < num; i++){
    nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
      if (nextTerm <= num){
      fibArr.push(nextTerm)}
      filteredArr = fibArr.filter(number => {
      return number % 2 !== 0;});
      sumOdds = filteredArr.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
      })
    }
    return sumOdds;
  }
  
  sumFibs(4);
  
  console.log(sumFibs(4))
  console.log(sumFibs(10))
  console.log(sumFibs(75025))

  // alternative

  function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }