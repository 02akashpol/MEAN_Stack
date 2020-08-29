const fs = require("fs");

// without error handling
let readDemo = () => {

  const filePath = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt.txt";

  fs.readFile(filePath, {encoding : "utf-8"}, (err, data) => {
    console.log(data);
  });
};


// with error handling
let readDemo1 = () => {

  try {

    const filePath = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo0.txt.txt";

    fs.readFile(filePath, {encoding : "utf-8"}, (err, data) => {
      console.log(data);
      console.log(err);
    });
  }

  catch (err) {
   console.log("we are in catch", err); 
  }
  
};

readDemo1();