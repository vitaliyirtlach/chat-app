<template>
    <div class="menu-settings">
        <h1>User Profile</h1>
        <div class="links">
            <router-link active-class="active" to="/settings"><i class="bi bi-person"></i> User Info</router-link>
        </div>
        <div class="logout">
            <i class="bi bi-box-arrow-in-left"></i> Log out
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .menu-settings {
        position: relative;
        width: 20vw;
        height: 94vh;
        border-right: 0.5px solid silver;
        h1 {
             text-align: center;
            padding: 20px 0;
            font-family: 'Poppins', sans-serif;
        }
    }
    .links {
        width: 100%;
        height: 80%;
        scrollbar-width: thin;
        overflow-y: auto;
        overflow-x: none;

        a {
            display: block;
            width: 100%;
            padding: 15px;
            font-size: 18px;
            color: silver;
            font-family: 'Poppins', sans-serif;
        }
        a.active {
            color: black;
            border-left: 3px solid #1f8efa;
        }
    }
    .logout {
        padding: 10px;
        position: absolute;
        bottom: 1%;
        left: 0;
        right: 0;
        text-align: center;
        color: red;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
    }
</style>