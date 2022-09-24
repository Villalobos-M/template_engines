const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "pug");

const { Api } = require("./api");
const firstProduct = new Api();

app.get("/", (req, res) => {
   res.render("index.pug");
});

const arrayProductos = firstProduct.getAllProducts();
app.get("/productos", (req, res) => {
   if (arrayProductos.length >= 1){
      res.render("tabla.pug", { arrayProductos });
   }else{
      res.render("tabla.pug", { undefined });
   }
   console.log(arrayProductos);
});

app.post("/productos", (req, res) => {
   const productoGuardado = req.body;
   console.log(productoGuardado);
   firstProduct.postProducts(productoGuardado);
   res.redirect("/");
});

const PORT = 8082;
app.listen(PORT, () => {
   console.log(`Escuchando al puerto ${PORT}`);
});
