const fileSystem = require("fs");

// syncronous file read`
// const data = fileSystem.readFileSync("./input.txt", { encoding: "utf8" });

// console.log(data);

// console.log(" i wanted nothing");

// asyncronous file read
// fileSystem.readFile("./input.txt", { encoding: "utf8" }, (error, data) => {
//   if (error) {
//     return console.log(error);
//   }
//   console.log(data);
// });

console.log("i wanted nothing");

fileSystem.writeFile(
  "./input.txt",
  "this class is for code warrior",
  (error) => {
    if (error) {
      return console.log(error);
    }
  }
);

fileSystem.writeFile("./output.txt", "writing file for output", (error) => {
  if (error) {
    return console.log(error);
  }
});
