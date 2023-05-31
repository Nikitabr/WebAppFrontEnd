<template>
    <h2>Your invoice:</h2>
    <div class="container">
        <div class="row">
            <div class="col-8">Name: {{ invoice.firstName }} {{ invoice.lastName }}</div>
        </div>
        <div class="row">
            <div class="col-8">Order number: {{ invoice.orderId }}</div>
        </div>
        <div class="row">
            <div class="col-8">Email: {{ invoice.email }}</div>
        </div>
        <div class="row">
            <div class="col-8">Delivery by: {{ invoice.deliveryMethod }}</div>
        </div>
        <div class="row">
            <div class="col-8">Payment: {{ invoice.paymentMethod }}</div>
        </div>
        <div class="row">
            <div class="col-8">Code: {{ invoice.code }}</div>
        </div>
        <div class="row">
            <div class="col-8">List of products:
                <li v-for="item in products">
                    {{ item.product?.title }} - {{ item.product?.price }}
                </li>
            </div>
        </div>
        <div class="row">
            <div class="col-8">Total value: {{ totalPrice }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { useCartsStore } from "@/stores/cart";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";
import { useIdentityStore } from "@/stores/identity";
import { InvoiceService } from "@/services/InvoiceService";
import { useInvoicesStore } from "@/stores/invoice";
import "./invoice.css";
import type { IProductCart } from "@/domain/IProductCart";
import type { IInvoice } from "@/domain/IInvoice";

@Options({
    components: {
    },
    props: {
        totalPrice: Number,
        invoiceId: String,
    },
    emits: [],
})
export default class Invoice extends Vue {
    invoiceId!: string;

    identityStore = useIdentityStore();
    cartStore = useCartsStore();
    invoiceService = new InvoiceService();
    invoicesStore = useInvoicesStore();


    totalPrice: number = 0;
    invoice: IInvoice = this.invoicesStore.invoices.find(i => i.id === this.invoiceId)!;

    products: IProductCart[] = [];
        
    appUserId: string = this.identityStore.$state.jwt ?
        this.identityStore.$state.jwt?.appUserId : "dbec4190-da9e-4e6d-a855-a18bacd7f709";
    
    async created(): Promise<void> {
        console.log("cerated");
        for(var a of this.invoicesStore.invoices){
            if(a.id === this.invoiceId){
                this.invoice = a;
            }
        }
    }
    async beforeMount(): Promise<void> {
        console.log("beforeMount");
        console.log(this.appUserId);
        console.log(this.invoice);
        console.log(this.invoiceId);
    }

    async mounted(): Promise<void> {
        console.log("mounted");

        console.log(this.invoiceId);

        this.products = this.cartStore.cart;

        for(var item of this.products){
            this.totalPrice += item.product?.price!;
        }

        this.cartStore.$state.cart = [];
    }


}

</script>