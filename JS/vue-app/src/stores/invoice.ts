
import type { IInvoice } from "@/domain/IInvoice";
import { defineStore } from "pinia";
export const useInvoicesStore = defineStore({
  id: "invoices",
  state: () => ({
    invoices: [
    ] as IInvoice[],
  }),
  getters: {
    invoicesCount: (state) => state.invoices.length,
  },
  actions: {
    add(invoice: IInvoice) {
      this.invoices.push(invoice);
    }
  },
});
