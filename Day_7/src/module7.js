// core/internal module
const fs = require("fs");

const promise = require("bluebird");

// promisification
promise.promisifyAll(fs);

let readDemo = async () => {

  try {

    // readFileAsync() for file1
    const filePath1 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

    const recvData1 = fs.readFileAsync(filePath1, {encoding : "utf-8"});

    // output for file1
    console.log(1, recvData1);

    // readFileAsync() for file2
    const filePath2 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

    const recvData2 = fs.readFileAsync(filePath2, {encoding : "utf-8"});

    // output for file2
    console.log(2, recvData2);

    // readFileAsync() for file3
    const filePath3 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

    const recvData3 = fs.readFileAsync(filePath3, {encoding : "utf-8"});

    // output for file3
    console.log(3, recvData3);

  }
  catch (err) {

    console.log("file not found", err);
  }

};

readDemo();