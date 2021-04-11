<template>
    <form class="user-form" @submit.prevent="login">
            <div class="notifications">
                <div class="error" v-if="error.length">
                    <div @click="error = ''" class="icon"></div> 
                    <div class="message">{{error}}</div>
                </div>
            </div>
            
            <h1 class="form-title">Log In</h1>
            <div class="field required">
                <div class="field-label">Your email Address</div>
                <input @input="changeField($event)" name="email" placeholder="Email Address" />
            </div>
            <div class="field required">
                <div class="field-label">Password</div>
                <input type="password"  @input="changeField($event)" name="password" placeholder="Password" />
            </div>
            <button class="form-submit" :disabled="!formValuesIsRight" type="submit">Log In</button>
    </form>
</template>

<script>
import {http} from "@/api/http"


export default {
    data() {
        return {
            email: "",
            password: "",
            formValuesIsRight: false,
            error: ""
        }
    },
    methods: {
        async login() {
            const body = {
                email: this.email,
                password: this.password
            }
            const {data} = await http.post("/auth/login", body)
            if ("message" in data) {
                this.error = data.message
            } else {
                this.$store.commit("setAuth", true)
                this.$store.commit("setUserData", data)
            }
        },
        changeField(event) {
            const fieldName = event.target.name
            this[fieldName] = event.target.value
            if ( this.email && this.password ) {
                this.formValuesIsRight = true
            }            
        },
    }
}
</script>