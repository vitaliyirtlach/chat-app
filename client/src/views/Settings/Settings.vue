<template>
    <div>
        <header>
            <router-link to="/"><i class="bi bi-house-door-fill"></i> Home</router-link>
            <div class="current-user">
                <img :src="$store.state.avatar" />
                <div>{{$store.state.firstName}} {{$store.state.lastName}}</div>
            </div>
        </header>
        <div class="container">
            <menu-settings />
            <router-view />
        </div>
    </div>
</template>

<script>
import MenuSettings from './MenuSettings.vue'
export default {
  components: { MenuSettings },
    
}
</script>

<style lang="scss" scoped>
    header {
        padding: 10px 25px;
        color: black;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 20px;
        border-bottom: 0.5px solid silver;
        a {
            color: black;
        }
    }
    .container {
        padding: 0 20px;
        display: flex;
        flex-wrap: wrap;
    }
    .current-user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 40px;
            height: 40px;
            border-radius: 50px;
            margin-right: 15px;
        }
    }
</style>