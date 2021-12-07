const express = require("express");
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');
const productos = require ('./routers/products')
const mainrouter = require ('./routers/main')

app.listen(process.env.PORT || 3000, ()=>{
  console.log('Servidor corriendo en el puerto 3000');
})

app.get("/", mainrouter);
app.get("/register", mainrouter);
app.get("/login", mainrouter);
app.get("/productCart", mainrouter);

app.get("/aceitunasgriegas", productos);
app.get("/aceitunasverdes", productos);
app.get("/elia5lt", productos);
app.get("/elia3lt", productos);
app.get("/elia500ml", productos);
app.get("/libanti5lt", productos);
app.get("/libanti3lt", productos);
app.get("/libanti1lt", productos);
app.get("/libanti500ml", productos);

