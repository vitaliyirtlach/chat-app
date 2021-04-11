<template>
    <div class="welcome">
        <div class="title">Welcome to chat!</div>
        <h3>Send private photos and messages to a friend or group.</h3>    
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    @import "../root";

    .welcome {
        width: 80vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;
        font-family: $roboto-font;
    }
    .title {
        font-size: 70px;
    }
</style>