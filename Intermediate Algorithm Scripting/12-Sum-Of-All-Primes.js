// Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
sumPrimes(10) //should return a number.
Passed:sumPrimes(10) //should return 17.
Passed:sumPrimes(977) //should return 73156.

function sumPrimes(num) {
    var store  = [], i, j, sumAll, primes = [];
        for (i = 2; i <= num; i++){
            if (!store [i]) 
              {
                primes.push(i);
                for (j = i << 1; j <= num; j += i) 
                {
                    store[j] = true;
                }
            }
        }
        return sumAll = primes.reduce((previousValue, currentValue) => {
          return previousValue + currentValue;
          });
    }
    
    sumPrimes(10);
    console.log(sumPrimes(10))
    