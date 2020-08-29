const fs = require("fs");

const promise = require("bluebird");

// promisification of fs module
promise.promisifyAll(fs);

let readDemo = () => {

  // readFileAsynch() for file1
  const filePath1 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

  //fs.readFileAsynch(filePath1, {encoding : "utf-8"});
  fs.readFileAsync(filePath1, {encoding : "utf-8"})
  .then((data) => {

    // output for file1
    console.log(1, data);

    // readFileAsynch() for file1
    const filePath2 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

    return fs.readFileAsync(filePath2, {encoding : "utf-8"});
    
  })
  .then((data) => {

    // output for file2
    console.log(2, data);

    // readFileAsynch() for file1
    const filePath3 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

    return fs.readFileAsync(filePath3, {encoding : "utf-8"});
  })
  .then((data) => {

    // output for file3
    console.log(3, data);
  });

};

readDemo();