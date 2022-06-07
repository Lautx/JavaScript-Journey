// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
// Now that you have worked through a few challenges using higher-order functions like map(), filter(), and reduce(), you now get to apply them to solve a more complex challenge.

// Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// Note: Your function should not use any kind of for or while loops or the forEach() function.

const squareList = arr => {
    // Only change code below this line
    let newArr = arr
    .filter((num => num > 0))
    .map((num) => num ** 2)
    .filter((num => Number.isInteger(num)))
    return newArr;
    // Only change code above this line
  };
  
  const squaredIntegers = squareList([-3.7, -5, 3, 10, 12.5, 7, -4.5, -17, 0.3]);
  console.log(squaredIntegers);