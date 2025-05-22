function factorial(n) {
  if (isNaN(n)) return 1;
  n = parseInt(n);
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

const input = process.argv[2];
console.log(factorial(input));

// The code calculates the factorial of a number passed as a command line argument.
// It defines a recursive function `factorial` that takes a number `n` and returns its factorial.
