const fs = require("fs");
const http = require("http");
const url = require("url");

////////////////////////////////////////////////////
//  FILES

// // Blocking, Synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// const textOut = `This is what we know about the avocado: ${textIn}. \n Created on ${Date.now ()}`;
// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written successfully");

// // Non-blocking, Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERROR!!! 🎃🎃🎊🎊");
//   console.log(data1);
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile(`./txt/append.txt`, "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "./txt/final.txt",
//         `data 1: ${data1}\ndata 2: ${data2}\ndata 3: ${data3}`,
//         "utf-8",
//         err => {
//           console.log("Your File has been written! 🎈🎃");
//         }
//       );
//     });
//   });
// });
// console.log("Will Read File!");

////////////////////////////////////////////////////////////////
// SERVER;

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;

  // Overview Page
  if (pathName === "/" || pathName === "/overview")
    res.end("This is the OVERVIEW");
  else if (pathName === "/product") res.end("This is the PRODUCT");
  else if (pathName === "/api") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello world",
    });
    res.end("<h1>PAGE NOT FOUND!</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
