//init
const express = require("express");
const app = express();
// app.use(express.json)
// app.use(express.urlencoded({extended:true}))

//server
const PORT = process.env.port || 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

//rutas
app.get("/api/productos", (req, res) => {
  res.send("products");
});

//get prod id
app.get("/api/productos/:id", (req, res) => {
    res.send(productoRandom);
});

//post prod id
app.post("/api/productos/:id", (req, res) => {
    res.send(productoRandom);
});

//put prod id
app.put("/api/productos/:id", (req, res) => {
    res.send(productoRandom);
});

//delete prod id
app.delete("/api/productos/:id", (req, res) => {
  res.send(productoRandom);
});


