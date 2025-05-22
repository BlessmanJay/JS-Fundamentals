const a = process.argv[2];
const b = process.argv[3];

function add(a, b) {
  return a + b;
}

if (!isNaN(a) && !isNaN(b)) {
  console.log(add(Number(a), Number(b)));
} else {
  console.log("NaN");
}
// This code takes two command line arguments, converts them to numbers, and checks if they are NaN. If they are not NaN, it adds them together and prints the result. If either argument is NaN, it prints "NaN".
