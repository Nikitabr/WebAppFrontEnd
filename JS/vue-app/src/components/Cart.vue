<template>
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <!-- List group-->
            <ul class="list-group shadow">
                <li v-for="item in cartStore.$state.cart" class="list-group-item">
                    <!-- Custom content-->
                    <div v-if="item.product != undefined"
                        class="media align-items-lg-center flex-column flex-lg-row p-3">
                        <div class="media-body order-2 order-lg-1">
                            <h5 class="mt-0 font-weight-bold mb-2">{{ item.product.title }}</h5>
                            <p class="font-italic text-muted mb-0 small">{{ item.product.description }}</p>
                            <div class="d-flex align-items-center justify-content-between mt-1">
                                <h6 class="font-weight-bold my-2">{{ item.product.price * item.quantity }}€</h6>
                                <ul class="list-inline small">
                                    <li v-for=" index in 5 " :key="index" class="list-inline-item m-0">
                                        <i v-if="index <= item.product.rating" class="fa fa-star text-success"></i>
                                        <i v-else class="fa fa-star-o text-gray"></i>
                                    </li>
                                </ul>
                            </div>
                        </div><img :src="item.product.picture" :alt="item.product.picture" width="200"
                            class="ml-lg-5 order-1 order-lg-2">
                        <input @click="deleteProduct(item)" type="submit" value="Delete" class="btn btn-danger right" />
                    </div>
                </li>
            </ul>
        </div>
        <div class="col">
            <RouterLink to="/order">
                <input type="submit" value="Order" class="btn btn-warning" />
            </RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RouterLink, RouterView } from "vue-router";


import { useIdentityStore } from "@/stores/identity";
import { useProductsStore } from "@/stores/products";
import { useCartsStore } from "@/stores/cart"
import type { IProduct } from "@/domain/IProduct";
import type { IProductCart } from "@/domain/IProductCart";

@Options({
    components: {
    },
    props: {},
    emits: [],
})
export default class Cart extends Vue {
    index: number = 0;
    productStore = useProductsStore();
    identityStore = useIdentityStore();
    cartStore = useCartsStore();


    products!: IProduct[];

    /*
      constructor() {
        super();
        
      }
        */

    async mounted(): Promise<void> {
        console.log("mounted");
        console.log(this.cartStore.cart);
        if(this.cartStore.cartCount == 0){
            this.$router.push('/');
        }
    }

    async deleteProduct(product: IProductCart): Promise<void> {
        console.log("delete");
        console.log(product);
        this.cartStore.cart.splice(this.cartStore.cart.indexOf(product), 1);
    }
}
</script>