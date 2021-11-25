const express = require("express");
const app = express();
const path = require("path");
app.use(express.static("public"));

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Servidor corriendo en el puerto 3000');
})

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/register.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/login.html"));
});

app.get("/productCart", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/productCart.html"));
});

app.get("/libanti500ml", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/libanti500ml.html"));
});

app.get("/elia500ml", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/elia500ml.html"));
});

app.get("/elia5lt", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/elia5lt.html"));
});

app.get("/elia3lt", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/elia3lt.html"));
});

app.get("/libanti1lt", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/libanti1lt.html"));
});

app.get("/libanti5lt", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/libanti5lt.html"));
});

app.get("/libanti3lt", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/libanti3lt.html"));
});

app.get("/aceitunasVerdes", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/aceitunasverdes.html"));
});

app.get("/aceitunasGriegas", (req, res) => {
  res.sendFile(path.join(__dirname + "/views/aceitunasNegras.html"));
});