
import type { IPaymentType } from "@/domain/IPaymentType";
import { defineStore } from "pinia";
export const usePaymentsStore = defineStore({
  id: "payments",
  state: () => ({
    payments: [
    ] as IPaymentType[],
  }),
  getters: {
    paymentCount: (state) => state.payments.length,
  },
  actions: {
    
  },
});
