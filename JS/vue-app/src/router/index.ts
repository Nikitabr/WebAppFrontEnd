import Login from "@/views/identity/Login.vue";
import Register from "@/views/identity/Register.vue";
import Logout from "@/views/identity/Logout.vue";
import Orders from "@/views/identity/Orders.vue";
import Cart from "@/components/Cart.vue";
import ProductIndex from "@/views/product/ProductIndex.vue"
import Order from "@/views/order/Order.vue";
import Invoice from "@/views/invoice/Invoice.vue"

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/identity/account/login",
      name: "login",
      component: Login,
    },
    {
      path: "/identity/account/register",
      name: "register",
      component: Register
    },
    {
      path: "/identity/account/orders",
      name: "orders",
      component: Orders
    },
    {
      path: "/identity/account/logout",
      name: "logout",
      component: Logout
    },
    { path: "/invoice", name: "invoice", component: Invoice, props: true},
    { path: "/order", name: "order", component: Order},
    { path: "/product", name: "product", component: ProductIndex, props: true},
    { path: "/cart", name: "cart", component: Cart},
  ]
});

export default router;
