
import type { IAppUser } from "@/domain/IAppUser";
import { defineStore } from "pinia";
export const useAppUsersStore = defineStore({
  id: "users",
  state: () => ({
    users: [
    ] as IAppUser[],
  }),
  getters: {
    productCount: (state) => state.users.length,
  },
  actions: {
    add(user: IAppUser) {
      this.users.push(user);
    }
  },
});
