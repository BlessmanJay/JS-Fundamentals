const times = Number(process.argv[2]);

if (isNaN(times)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < times; i++) {
    console.log("C is fun");
  }
}
// The code checks if the first command line argument is a number. If it is, it prints "C is fun" that many times. If not, it prints "Missing number of occurrences".
// The code uses the process.argv array to access command line arguments. The first two elements are the path to the Node.js executable and the path to the script being executed, so we start from index 2 to get the actual arguments passed by the user.
