<template>
    <h1>Edit {{id}}</h1>

    <h4>Person</h4>
    <hr />
    <div class="row">
        <div class="col-md-4">
            <form action="/Persons/Edit/d31d15f4-517c-43b1-a1b8-5dac38c99c01" method="post">
                <div class="text-danger validation-summary-valid" data-valmsg-summary="true">
                    <ul>
                        <li style="display:none"></li>
                    </ul>
                </div>
                <div class="form-group">
                    <label class="control-label" for="FirstName">FirstName</label>
                    <input
                        class="form-control"
                        type="text"
                        data-val="true"
                        data-val-maxlength="The field FirstName must be a string or array type with a maximum length of &#x27;128&#x27;."
                        data-val-maxlength-max="128"
                        data-val-required="The FirstName field is required."
                        id="FirstName"
                        maxlength="128"
                        name="FirstName"
                        value="Andres"
                    />
                    <span
                        class="text-danger field-validation-valid"
                        data-valmsg-for="FirstName"
                        data-valmsg-replace="true"
                    ></span>
                </div>
                <div class="form-group">
                    <label class="control-label" for="LastName">LastName</label>
                    <input
                        class="form-control"
                        type="text"
                        data-val="true"
                        data-val-maxlength="The field LastName must be a string or array type with a maximum length of &#x27;128&#x27;."
                        data-val-maxlength-max="128"
                        data-val-required="The LastName field is required."
                        id="LastName"
                        maxlength="128"
                        name="LastName"
                        value="K&#xE4;ver"
                    />
                    <span
                        class="text-danger field-validation-valid"
                        data-valmsg-for="LastName"
                        data-valmsg-replace="true"
                    ></span>
                </div>
                <input
                    type="hidden"
                    data-val="true"
                    data-val-required="The Id field is required."
                    id="Id"
                    name="Id"
                    value="d31d15f4-517c-43b1-a1b8-5dac38c99c01"
                />
                <div class="form-group">
                    <input type="submit" value="Save" class="btn btn-primary" />
                </div>
                <input
                    name="__RequestVerificationToken"
                    type="hidden"
                    value="CfDJ8JBzgE2yHCdKhwkRvUGOPjH9JUJT_26zHFWv6nI8Y6M4aZKmGft0cOJ8UwtVSN5nuFZza_wX24dvthQX7AWXIXGNi5TEN9rAYN6aiMMmOa6FxcgUPjbIScm8_RSblAH68zYr6V8Z_WQf1JR8OeAFTX8"
                />
            </form>
        </div>
    </div>

    <div>
        <a to="/">Back to Products</a>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { RouterLink } from "vue-router";

@Options({
    components: {
    },
    props: {
        id: String
    },
    emits: [],
})
export default class PersonEdit extends Vue { 
    id!: string;

}
</script>

