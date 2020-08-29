
const express = require("express");

const app = express();

const dbReadFun1 = require("./db_read");

const dbAddFun1 = require("./db_add");



/*
app.get("/", async (req, res) => {

  const connection = mysql.createConnection(db_config);

  await connection.connectAsync();

  const sql = "SELECT * FROM STDINFO";

  const recvData = await connection.queryAsync(sql);

  await connection.endAsync();

  res.json(recvData);

});
*/

app.get("/getrecord", async (req, res) => {

  try {

    const recvReadData = await dbReadFun1.dbReadFun();

    res.json(recvReadData);  

  }
  catch (err) {

    const errMsg = "connection failed"

    res.json(errMsg);

  }

});

app.get("/addrecord", async (req, res) => {

  try {

    const input = req.query;

    await dbAddFun1.dbAddFun(input);

    const sccMsg = "record added successfully."
  
    res.json(sccMsg);  

  }
  catch (err) {

    const errMsg = "connection failed";

    res.json(errMsg);
  }

});

app.listen(3500);