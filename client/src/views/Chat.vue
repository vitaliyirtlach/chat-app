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
        </div>

        <div v-if="showContactInfo" class="user-info">
            <img src="https://ideapod.com/wp-content/uploads/2017/06/stencil.facebook-post-20.jpg" />
            <div class="contact-name">Alex Castiglia</div>
            <div class="contact-geo">Staten Island. NY</div>
            <div class="additional-contacts">
                <div>a.castiglia@gmail.com</div>
                <div>589.278.9949</div>
                <div>alexcastiglia.com</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   data() {
       return {
           showContactInfo: true
       }
   }
}
</script>

<style lang="scss" scoped>
    .chat {
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
                color:   #abb2b9 ;
            }
        }
    }
    .messager-header {
        padding: 50px;
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
            padding: 25px;
            justify-content: flex-start;
        }
        div:nth-child(odd) {
            border-bottom: 0.25px solid #abb2b9;
            border-top: 0.25px solid #abb2b9;
        }
    }
</style>