<template>
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <!-- List group-->
            <ul class="list-group shadow">
                <li v-for="item in ordersStore.orders" class="list-group-item">
                    <!-- Custom content-->
                        <div class="media-body order-2 order-lg-1">
                            <h5 class="mt-0 font-weight-bold mb-2">Order id: {{ item.id }}</h5>
                            <p class="font-italic text-muted mb-0 small">Payment id: {{ item.paymentTypeId }}</p>
                            <template>

                            </template>
                            <p class="font-italic text-muted mb-0 small">{{ getProduct(item.productInOrders!) }}</p>
                            <div class="d-flex align-items-center justify-content-between mt-1">
                                <h6 class="font-weight-bold my-2">Price: {{ item.price }}€</h6>
                            </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RouterLink, RouterView } from "vue-router";


import { useIdentityStore } from "@/stores/identity";
import { useOrdersStore } from "@/stores/order";
import { OrderService } from "@/services/OrderService";
import { useCartsStore } from "@/stores/cart"
import type { IProduct } from "@/domain/IProduct";
import { useProductsStore } from "@/stores/products";
import { ProductService } from "@/services/ProductService";
import type { IProductInOrder } from "@/domain/IProductInOrder";

@Options({
    components: {
    },
    props: {},
    emits: [],
})
export default class Orders extends Vue {
    index: number = 0;
    ordersStore = useOrdersStore();
    orderService = new OrderService();
    productsStore = useProductsStore();
    productService = new ProductService();
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
        this.ordersStore.$state.orders = await this.orderService.getAll();
        this.productsStore.$state.products = await this.productService.getAll();

    }
    // getName(id: string): string {
    //     this.getUserName(id);
    //     return this.userName;
    // }

    // async getUserName(id: string): Promise<void> {
    //     var res = await this.appUserService.getById(id);
    //     this.userName = res.data?.firstName as string + " " + res.data?.lastName as string;
    // }

    getProduct(priductInOrder: IProductInOrder[]): IProduct[]{
        console.log("prod");
        console.log(priductInOrder);
        this.getOrderProducts(priductInOrder);
        return this.products;
    }


    async getOrderProducts(productInOrders: IProductInOrder[]): Promise<void>{
        console.log("prodOrd");
        console.log(productInOrders);
        console.log(productInOrders[0].productId);
        for(var product of productInOrders){
            this.productsStore.$state.products = await this.productService.getAll();
            for(var pp of this.productsStore.products){
                if(pp.id == product.productId){
                    var prod = pp;
                    console.log(prod);
                    this.products.push(prod as IProduct);
                }
            }
        }
    }
}
</script>