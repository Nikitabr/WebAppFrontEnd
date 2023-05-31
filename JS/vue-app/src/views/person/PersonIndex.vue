<template>
    <h1>Index</h1>

    <p>
        <RouterLink to="/persons/create">Create new</RouterLink>
    </p>
    <table class="table">
        <thead>
            <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>{{ userStore.jwt?.token }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item of personsStore.persons" :key="item.id">
                <td>{{ item.firstName }}</td>
                <td>{{ item.lastName }}</td>
                <td>
                    <RouterLink :to="{ name: 'personsedit', params: { id: item.id } }">Edit</RouterLink> |
                    <a href="/Persons/Details/d31d15f4-517c-43b1-a1b8-5dac38c99c01">Details</a> |
                    <a href="/Persons/Delete/d31d15f4-517c-43b1-a1b8-5dac38c99c01">Delete</a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { PersonService } from "@/services/PersonService";
import { usePersonsStore } from "@/stores/persons";
import { useIdentityStore } from "@/stores/identity";
import { Options, Vue } from "vue-class-component";

@Options({
    components: {
    },
    props: {},
    emits: [],
})
export default class PersonIndex extends Vue {
    id: string = "foobar";

    personsStore = usePersonsStore();
    personService = new PersonService();
    userStore = useIdentityStore();

    /*
      constructor() {
        super();
        
      }
        */

    async mounted(): Promise<void> {
        console.log("mounted");
        this.personsStore.$state.persons =
            await this.personService.getAll();
    }

}

</script>

