const fs = require("fs");
const http = require("http");
const url = require("url");

/////////////////////////////////////
//Blocking, synchronous method
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// console.log(textIn);

// const textOut = `this is what we know about the avocado ${textIn}.\nCreated on ${Date.now()}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written");

////////////////////////////////
//non-blocking, asynchronous method
// fs.readFile("./txt/startttgirl.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("Nah bruh ur code not working ");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile(
//         "./txt/final.txt",
//         `${data2}\n\n${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("Your shit been written");
//         }
//       );
//     });
//   });
// });
// console.log("Will read file!");

/////////////////////////////////////
//SERVER
// fs.readFile(`${__dirname}/dev-data/data.json`, "utf-8", (err, data) => {
//     const productData = JSON.parse(data);
//     console.log(productData);
//     res.writeHead(200, {
//       "Content-type": "application/json",
//     });
//     res.end(data);
//   });

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   console.log(req.url);
  //   res.end("Hi from server !!");
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is OVERVIEW bro");
  } else if (pathName === "/product") {
    res.end("This is Product bro");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
      "my-own-header-type-shit": "hi-worlddd",
    });
    res.end("<h1>page not found</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
});
