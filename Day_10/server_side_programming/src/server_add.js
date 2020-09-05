const Promise = require("bluebird");

const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const db_config = require("./db_config");

const dbAddFun = async (input) => {

  try {

    const connection = mysql.createConnection(db_config.db_config);

    await connection.connectAsync();
  
    const sql = "INSERT INTO USERINFO (username, password, email, mobile) VALUES (?, ?, ?, ?)";
  
    const recvAddData = await connection.queryAsync(sql, [
  
      input.username,
      input.password,
      input.email,
      input.mobile
  
    ]);
  
    await connection.endAsync();
  
    return recvAddData;
  }
  catch (err) {

    return err;
  }

};

module.exports = { dbAddFun };