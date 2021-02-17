<template>
    <form class="user-form" @submit.prevent="register">
            <div class="notifications">
                <div class="error" v-if="error.length">
                    <div @click="error = ''" class="icon"></div> 
                    <div class="message">{{error}}</div>
                </div>
            </div>
            <h1 class="form-title">Register</h1>
            <div class="field-group">
                <div class="field required">
                    <div class="field-label">First name</div>
                    <input @input="changeField($event)" name="firstName" placeholder="First name" />
                </div>
                <div class="field required">
                    <div class="field-label">Last name</div>
                    <input @input="changeField($event)" name="lastName" placeholder="Last name" />
                </div>
            </div>
            <div class="field required">
                <div class="field-label">Your email Address</div>
                <input type="email" @input="changeField($event)" name="email" placeholder="Email Address" />
            </div>
            <div class="field required">
                <div class="field-label">Where you live?</div>
                <input type="text" @input="changeField($event)" name="location" placeholder="Country, City" />
            </div>
            <div class="field-group">
                <div class="field required">
                    <div class="field-label">Password</div>
                    <input type="password" @input="changeField($event)" name="password" placeholder="Password" />
                </div>
                <div class="field required">
                    <div class="field-label">Confirm Password</div>
                    <input type="password" @input="changeField($event)" name="confirmPassword" placeholder="Confirm Password" />
                </div>
            </div>
            <button class="form-submit" type="submit" :disabled="!formValuesIsRight">Register</button>
    </form>
</template>

<script>
import axios from "axios"

export default  { 
     data() {
        return {
            firstName: "",
            lastName: "",
            email: "",
            location: "",
            password: "",
            confirmPassword: "",
            formValuesIsRight: false,
            error: ""
        }
    },
    methods: {
        changeField(event) {
            const fieldName = event.target.name
            this[fieldName] = event.target.value
            if (
            this.firstName.length 
            && this.lastName.length 
            && this.email.length 
            && this.location.length 
            && this.password === this.confirmPassword
            ) {
                this.formValuesIsRight = true
            }            
        },
        async register() {
            const body = {
                firstName: this.firstName,
                lastName: this.lastName,
                location: this.location,
                email: this.email,
                password: this.password
            }
            const {data} = await axios.post("http://localhost:5000/auth/register", body)
            if ("message" in data) {
                this.error = data.message
            } else {
                this.$store.commit("setAuth", {...data, isAuth: true})
            }
        }
    },
}
</script>

<style lang="scss">
</style>

