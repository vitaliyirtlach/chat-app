<template>
    <router-link to="/t/34894234" class="contact" active-class="contact-active">
        <div class="contact-avatar">
            <img src="https://ideapod.com/wp-content/uploads/2017/06/stencil.facebook-post-20.jpg" />
            <!-- <div class="contact-status-online"></div> -->
            <div class="contact-status-offline"></div>
        </div>
        <div class="contact-info">
            <div class="contact-name">Jennifer Spade</div>
            <div class="contact-message">How are you?</div>
        </div>
        <div class="notifications">99+</div>
    </router-link>
</template>

<script>
export default {
    props: ["id"]
}
</script>

<style lang="scss" scoped>
    .contact {
        &:hover {
            transition: .3s;
            background: #303d56;
        }
    }
    .contact-active, .contact {
        position: relative;
        display: flex;
        text-align: center;
        transition: .3s;
        padding: 15px 10px;
        img {
            width: 55px;
            height: 55px;
            border-radius: 50px;
        }
    }
    .contact-active {
        background: #303d56;
    }
    .contact-avatar {
        position: relative;
    }
    .contact-status-offline, .contact-status-online {
        position: absolute;
        bottom: 5px;
        right: 5px;
    }

    .contact-name {
        color: white;
        margin-left: 20px;
    }
    .contact-message {
        font-size: 14px;
        color:  #d5d8dc;
        margin-top: 5px;
    }
    .contact-info {
        align-items: center;
    }
    .notifications {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 12px;
        background: #e74c3c;
        color: white;
        padding: 2.5px 10px;
        border-radius: 50px;
    }
</style>