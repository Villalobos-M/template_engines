class Api {
   constructor() {
      this.arrayProducts = [];
   }

   getAllProducts() {
      return this.arrayProducts;
   }

   postProducts(productoGuardar) {
      if (this.arrayProducts.length === 0) {
         productoGuardar.id = 1;
      } else {
         let lastId = this.arrayProducts[this.arrayProducts.length - 1].id;
         productoGuardar.id = lastId + 1;
      }

      this.arrayProducts.push(productoGuardar);
      return this.arrayProducts;
   }
}

module.exports = { Api };
