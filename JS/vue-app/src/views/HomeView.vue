<template>
    <div class="album py-5 bg-light">

        <div class="container">

            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                <div v-for="product of productsStore.products" :key="product.id">


                    <RouterLink :to="{ name: 'product', params: { id: product.id } }">
                        <div class="thumb-wrapper">
                            <div class="img-box">
                                <img :src="product.picture" class="img-responsive prod" alt="">
                            </div>
                            <div class="thumb-content">
                                <h4><span>{{ product.title }}</span></h4>
                                <div class="star-rating">
                                    <ul class="list-inline">
                                        <li v-for=" index in 5 " :key="index" class="list-inline-item">
                                            <i v-if="index <= product.rating" class="fa fa-star"></i>
                                            <i v-else class="fa fa-star-o"></i>
                                        </li>
                                    </ul>
                                </div>
                                <p class="item-price"><b><span>{{ product.price }}€</span></b></p>

                            </div>
                        </div>
                    </RouterLink>

                    <input v-if="product.quantity > 0" @click="addToCart(product)" type="submit" value="Add to Cart"
                        class="btn btn-primary" />
                    <input v-else disabled=true type="submit" value="Add to Cart" class="btn btn-primary" />


                </div>

            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ProductService } from "@/services/ProductService";
import { useProductsStore } from "@/stores/products";
import { useCartsStore } from "@/stores/cart";

import '@/views/css/site.css';
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";
import type { IProduct } from "@/domain/IProduct";
import { useIdentityStore } from "@/stores/identity";

@Options({
    components: {
    },
    props: {
        input: String
    },
    emits: [],
})
export default class HomeView extends Vue {
    id: string = "home";

    identityStore = useIdentityStore();
    productsStore = useProductsStore();
    productService = new ProductService();
    cartStore = useCartsStore();


    async mounted(): Promise<void> {
        console.log("mounted");
        this.productsStore.$state.products =
            await this.productService.getAll();
    }

    async addToCart(product: IProduct): Promise<void> {
        console.log("clicked");
        this.cartStore.addProduct(product);
    }
}

</script>
