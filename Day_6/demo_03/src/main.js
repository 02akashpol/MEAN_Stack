/*
* Start the node program in Background
 * node src/main.js &
 *
 * To Kill the NodeJS Background
 * kill -9 $(lsof -t -i:3000 -sTCP:LISTEN)
*/

// importing module file and assigning to the var
let module1 = require("./module1");

const http = require("http");

http
  .createServer((req, res) => {

    // CORS enabled
    // res.setHeader("Access-Control-Allow-Origin", "");
    res.setHeader("Access-Control-Allow-Origin", "*");

    // use of stringify to covert JSON obj into the string and sending to the server  
    const recvData = JSON.stringify(module1.jsonObj);

    console.log(recvData);

    // if there are bunch of sets of data then res.end will help to
    // wind up that data in continus format
    res.end(recvData);

  })
  .listen(5600);