const size = Number(process.argv[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < size; i++) {
    console.log("X".repeat(size));
  }
}
// This code takes a command line argument, converts it to a number, and checks if it's NaN. If it's NaN, it prints "Missing size". Otherwise, it prints a square of size 'size' using 'X' characters.
