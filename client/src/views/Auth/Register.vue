<template>
    <form class="user-form">
            <div class="notifications">
                <!-- 
                <div class="warning"> success | error | warning 
                    <div class="icon"></div> 
                    <div class="message">Message</div>
                </div> -->
            </div>
            <h1 class="form-title">Register</h1>
            <div class="field-group">
                <div class="field required">
                    <div class="field-label">First name</div>
                    <input type="text" placeholder="First name" />
                </div>
                <div class="field required">
                    <div class="field-label">Last name</div>
                    <input type="text" placeholder="Last name" />
                </div>
            </div>
            <div class="field required">
                <div class="field-label">Your email Address</div>
                <input type="email" placeholder="Email Address" />
            </div>
            <div class="field required">
                <div class="field-label">Where you live?</div>
                <input type="text" placeholder="Country, City" />
            </div>
            <div class="field-group">
                <div class="field required">
                    <div class="field-label">Password</div>
                    <input type="password" placeholder="Password" />
                </div>
                <div class="field required">
                    <div class="field-label">Confirm Password</div>
                    <input type="password" placeholder="Confirm Password" />
                </div>
            </div>
            <button class="form-submit">Register</button>
    </form>
</template>

<script>
import "@/utils/FormStyles.scss"

export default {
    
}
</script>

<style lang="scss" scoped>
</style>

