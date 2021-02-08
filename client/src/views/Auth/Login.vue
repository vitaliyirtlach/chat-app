<template>
    <form class="user-form">
            <div class="notifications">
                <!-- 
                <div class="warning"> success | error | warning 
                    <div class="icon"></div> 
                    <div class="message">Message</div>
                </div> -->
            </div>
            
            <h1 class="form-title">Log In</h1>
            <div class="field required">
                <div class="field-label">Your email Address</div>
                <input type="text" placeholder="Email Address" />
            </div>
            <div class="field-group">
                <div class="field required">
                    <div class="field-label">Password</div>
                    <input type="password" placeholder="Password" />
                </div>
                <div class="field required">
                    <div class="field-label">Confirm Password</div>
                    <input type="text" placeholder="Confirm Password" />
                </div>
            </div>
            <button class="form-submit">Log In</button>
    </form>
</template>

<script>
import "@/utils/FormStyles.scss"

export default {
    
}
</script>