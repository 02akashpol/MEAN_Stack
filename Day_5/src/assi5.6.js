// to perform a calculator operations
class cal {

  addFun(num1, num2) {

    return num1 + num2;
  }

  subFun(num1, num2) {

    return num1 - num2;
  }

}

let obj = new cal();

let output = obj.addFun(1, 2);

let output1 = obj.subFun(10, 2);

console.log("Addition is : ", output);

console.log("Subtraction is : ", output1);