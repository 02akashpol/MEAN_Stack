
// exporting modules and assigning to the var

let module1 = require("./modules/module1");

let module2 = require("./modules/module2");

let module3 = require("./modules/module3");

let module4 = require("./modules/module4");

console.log("executing main file funs.");

// printing values from module1
console.log("values from module1 : ", module1);

// printing values from module2
console.log("values from module2 : ", module2);

// printing values from module3
var sumOutput = module3.sumFun(10, 20);
console.log("value of sumFun from module3 : ", sumOutput);

var divOutput = module3.divFun(100, 20);
console.log("value of divFun from module3 : ", divOutput);

// printing values from module4
/* var sumOutput4 = module4.sumFun(10, 20);
console.log("value of sumFun from module4 : ", sumOutput4);

var diffOutput4 = module4.diffFun(100, 20);
console.log("value of diffFun from module4 : ", divOutput4);
*/

console.log("values from module2 : ", module4);