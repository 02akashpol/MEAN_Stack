const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let databaseFun = async () => {

  try {

    const connection = mysql.createConnection({

      host : '127.0.0.1',
      user : 'root',
      password : 'Akashpol@123',
      database : 'MEAN_Stack'
    });

    await connection.connectAsync();

    console.log("connection successful.");

    await connection.Async();
  }

  catch (err) {

    console.log(err);
  }

};

databaseFun();