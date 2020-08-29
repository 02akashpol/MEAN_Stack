const express = require("express");

// an instance of express
const app = express();

//http://localhost:3000/ : url : API : REST API
//http://localhost:3000/?id=03&username=Akash


// creating server using express
app.get("/", (req, res) => {

  const id = req.query.id;
  const username = req.query.username;

  // json object which we are passing
  const jsonObj = [
    {id : 01, username : "Akash Pol"},
    {id : 02, username : "Avinash Shinde"}
  ];

  // response from server
  res.json(jsonObj);

});

app.get("/search", (req, res) => {

  const jsonObj1 = [
    {message : "Welcome to CDAC!!!"},
    {'message' : "Currently, NodeJS is going on."}
  ];

  res.json(jsonObj1);
});

// server hosted on this port
app.listen(3000);