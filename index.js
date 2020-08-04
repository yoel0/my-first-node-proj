// node keyword require allows us to import modules
// const myModule = require("./myModule.js");
// const fs = require("fs");

// fs.readFile("story.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log("There was a problem reading the file.");
//   } else {
//     console.log(data);
//   }
// });

// const http = require("http");
// http
//   .createServer((req, res) => {
//     res.write("Hello, World!");
//     res.end();
//   })
//   .listen(8000);

// console.log(myModule.beBasic());

// myModule.count();

// console.log("Hello, world!");

// let i = 1;

// const count = () => {
//   console.log(i);
//   i = i * 2;
// };

// const myTimer = setInterval(count, 1000);

// const today = new Date();
// console.log(today);
const moment = require("moment");
console.log(
  moment("10-08-1991").format("dddd [the] Do [of] MMMM [in the year] YYYY")
);

const chalk = require("chalk");

// console.log(chalk.blue("Hello world!"));
console.log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));
