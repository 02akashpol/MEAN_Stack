// core/internal module
const fs = require("fs");

const promise = require("bluebird");

// promisification : converts all the callback methods and return as promise
promise.promisifyAll(fs);


let readDemo = () => {

  const filePath = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

  const promise = fs.readFileAsync(filePath, {encoding : "utf-8"});

  promise.then((data) => {

    console.log(data);
  });

  promise.catch((err) => {

    console.log("file not found.", err);
  });

};

readDemo();