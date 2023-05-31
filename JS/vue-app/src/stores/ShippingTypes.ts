
import type { IShippingType } from "@/domain/IShippingType";
import { defineStore } from "pinia";
export const useShippingTypesStore = defineStore({
  id: "shippingTypes",
  state: () => ({
    shippingTypes: [
    ] as IShippingType[],
  }),
  getters: {
    shippingTypesCount: (state) => state.shippingTypes.length,
  },
  actions: {
    
  },
});
