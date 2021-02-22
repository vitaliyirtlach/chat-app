<template>
    <div>
        <add-contact v-on:modal-close="isOpen = false" :isOpen="isOpen"/>
    <div class="menu-container">
        <div class="profile">
            <div class="user-name">{{$store.state.firstName}}  {{$store.state.lastName}}</div>
            <div class="links">
                <router-link to="/settings" class="bi bi-gear"></router-link>
            </div>
        </div>
        <div class="search">
            <input @input="changeSearchCriteria($event.target.value)" type="search" placeholder="Search" />
            <button>Search</button>
        </div>
        <div class="contacts">
            <div v-if="$store.state.groups.length">
                <contact 
                    v-for="group of $store.state.groups" 
                    :searchCriteria="searchCriteria"
                    :key="group.id"
                    :id="group.id" 
                    :user="group.users.find((u) => u.userId !== $store.state.userId)" 
                    :lastMessage="group.messages[group.messages.length - 1]?.text.slice(0, 10)"
                />
            </div>
            <div class="empty-groups" v-else>¯\_(ツ)_/¯ </div>
        </div>
        <button class="add-contact" @click="isOpen = true">Add contact</button>
    </div>
    </div>
</template>

<script>
import AddContact from './AddContact.vue'
import Contact from './Group.vue'

export default {
  components: { Contact, AddContact }, 
  data() {
      console.log(this.$store.state.groups[0].messages[this.$store.state.groups[0].messages.length - 1].text)
      return {
          isOpen: false,
          searchCriteria: ""
      }
  },
  methods: {
      changeSearchCriteria(value) {
          this.searchCriteria = value
      }
  }
}
</script>


<style lang="scss" scoped>
    @import "../root";

    .menu-container {
        width: 20vw;
        height: 100vh;
        background: #242e42;
        color: white;
        display: flex;
        flex-direction: column;
    }
    .profile {
        font-size: 22.5px;
        font-weight: 500;
        padding-top: 75px;
        padding-left: 20px;
        padding-right: 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .links {
            display: flex;
            align-items: center;
            a {
                color: white;
                cursor: pointer;
            }
        }
    }
    .search {
        padding-left: 10px;
        padding-top: 25px;
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
            background: $theme-color;
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
        background: $theme-color;
        padding: 15px;
        cursor: pointer;
    }

    .empty-groups {
        margin: auto;
        font-size: 22px;
    }
</style>


