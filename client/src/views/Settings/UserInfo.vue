<template>
    <div class="settings-user-info">
        <div class="settings-user-general-info">
            <div class="settings-avatar">
                <img :src="user.avatar" />
                <input type="file" @change="changePhoto($event)" ref="chooseNewPhoto" style="display: none" />
                <div class="settings-edit" @click="$refs.chooseNewPhoto.click()"><i class="bi bi-pencil"></i></div>
            </div>
            <div class="general-info">
                <div class="general-username">{{ $store.state.firstName}} {{ $store.state.lastName }}</div>
                <div class="general-location">{{ $store.state.location }}</div>
            </div>
        </div>
        <form class="settings-form" @submit.prevent="updateProfile">
            <div class="field-group">
                <div class="field">
                    <div class="field-label">First name</div>
                    <input v-model="user.firstName" placeholder="First name" />
                </div>
                <div class="field">
                    <div class="field-label">Last name</div>
                    <input v-model="user.lastName" placeholder="Last name" />
                </div>
            </div>
            <div class="field-group">
                <div class="field">
                    <div class="field-label">Email</div>
                    <input v-model="user.email" placeholder="Email" />
                </div>
                <div class="field">
                    <div class="field-label">Phone Number</div>
                    <input v-model="user.phone" placeholder="Phone number" />
                </div>
            </div>
            <div class="field-group">
                <div class="field">
                    <div class="field-label">Location</div>
                    <input v-model="user.location" placeholder="Location: Country, City" />
                </div>
                <div class="field">
                    <div class="field-label">Website</div>
                    <input v-model="user.website" placeholder="Location: Country, City" />
                </div>
            </div>
            <button class="form-submit" type="submit">Save changes</button>
        </form>
    </div>
</template>

<script>
import {readURL} from "@/utils/readURL.ts"
import {http} from "@/api/http"
export default {
    data() {
        return {
            user: {
                firstName: this.$store.state.firstName,
                lastName: this.$store.state.lastName,
                email: this.$store.state.email,
                phone: this.$store.state.phone,
                location: this.$store.state.location,
                avatar: this.$store.state.avatar,
                website: this.$store.state.website
            }
        }
    },
    methods: {
        async updateProfile() {
            const { data } = await http.put("/profile/update", this.user)
            this.$store.commit("setUserData", data, false)
        },
        changePhoto({target}) {
            readURL(target).then(url => {
                this.user.avatar = url
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "../../root";
    .settings-form {
        height: 60%;
    }
    .settings-user-info {
        width: 77vw;
    }
    .settings-user-general-info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 80%;
        margin: {
            top: 5%;
            left: 10%;
            right: 10%;
            bottom: 2%;
        };
        .settings-avatar {
            position: relative;
        }
        img {
            width: 150px;
            height: 150px;
            border-radius: 100px;
        }
        .settings-edit {
            padding: 5px 10px 7.5px 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            color: white;
            border-radius: 100%;
            background: $theme-color;
            position: absolute;
            bottom: 10px;
            right: 7.5px;
        }
    }
    .general-info {
        padding: 10px;
        div {
            margin-left: 15px;
        }
        .general-username {
            font-family: $roboto-font;
            font-size: 24px;
            padding: 5px;
        }
        .general-location {
            font-size: 18px;
            padding: 5px;
            color: rgb(149, 149, 149);
        }
    }
</style>