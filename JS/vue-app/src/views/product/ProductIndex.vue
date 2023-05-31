<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <img :src="productStore.$state.products.find(a => a.id == id)?.picture" alt="" width="400"
                    height="400" />
            </div>
            <div class="col">
                <div class="info">
                    <h3>{{ productStore.$state.products.find(a => a.id == id)?.title }} </h3>
                    <h5>Available: {{ productStore.$state.products.find(a => a.id == id)?.quantity }}</h5>
                    <br>
                    <br>
                    <p>{{ productStore.$state.products.find(a => a.id == id)?.description }}</p>
                </div>

                <div class="purch">
                    <p class="purch">Price: {{ productStore.$state.products.find(a => a.id == id)?.price }} €</p>
                    <input v-if="productStore.$state.products.find(a => a.id == id)?.quantity! > 0" @click="addToCart()" type="submit" value="Add to Cart" class="btn btn-primary" />
                    <input v-else  disabled=true type="submit" value="Add to Cart" class="btn btn-primary" />
                </div>
            </div>
        </div>
        <div class="row">
            <div>
                <div v-for="item in productStore.$state.products.find(a => a.id == id)?.specificationTypes" class="row">
                    <h4>{{ item.title }}</h4>
                    <div class="row" v-for="spec in item.specifications">

                        <div class="col-7 flex text-xs font-label items-center mr-2">{{ spec.specificationName }}: </div>
                        <div class="col-7 text-sm font-medium text-primary-black">{{ spec.description }}</div>

                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div>
                <br>
                <br>
                <h5>Users comments:</h5>
                <div v-for="item in productStore.$state.products.find(a => a.id == id)?.feedbacks" class="comment">
                    <span>{{ getName(item.appUserId) }}: {{ item.description }}
                        <ul class="list-inline">
                            <li v-for=" index in 5 " :key="index" class="list-inline-item">
                                <i v-if="index <= item.rating" class="fa fa-star"></i>
                                <i v-else class="fa fa-star-o"></i>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </div>
    </div>


</template>

<script lang="ts">
import { ProductService } from "@/services/ProductService";
import { ProductTypeService } from "@/services/ProductTypeService";
import { AppUserService } from "@/services/AppUserService";
import { useProductsStore } from "@/stores/products";
import { useAppUsersStore } from "@/stores/user";
import { useProductTypesStore } from "@/stores/productTypes";
import { useIdentityStore } from "@/stores/identity";
import { useCartsStore } from "@/stores/cart";
import { Options, Vue } from "vue-class-component";
import type { IProduct } from "@/domain/IProduct";
import type { IAppUser } from "@/domain/IAppUser";
import './text.css';



@Options({
    components: {
    },
    props: {
        id: String,
    },
    emits: [],
})
export default class ProductIndex extends Vue {
    id!: string;
    product!: IProduct;
    userName!: string;

    identityStore = useIdentityStore();
    appUserStore = useAppUsersStore();
    appUserService = new AppUserService();
    productStore = useProductsStore();
    productService = new ProductService();
    productTypeService = new ProductTypeService();
    cartStore = useCartsStore();
    productTypesStore = useProductTypesStore();





    /*
      constructor() {
        super();
        
      }
        */

    async mounted(): Promise<void> {
        console.log("mounted");
        this.productStore.$state.products =
            await this.productService.getAll();
        this.product = this.productStore.$state.products.find(p => p.id == this.id)!;
    }

    getName(id: string): string {
        this.getUserName(id);
        return this.userName;
    }

    async getUserName(id: string): Promise<void> {
        var res = await this.appUserService.getById(id);
        this.userName = res.data?.firstName as string + " " + res.data?.lastName as string;
    }

    async addToCart(): Promise<void> {
        console.log(this.product);
        this.cartStore.addProduct(this.product);
        console.log(this.cartStore.cart);
        console.log("added");

    }

}

</script>

