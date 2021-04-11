<template>
    <div ref="messages" class="messages">
        <div v-for="message of messages" :key="message.id">
             <div :class="message.author.userId === $store.state.userId ? 'my-message' : 'message'">
                <img :src="message.author.avatar" />
                <div class="message-body">
                    <div class="message-info">
                        <div class="message-author">{{message.author.firstName}} {{message.author.lastName}}</div>
                        <div class="message-date">{{message.createdAt}}</div>
                    </div>
                    <div class="text">{{message.text}}</div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["messages"],
    updated() {
        this.$refs.messages.scrollTo({
            top: this.$refs.messages.scrollHeight,
        })
    }
}
</script>

<style lang="scss" scoped>
    @import "../root";

.messages {
        height: 78.75vh;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 0 10px;
        scrollbar-width: thin;
    }
    .message, .my-message {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        img {
            width: 50px;
            height: 50px;
            border-radius: 50px;
        }
        .message-body {
            border-radius: 5px;
            padding: 20px;
            background: #f0f2f5;
            margin-left: 10px;
        }
        .message-info {
            display: flex;
            align-items: center;
        }
        .message-date {
            color: #a2acbf;
            margin-left: 10px;
        }
        .message-author {
            font-size: 16px;
            letter-spacing: 1px;
        }
        .text {
            max-width: 100%;
            color: #a0a0a0;
            margin-top: 5px;
            white-space: pre-wrap;
        }
    }

    .my-message {
        flex-direction: row-reverse;
        .message-body {
            margin-right: 10px;
            background: $theme-color;
            color: white;
        }
        .text, .message-date {
            color: white;
        }
        .message-info {
            justify-content: flex-end;
        }
    }


</style>