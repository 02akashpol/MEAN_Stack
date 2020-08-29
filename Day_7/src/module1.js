const fs = require("fs");

let readDemo = () => {

  // readFile() for file1
  const filePath1 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

  fs.readFile(filePath1, {encoding : "utf-8"}, (err, data) => {

    // output of file1
    console.log(1, data);

    // readFile() for file2
    const filePath2 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

    fs.readFile(filePath2, {encoding : "utf-8"}, (err, data) => {

      // output of file2
      console.log(2, data);

      // readFile() for file3
      const filePath3 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

      fs.readFile(filePath3, {encoding : "utf-8"}, (err, data) => {

        // output of file3
        console.log(3, data);

        // readFile() for file4
        const filePath4 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

        fs.readFile(filePath4, {encoding : "utf-8"}, (err, data) => {

          // output of file4
          console.log(4, data);

          // readFile() for file5
          const filePath5 = "D:/CDAC Data/CDAC Modules/MEAN_Stack/NodeJS_Assi_and_Work/day_7/demo01.txt";

          fs.readFile(filePath5, {encoding : "utf-8"}, (err, data) => {

            // output of file5
            console.log(5, data);
          });
        });
      });
    });
  });
}

readDemo();