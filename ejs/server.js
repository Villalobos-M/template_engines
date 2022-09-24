const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { Api } = require("./api");
const firstProduct = new Api();

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
   res.render("index.ejs");
});

const arrayProductos = firstProduct.getAllProducts();
app.get("/productos", (req, res) => {
   res.render("productsPage.ejs", { arrayProductos });
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
