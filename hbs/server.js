const express = require("express");
const hbs = require("express-handlebars");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
   "hbs",
   hbs.engine({
      extname: ".hbs",
      partialsDir: __dirname + "/views/partials",
      layoutsDir: __dirname + "/views/layouts",
      defaultLayout: "layout1.hbs",
   })
);
app.set("views", "./views");
app.set("view engine", "hbs");

const { Api } = require("./api");
const firstProduct = new Api();

app.get("/", (req, res) => {
   res.render("index.hbs", { layout: "layout1.hbs" });
});

const arrayProductos = firstProduct.getAllProducts();
app.get("/productos", (req, res) => {
   res.render("tabla.hbs", { layout: "layout2.hbs", arrayProductos });
   console.log(arrayProductos);
});

app.post("/productos", (req, res) => {
   const ProductoGuardar = req.body;
   console.log(ProductoGuardar);
   firstProduct.postProducts(ProductoGuardar);
   res.redirect("/");
});

const PORT = 8080;
app.listen(PORT, () => {
   console.log(`Escuchando al puerto ${PORT}`);
});
