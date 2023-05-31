
import type { ICountry } from "@/domain/ICountry";
import { defineStore } from "pinia";
export const useCountriesStore = defineStore({
  id: "countries",
  state: () => ({
    countries: [
    ] as ICountry[],
  }),
  getters: {
    countriesCount: (state) => state.countries.length,
  },
  actions: {
  },
});
