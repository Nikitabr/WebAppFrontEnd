<template>
    <h1>Delete</h1>

    <h3>Are you sure you want to delete this?</h3>
    <div>
        <h4>Person</h4>
        <hr />
        <dl class="row">
            <dt class="col-sm-2">FirstName</dt>
            <dd class="col-sm-10">Andres</dd>
            <dt class="col-sm-2">LastName</dt>
            <dd class="col-sm-10">K&#xE4;ver</dd>
        </dl>

        <form action="/Persons/Delete/d31d15f4-517c-43b1-a1b8-5dac38c99c01" method="post">
            <input
                type="hidden"
                data-val="true"
                data-val-required="The Id field is required."
                id="Id"
                name="Id"
                value="d31d15f4-517c-43b1-a1b8-5dac38c99c01"
            />
            <input type="submit" value="Delete" class="btn btn-danger" /> |
            <a href="/Persons">Back to List</a>
            <input
                name="__RequestVerificationToken"
                type="hidden"
                value="CfDJ8JBzgE2yHCdKhwkRvUGOPjHGVZbDqVfJrrU5lF3ujz8kWZfRRDx0o-UzqN5paTC2Fu8wqti7mpB35JPdam_RUMLB_TlLfjSWz8CC17OUABfMYLU7oy1QrewszqoZm4X_PuBsJ8U7MDpah22ulTsBNEw"
            />
        </form>
    </div>
</template>


<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

@Options({
    components: {
    },
    props: {},
    emits: [],
})
export default class PersonDelete extends Vue { }
</script>

