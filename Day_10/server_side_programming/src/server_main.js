const express = require("express");

const cors = require("cors");

const app = express();

const dbReadFun = require("./server_read");

const dbAddFun = require("./server_add");

app.use(cors());
app.use(express.json());

/*
app.get("/getdata", (req, res) => {

  try { 

    const recvReadData = dbReadFun.dbReadFun();

    res.json(recvReadData);
  
  }
  catch (err) {

    const errMsg = "connection failed.";

    res.json(errMsg);
  }


});
*/

app.post("/adddata", async (req, res) => {

  try {

    const input = req.body;

    const recvAddData = await dbAddFun.dbAddFun(input);

    const sccMsg = "data added successfully.";
  
    res.json(sccMsg);
  
  }
  catch (err) {

    const errMsg = "connection failed.";

    res.json(errMsg);
  }

});

app.get("/getdata", async (req, res) => {

  try {

    //const input = req.query;

    const input = "akash@gmail.com";

    const recvGetdata = await dbReadFun.dbReadFun(input);

    res.json(recvGetdata);

    console.log(recvGetdata);

  }
  catch (err) {

    const errMsg = "connection failed.";

    console.log(errMsg);

  }

});

app.listen(3000);