<template>
    <div class="container">
        <div class="row">
            <div class="col-4">
                <h5>List of products:</h5>
                <div class="row" v-for="prod in cartStore.$state.cart">
                    <p v-if="prod.product != undefined">{{ prod.product.title }} - {{ prod.product.price }}€</p>
                </div>
            </div>
            <div class="col-4">
                <h5>Choose payment:</h5>
                <div v-for="payment in paymentsStore.payments">
                    <input type="radio" :id="payment.id" :value="payment.id" v-model="paymentId" />
                    <label class="control-label" :for="payment.id">{{ payment.paymentName }}</label>
                </div>
            </div>
            <div class="col-4">
                <h5>Choose delivery: </h5>
                <div v-for="shipType in shippingTypesStore.shippingTypes">
                    <input type="radio" :id="shipType.id" :value="shipType.id" v-model="shippingTypeId" />
                    <label class="control-label" :for="shipType.id">{{ shipType.title }}</label>
                </div>
            </div>
        </div>
        <div class="row">

        </div>
        <div class="row">

            <div>
                <div class="form-group">
                    <select v-model="countryName">
                        <option disabled value="">Please select one</option>
                        <option v-for="country in countriesStore.$state.countries">
                            {{ country.countryName }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="control-label" for="city">City</label>
                    <input v-model="city" class="form-control" type="text" />
                </div>
                <div class="form-group">
                    <label class="control-label" for="address1">Address1</label>
                    <input v-model="address1" class="form-control" type="text" />
                </div>
                <div class="form-group">
                    <label class="control-label" for="address2">Address2</label>
                    <input v-model="address2" class="form-control" type="text" />
                </div>
                <div class="form-group">
                    <label class="control-label" for="postalCOde">Postal Code</label>
                    <input v-model="postalCode" class="form-control" type="text" />
                </div>
                <div class="form-group">
                    <label class="control-label" for="phoneNumber">Phone number</label>
                    <input v-model="phoneNumber" class="form-control" type="text" />
                </div>
                <div class="form-group">
                    <label class="control-label" for="MailAddress">Email</label>
                    <input v-model="MailAddress" class="form-control" type="text" />
                </div>
                <br>
                <br>
                <h4>In total: {{ totalPrice }}</h4>

            </div>

            <input v-if="paymentId != '' && shippingTypeId != '' && postalCode != ' ' && countryName != ' '"
                @click="createOrder()" type="submit" value="Buy" class="btn btn-warning" />
        </div>

    </div>
</template>

<script lang="ts">
import { useCartsStore } from "@/stores/cart";
import { usePaymentsStore } from "@/stores/paymentTypes";
import { PaymentTypeService } from "@/services/PaymentTypeService";
import { useShippingTypesStore } from "@/stores/ShippingTypes";
import { ShippingTypeService } from "@/services/ShippingTypeService";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";
import { useIdentityStore } from "@/stores/identity";
import { useOrdersStore } from "@/stores/order";
import { OrderService } from "@/services/OrderService";
import { ProductService } from "@/services/ProductService";
import { ProductInOrderService } from "@/services/ProductInOrderService";
import { useCountriesStore } from "@/stores/country";
import { CountryService } from "@/services/CountryService";
import { ShippingInfoService } from "@/services/ShippingInfoService";
import { useShippingInfosStore } from "@/stores/shipping";
import { InvoiceService } from "@/services/InvoiceService";
import { useInvoicesStore } from "@/stores/invoice";
import type { IProduct } from "@/domain/IProduct";

@Options({
    components: {
    },
    props: {},
    emits: [],
})
export default class Order extends Vue {

    identityStore = useIdentityStore();
    cartStore = useCartsStore();
    paymentsStore = usePaymentsStore();
    paymentService = new PaymentTypeService();
    shippingTypesStore = useShippingTypesStore();
    shippingTypeService = new ShippingTypeService();
    ordersStore = useOrdersStore();
    orderService = new OrderService();
    countriesStore = useCountriesStore();
    countryService = new CountryService();
    shippingStore = useShippingInfosStore();
    shippingService = new ShippingInfoService();
    productInOrderService = new ProductInOrderService();
    productService = new ProductService();
    invoiceService = new InvoiceService();
    invoicesStore = useInvoicesStore();



    id: string = "order";
    totalPrice: number = 0;

    appUserId: string = '';
    paymentId: string = '';
    shippingTypeId: string = '';
    shippingInfoId: string = '';
    errorMsg: string = '';

    countryName: string = ' ';
    countryId: string = ' ';
    city: string = ' ';
    address1: string = ' ';
    address2: string = ' ';
    postalCode: string = ' ';
    phoneNumber: string = ' ';
    MailAddress: string = ' ';
    orderId: string = '';





    async mounted(): Promise<void> {
        console.log("Order mounted");

        console.log(this.identityStore.jwt);

        for (var product of this.cartStore.$state.cart) {
            this.totalPrice += product.product?.price!;
        }

        this.paymentsStore.$state.payments =
            await this.paymentService.getAll();

        this.shippingTypesStore.$state.shippingTypes =
            await this.shippingTypeService.getAll();

        this.countriesStore.$state.countries =
            await this.countryService.getAll();
    }

    async createOrder(): Promise<void> {
        this.countryId = this.countriesStore.countries.find(c => c.countryName == this.countryName)?.id!;
        var ship = this.shippingService.add({
            shippingTypeId: this.shippingTypeId,
            countryId: this.countryId,
            city: this.city,
            address1: this.address1,
            address2: this.address2,
            postalCode: this.postalCode,
            phoneNumber: this.phoneNumber,
            MailAddress: this.MailAddress
        });

        this.shippingInfoId = (await ship).data!.id!;

        var products: String[] = [];

        for( var product of this.cartStore.$state.cart){
            products.push(product.product!.id!);
        }
        this.appUserId = this.identityStore.$state.jwt ?
        this.identityStore.$state.jwt?.appUserId : "dbec4190-da9e-4e6d-a855-a18bacd7f709";
        console.log("{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}");
        console.log(this.identityStore.$state.jwt);
        console.log("User========" + this.appUserId);

        var order = this.orderService.addOrder({
            appUserId: this.appUserId,
            paymentTypeId: this.paymentId,
            shippingInfoId: this.shippingInfoId,
            description: "Some descript"
        },
        products
        );

        this.orderId = (await order).data!.id!;

        for (var product of this.cartStore.$state.cart) {
            console.log(product.product?.id);
            console.log(this.orderId);
            // this.productService.minusOne(product.product!);
            this.productInOrderService.add({
                productId: product.product?.id!,
                orderId: this.orderId
            });
        };


        const invoice = {
            firstName: this.identityStore.jwt?.firstName ? this.identityStore.jwt?.firstName : 'Customer',
            lastName: this.identityStore.jwt?.lastName ? this.identityStore.jwt?.lastName : 'Name',
            email: this.identityStore.jwt?.email ? this.identityStore.jwt?.email : "Nope",
            paymentMethod: this.paymentsStore.payments.find(p => p.id == this.paymentId)?.paymentName!,
            deliveryMethod: this.shippingTypesStore.shippingTypes.find(p => p.id == this.shippingTypeId)?.title!,
            orderId: this.orderId,
            code: "Secret code tsh"
        };

        var inv = this.invoiceService.add(invoice);

        this.invoicesStore.add((await inv).data!);

        this.$router.push({name: 'invoice', params: {
            totalPrice: this.totalPrice,
            invoiceId: (await inv).data?.id,
        }});
    }

}

</script>
