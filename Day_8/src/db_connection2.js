const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_confi = {

  host : '127.0.0.1', // or 'localhost'
  user : 'root',
  password : 'Akashpol@123',
  database : 'MEAN_Stack'

};

let databaseFun = async () => {

  // making connection with db
  const connection = mysql.createConnection(db_confi);

  // connection open
  await connection.connectAsync();

  let sql = "INSERT INTO STDINFO (Snum, Sname, City, Center) VALUES (?, ?, ?, ?)";

  let recvData = await connection.queryAsync(sql, [
    04,
    "Mohit Mahajan",
    "MP",
    "Juhu"
  ]);

  // connection end
  await connection.endAsync();

  console.log(recvData);

  return recvData;

};

databaseFun();