<template>
    <h1>Create</h1>

    <h4>Person</h4>
    <hr />
    <div class="row">
        <div class="col-md-12">

            <div v-if="errorMsg != null" class="text-danger validation-summary-errors" data-valmsg-summary="true">
                <ul>
                    <li>{{ errorMsg }}</li>
                </ul>
            </div>

            <div>
                <div class="form-group">
                    <label class="control-label" for="FirstName">FirstName</label>
                    <input v-model="firstName" class="form-control" type="text" />
                </div>
                <div class="form-group">
                    <label class="control-label" for="LastName">LastName</label>
                    <input v-model="lastName" class="form-control" type="text" />
                </div>
                <div class="form-group">
                    <input @click="submitClicked()" type="submit" value="Create" class="btn btn-primary" />
                </div>
            </div>
        </div>
    </div>

    <div>
        <a href="/Persons">Back to List</a>
    </div>
</template>


<script lang="ts">
import { PersonService } from "@/services/PersonService";
import { usePersonsStore } from "@/stores/persons";
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

@Options({
    components: {
    },
    props: {},
    emits: [],
})
export default class PersonCreate extends Vue {
    personsStore = usePersonsStore();
    personService = new PersonService();


    firstName: string = '';
    lastName: string = '';
    errorMsg: string | null = null;


    async submitClicked(): Promise<void> {
        console.log('submitClicked');

        if (this.firstName.length > 0 && this.lastName.length > 0) {


            var res = await this.personService.add(
                {
                    firstName: this.firstName,
                    lastName: this.lastName,
                }
            );

            if (res.status >= 300) {
                this.errorMsg = res.status + ' ' + res.errorMsg;
            } else {
                this.personsStore.$state.persons =
                    await this.personService.getAll();

                this.$router.push('/persons');
            }
        } else {
            this.errorMsg = 'Too short!';
        }
    }
}
</script>

