// to perform a calculator operations
class cal {

  addFun(num1, num2) {

    return num1 + num2;
  }

  subFun(num1, num2) {

    return num1 - num2;
  }

  static main() {

    let obj = new cal();

    let output = obj.addFun(1, 2);

    console.log("Addition is : ", output);
  }

}

cal.main();
