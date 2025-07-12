const arg = process.argv[2];
const size = parseInt(arg);

if (!arg || isNaN(size)) {
  console.log("Missing size");
} else if (size > 0) {
  let row = 0;
  const line = "X".repeat(size);
  while (row < size) {
    console.log(line);
    row++;
  }
}
