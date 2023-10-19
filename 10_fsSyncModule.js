// directly acces the functions later on using readFileSync isnted of fs.readFileSync()
const { readFileSync, writeFileSync } = require("fs");

console.log("start");

//reading file
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
const test = readFileSync("./content/subfolder/test.txt", "utf8");
// console.log(first + second + test);

//writing in a file

// This overwrites any existing data in the file
writeFileSync(
  "./content/result-sync.txt",
  `Heere is the result: ${first}, ${second}`
);

//This appends data to a file without overwriting it.
writeFileSync(
  "./content/result-sync.txt",
  `\nHeere is the result: ${first}, ${second}`,
  { flag: "a" }
);

console.log("Done with this task.");
console.log("Starting next task.");
