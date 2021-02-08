<template>
    <div class="home">
        <Menu />
        <router-view  />
    </div>
</template>

<script>
import Menu from "@/components/Menu.vue"

export default {
    components: {
        Menu
    },
}
</script>


<style lang="scss" scoped>
    .home {
        display: flex;
        background: #f7f9fa;
    }
</style>


