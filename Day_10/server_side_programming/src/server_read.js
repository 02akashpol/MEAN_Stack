const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config1 = require("./db_config");

const dbReadFun = async (input) => {

  try {

    const connection = mysql.createConnection(db_config1.db_config);

    await connection.connectAsync();
  
    const sql = "SELECT * FROM USERINFO WHERE email = ?";
  
    const recvData = await connection.queryAsync(sql, [input]);
  
    await connection.endAsync();
  
    return recvData; 
  
  }
  catch (err) {

    return err;
  }

};

module.exports = { dbReadFun };