const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config2 = require("./db_config");

const dbAddFun = async (input) => {

  const connection = mysql.createConnection(db_config2.db_config);

  await connection.connectAsync(); 

  /*
  const sql = "INSERT INTO STDINFO (SNUM, SNAME, CITY, CENTER) VALUES (?, ?, ?, ?)";

  await connection.queryAsync(sql, [06, "Pravin Dongare", "ANagar", "Juhu"]);
  */

  const sql = "INSERT INTO STDINFO (SNUM, SNAME, CITY, CENTER) VALUES (?, ?, ?, ?)";

  await connection.queryAsync(sql, [
    input.snum,
    input.sname,
    input.city,
    input.center
  ]);

  await connection.endAsync();

  return;

};

module.exports = { dbAddFun };