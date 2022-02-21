/*const http = require("http");

const server = http.createServer(function(req, res) {

  // A l'arrivée d'une requête
  res.write("Hello World!");
  res.end();
})

// Lancer le serveur
server.listen(3000);
*/

const express = require('express')
const app = express()

app.get('/', (req,res) => {
  res.send('Hello World')
})

app.get('/health',(req,res) => {
  res.send('I')
})

app.listen(8080,() => {
  console.log("Server up and running")
})