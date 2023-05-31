
import type { IPc } from "@/domain/IPc";
import type { IProduct } from "@/domain/IProduct";
import type { IProductCart } from "@/domain/IProductCart";
import type { IService } from "@/domain/IService";
import { defineStore } from "pinia";
export const useCartsStore = defineStore({
  id: "carts",
  state: () => ({
    cart: [] as IProductCart[]
  }),
  getters: {
    cartCount: (state) => state.cart.length
  },
  actions: {
    addProduct(product: IProduct) {
      // let exist = 0;
      //   for (let index = 0; index < this.cart.length; index++) {
      //     const element = this.cart[index];
      //     console.log(element);
      //     if(element.product == product){
      //       element.quantity += 1;
      //       this.cart.splice(index, 1, element);
      //       exist++;
      //     }
      //   }
      // console.log(exist);
      // if(exist == 0){
      console.log("new One");
      this.cart.push({
        id: this.cartCount.toString(),
        product: product,
        quantity: 1,
      });
      // }
      
    }
  },
});
