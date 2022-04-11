//import
// const { request } = require("express");
const express = require("express");
// const productos = require("./listaProductos");

const app = express();
const routerProductos = express.Router();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + "public"));
app.use("/api", routerProductos);

// routerProductos.use(express.json());

// Productos
const listaProductos = [
  {
    title: "Escuadra",
    price: 123.45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
    id: 1,
  },
  {
    title: "Calculadora",
    price: 234.56,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
    id: 2,
  },
  {
    title: "Globo Terráqueo",
    price: 345.67,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
    id: 3,
  },
];

const productos = listaProductos;
// const productos = [];

//rutas
//index
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
//todos los productos
routerProductos.get("/productos", (req, res) => {
  if (productos.length === 0) {
    res.send("Error: no hay productos!");
  } else {
    res.send(JSON.stringify(productos, null, 10));
  }
});

//productos por id
routerProductos.get("/productos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  const producto = productos.find((producto) => producto.id === id);
  if (producto === undefined) {
    // res.send("Error no hay productos!");
    res.send(`Error: El id "${id}" no corresponde a un item existente`);
  } else {
    res.send(producto);
  }
});
// ingreso de producto por id (post prod id)
routerProductos.post("/productos/", (req, res) => {
  const item = req.body;
  const ids = productos.map((producto) => producto.id);
  const maxId = Math.max(...ids);
  const newProd = {
    id: maxId + 1,
  };

  res.send(item);
});

// //put prod id
// routerProductos.put("/productos/:id", (req, res) => {
//   res.send(productoRandom);
// });

// //delete prod id
// routerProductos.delete("/productos/:id", (req, res) => {
//   res.send(productoRandom);
// });

//Server
const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});
server.on("error", (error) => console.log(`Error en servidor ${error}`));
