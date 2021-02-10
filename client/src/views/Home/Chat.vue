<template>
    <div class="chat">
        <div class="messager">
            <div class="messager-header">
                <div class="contact-info">
                    <div @click="showContactInfo = !showContactInfo" class="contact-name">Alex Castiglia</div>
                    <div class="contact-status-online"></div>
                    <!-- <div class="contact-status-offline"></div> -->
                </div>
                <div class="contact-status">That's awesome!</div>
            </div>

            <Messages />

            <form @submit.prevent>
                <input type="text" 
                    @keydown.enter="handleSubmit" 
                    v-model="message" 
                    placeholder="Start typing your message..." 
                />
            </form>
        </div>

        <div v-if="showContactInfo" class="user-info">
            <img src="https://ideapod.com/wp-content/uploads/2017/06/stencil.facebook-post-20.jpg" />
            <div class="contact-name">Alex Castiglia</div>
            <div class="contact-geo">Staten Island. NY</div>
            <div class="additional-contacts">
                <div>
                    <i class="bi bi-envelope"></i>
                    <div> a.castiglia@gmail.com </div>
                </div>
                <div>
                    <i class="bi bi-telephone-fill"></i>
                    <div>589.278.9949</div>
                </div>
                <div>
                    <i class="bi bi-globe"></i>
                    <div>alexcastiglia.com</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Messages from "@/components/Messages"
import { socket } from '@/socket'

export default {
   components: {
       Messages
   },
   data() {
       return {
           showContactInfo: true,
           message: ""
       }
   },
   methods: {
       handleSubmit() {
           socket.emit("message", this.message)
       }
   }
}
</script>

<style lang="scss" scoped>
    .chat {
        position: relative;
        width: 80vw;
        display: flex;
        justify-content: space-between;
        .messager {
            width: 100%;
        }
        .user-info {
            width: 45%;
            background: #fff;
            display: flex;
            text-align: center;
            flex-direction: column;
            font-family: 'Poppins', sans-serif;
            img {
                border-radius: 150px;
                width: 250px;
                margin: 30px 130px;
                height: 250px;
            }
            .contact-geo {
                font-size: 14px;
                color: #abb2b9;
            }
        }
    }
    .messager-header {
        padding-top: 50px;
        padding-left: 50px;
        padding-bottom: 10px;
        font-family: 'Poppins', sans-serif;
    }
    .contact-info {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        .contact-status-online, .contact-status-offline {
            margin-left: 10px;
        }
    }
    .contact-name {
        font-size: 23px;
        font-weight: 400;
        cursor: pointer;
    }
    .contact-status {
        color:  #808b96;
        font-size: 14px;
    }

    .additional-contacts {
        margin-top: 30px;
        div {
            display: flex;
            align-items: center;
            padding: 15px;
            justify-content: flex-start;
        }
        div:nth-child(odd) {
            border-bottom: 0.25px solid #abb2b9;
            border-top: 0.25px solid #abb2b9;
        }
    }
    form {
        margin-top: 2%;
        input {
            width: 100%;
            border: none;
            padding: 20px 40px;
            background: #f0f2f5;
            color: #9c9c9d;
            &::placeholder {
                color: #9c9c9d;
            }
        }
    }
</style>