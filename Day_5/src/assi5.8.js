class per {

  constructor() {

    console.log("Created parameterless ctr.");
  }

  getPerName() {

    return "name1";
  }

  getPerAddr() {

    return "address1";
  }

  getDetails() {

    const name = this.getPerName();

    const addr = this.getPerAddr();

    return name + " " + addr;
  }
  
  static main() {

    let obj = new per();

    const perDetails = obj.getDetails();

    console.log(perDetails);
  }

}

per.main();