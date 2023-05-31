
import type { IProductType } from "@/domain/IProductType";
import { defineStore } from "pinia";
export const useProductTypesStore = defineStore({
  id: "productTypes",
  state: () => ({
    productTypes: [
    ] as IProductType[],
  }),
  getters: {
    productTypes: (state) => state.productTypes.length,
  },
  actions: {
    add(productType: IProductType) {
      this.productTypes.push(productType);
    }
  },
});
