<template>
    <div class="auth">
        <div class="auth-image-block">
            <div>Get Started!</div>
        </div>
        <div class="auth-container">
            <header>
                <router-link active-class="active" to="register">Register</router-link>
                <router-link active-class="active" to="login">Login</router-link>
            </header>
            
            <router-view />
        </div>
    </div>
    
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
    @import "../../root";
    .auth {
        width: 100vw;
        display: flex;
        flex-wrap: wrap;
        .auth-image-block {
            background-image: url(../../assets/auth-image.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            width: 45vw;
            position: relative;
            height: 100vh;
            text-align: center;
            align-items: center;
            div {
                position: absolute;
                left: 0;
                bottom: 50%;
                right: 0;
                color: white;
                font-size: 45px;
                font-family: $hammersmith-font;
            }
        }
        .auth-container {
            width: 55vw;
            header {
                width: 100%;
                text-align: end;
                padding: {
                    right: 60px;
                    top: 60px;
                    bottom: 10px;
                }
                a.active {
                    color: white;
                    background: $theme-color;
                }
                a {
                    border: 0.5px solid silver;
                    color: black;
                    padding: 5px 10px;
                }
            }
        }
    }
</style>