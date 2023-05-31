
import type { IProduct } from "@/domain/IProduct";
import { defineStore } from "pinia";
export const useProductsStore = defineStore({
  id: "products",
  state: () => ({
    products: [
    ] as IProduct[],
  }),
  getters: {
    productCount: (state) => state.products.length,
  },
  actions: {
    add(product: IProduct) {
      this.products.push(product);
    }
  },
});
