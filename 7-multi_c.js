const arg = process.argv[2];
const x = parseInt(arg);

if (!arg || isNaN(x) || x < 1) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < x) {
    console.log("C is fun");
    i++;
  }
}
