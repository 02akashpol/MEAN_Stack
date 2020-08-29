// importing third party or extrnal module  
const Promise = require("bluebird");

const mysql = require("mysql");

// promisification
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

// storing db_confi into var
const db_confi = {

  host : '127.0.0.1',
  user : 'root',
  password : 'Akashpol@123',
  database : 'MEAN_Stack'

};

// created async fun 
let databaseFun = async () => {

  // making connection with database
  const connection = mysql.createConnection(db_confi);

  // connection open // connecting asynchronously 
  await connection.connectAsync();

  // your query which has to be performed
  let sql = "SELECT * FROM STDINFO";

  let recvData = await connection.queryAsync(sql);

  // close connection
  await connection.endAsync();

  console.log(recvData);
  return recvData;
};

databaseFun();