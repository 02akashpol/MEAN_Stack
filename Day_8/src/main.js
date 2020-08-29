let demoFun = () => {

  for (let i = 0; i < 10; i++) {

    console.log("demo fun without returning any value.");
  }

  console.log("calling of fun1 is done.");

};

let demoFun1 = () => {

  console.log("calling of fun2.");
}

demoFun();

demoFun1();