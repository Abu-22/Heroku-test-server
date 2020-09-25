const express = require('express');
const app = express(),
      bodyParser = require("body-parser");
      port = 8080;
      const path = require('path');
const users = [];

app.use(bodyParser.json());
app.use(express.static(__dirname+"/dist/smartgrade-webapp/"));

app.get('/api/users', (req, res) => {
  console.log("Server responds with list of users added so far");
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user added to server.");
});

app.get('/*', (req,res) => {
  res.sendFile(__dirname+"/dist/smartgrade-webapp/index.html")
});

app.listen(process.env.PORT || port, () => {
    console.log('Server listening on the port::'+ port);
});
