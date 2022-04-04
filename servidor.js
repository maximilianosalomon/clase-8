//init
const express = require("express");

const app = express();
const routerProductos = express.Router();

app.use("/productos", routerProductos);

routerProductos.use(express.json());

//server
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));

//rutas
const productos = [];
routerProductos.get("/api/productos", (req, res) => {
  res.send(productos);
});

//get prod id
routerProductos.get("/api/productos/:id", (req, res) => {
  res.send(productoRandom);
});

//post prod id
routerProductos.post("/api/productos/:id", (req, res) => {
  res.send(productoRandom);
});

//put prod id
routerProductos.put("/api/productos/:id", (req, res) => {
  res.send(productoRandom);
});

//delete prod id
routerProductos.delete("/api/productos/:id", (req, res) => {
  res.send(productoRandom);
});
