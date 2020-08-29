// core/internal module
const fs = require("fs");

const promise = require("bluebird");

// promisification
promise.promisifyAll(fs);

let readDemo = () => {

  // readFileAsync() for file1
  const filePath1 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt.txt";

  fs.readFileAsync(filePath1, {encoding : "utf-8"})
  .then((data) => {

    // output for file1
    console.log(1, data);

    // readFileAsync() for file2
    const filePath2 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";
    return fs.readFileAsync(filePath2, {encoding : "utf-8"});
  })
  .then((data) => {

    // output for file2
    console.log(2, data);

    // readFileAsync() for file3
    const filePath3 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";
    return fs.readFileAsync(filePath3, {encoding : "utf-8"});
  })
  .then((data) => {

    // output for file3
    console.log(3, data);
  })
  .catch((err) => {

    console.log("file not found", err);
  });

};

readDemo();