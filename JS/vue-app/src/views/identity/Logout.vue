
<script lang="ts">
import { IdentityService } from "@/services/IdentityService";
import { useIdentityStore } from "@/stores/identity";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

@Options({
    components: {
    },
    props: {},
    emits: [],
})
export default class Logout extends Vue {
    identityStore = useIdentityStore();
    
    email: string = '';
    password: string = '';
    errorMsg: string | null = null;

    async mounted(): Promise<void> {
        console.log('submitClicked');
        this.identityStore.$state.jwt = null;
        this.$router.push('/');
    }

}
</script>

