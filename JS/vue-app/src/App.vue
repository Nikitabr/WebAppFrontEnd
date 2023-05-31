<template>
  <Header />

  <div class="container">
    <main role="main" class="pb-3">
      <RouterView />
    </main>
  </div>

  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";


import { usePersonsStore } from "@/stores/persons";
import { useIdentityStore } from "@/stores/identity";
import { useProductsStore } from "@/stores/products";
import { PersonService } from "./services/PersonService";
import { useCartsStore } from "@/stores/cart"
import HomeView from "./views/HomeView.vue";

@Options({
  components: {
    Header, Footer
  }
})
export default class App extends Vue {
  productStore = useProductsStore();
  identityStore = useIdentityStore();
  cartStore = useCartsStore();

  /*
    constructor() {
      super();
      
    }
      */

  async mounted(): Promise<void> {
    console.log("mounted");
  }
}
</script>


