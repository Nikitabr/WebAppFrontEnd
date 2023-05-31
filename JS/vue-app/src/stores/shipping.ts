
import type { IShippingInfo } from "@/domain/IShippingInfo";
import { defineStore } from "pinia";
export const useShippingInfosStore = defineStore({
  id: "shiuppingInfos",
  state: () => ({
    shippingInfos: [
    ] as IShippingInfo[],
  }),
  getters: {
    shippingInfosCount: (state) => state.shippingInfos.length,
  },
  actions: {
    
  },
});