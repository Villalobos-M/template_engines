class Api {
   constructor() {
      this.arrayProducts = [];
   }

   getAllProducts() {
      return this.arrayProducts;
   }

   postProducts(productoGuardado) {
      if (this.arrayProducts.length === 0) {
         productoGuardado.id = 1;
      } else {
         let lastId = this.arrayProducts[this.arrayProducts.length - 1].id;
         productoGuardado.id = lastId + 1;
      }

      this.arrayProducts.push(productoGuardado);
      return this.arrayProducts;
   }
}

module.exports = { Api };
