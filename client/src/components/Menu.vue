<template>
    <div class="container">
        <div class="profile">
            <div class="user-name">Ryan Johnston</div>
        </div>
        <div class="search">
            <input type="search" placeholder="Search" />
            <button>Search</button>
        </div>
        <div class="contacts">
                <contact></contact>
        </div>
        <button class="add-contact">Add contact</button>
    </div>
</template>

<script>
import Contact from './Contact.vue'

export default {
  components: { Contact }, 
}
</script>


<style lang="scss" scoped>
    .container {
        width: 20vw;
        height: 100vh;
        background: #242e42;
        color: white;
        display: flex;
        flex-direction: column;
    }
    .profile {
        font-family: 'Poppins', sans-serif;
        font-size: 22.5px;
        font-weight: 500;
        padding-top: 75px;
        padding-left: 20px;
        display: flex;
        justify-content: space-between;
        .links {

        }
    }
    .search {
        padding-left: 10px;
        padding-top: 25px;
        font-family: 'Poppins', sans-serif;
        display: flex;
        padding: 10px 20px;
        margin-top: 30px;
        justify-content: space-between;
        input {
            border-radius: 50px;
            width: 67.5%;
            padding: 10px;
            font-size: 16px;
            border: none;
            &::placeholder {
                text-align: center;
            }
        }
        button {
            color: white;
            background: #1f8efa;
            border: none;
            font-size: 16px;
            cursor: pointer;
            padding: 5px;
            width: 30%;
            border-radius: 50px;
        }
    }

    .contacts {
        scrollbar-width: thin;
        height: 100%;
        overflow: auto;
        display: flex;
        flex-direction: column;
    }
    .add-contact {
        border: none;
        color: white;
        background: #1f8efa;
        padding: 15px;
        cursor: pointer;
    }
</style>


