
import type { IOrder } from "@/domain/IOrder";
import { defineStore } from "pinia";
export const useOrdersStore = defineStore({
  id: "orders",
  state: () => ({
    orders: [
    ] as IOrder[],
  }),
  getters: {
    ordersCount: (state) => state.orders.length,
  },
  actions: {
    add(product: IOrder) {
      this.orders.push(product);
    }
  },
});
