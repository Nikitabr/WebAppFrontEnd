
<template>
    <footer b-wrkb45jn1q class="border-top footer text-muted">
        <div b-wrkb45jn1q class="container">
            &copy; 2022 - Pc Components -
            <RouterLink to="/" >Home</RouterLink>
        </div>
    </footer>
</template>

<script lang="ts">
import { useIdentityStore } from "@/stores/identity";
import { usePersonsStore } from "@/stores/persons";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

@Options({
    components: {
    }
})
export default class Footer extends Vue {
    identityStore = useIdentityStore();



}
</script>

