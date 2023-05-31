<template>
    <header>
        <nav
            class="container navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div class="container-fluid">
                <a class="navbar-brand">
                    <RouterLink to="/" class="nav-link text-dark" active-class="active">Pc Components</RouterLink>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul class="navbar-nav flex-grow">

                    </ul>

                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <RouterLink class="nav-link text-dark" to="/cart">
                                <img src="https://cdn-icons-png.flaticon.com/512/60/60992.png" width="25" height="25" />
                                ({{ cartStore.cartCount > 0 ? cartStore.cartCount : 0 }})
                            </RouterLink>
                        </li>

                        <template v-if="identityStore.$state.jwt == null">
                            <li class="nav-item">
                                <RouterLink class="nav-link text-dark" to="/identity/account/register">Register
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link text-dark" to="/identity/account/login">Login</RouterLink>
                            </li>
                        </template>
                        <template v-else>
                            <li class="nav-item">
                                <RouterLink class="nav-link text-dark" to="/identity/account/orders">My Orders</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link text-dark" to="/identity/account/logout">Logout</RouterLink>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>


<script lang="ts">
import { useIdentityStore } from "@/stores/identity";
import { usePersonsStore } from "@/stores/persons";
import { useCartsStore } from "@/stores/cart";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

@Options({
    components: {
    }
})
export default class Header extends Vue {
    identityStore = useIdentityStore();
    cartStore = useCartsStore();



}
</script>

