// directly acces the functions later on using readFileSync isnted of fs.readFileSync()
const { readFile, writeFile } = require("fs");
console.log("start");

//callback hell
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Heere is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task.");
      }
    );
  });
});

console.log("Starting next task.");
