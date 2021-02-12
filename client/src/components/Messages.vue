<template>
    <div class="messages">
        <div class="message">
            <img src="https://ideapod.com/wp-content/uploads/2017/06/stencil.facebook-post-20.jpg" />
            <div class="message-body">
                <div class="message-info">
                    <div class="message-author">Alex Castiglia</div>
                    <div class="message-date">07.02.2021</div>
                </div>
                <div class="text">Hello! What is your name?fdf sfsdhjf hsjdh fjsdfhsdjfh jsdhj dsf jsd hfsj hfjsdhf jsdhfhfhsdf dsjf hsdjf hdsf hsj fhjfh h fshdhs sjh hjshj dshfj sdhf jsdjsfj hsjfh jshfhfj sdh sdhfjsd hsdjdsjfsjdfhuehfuhuefhu
                    fsdfsdffdsfsd
                    fsd
                    fsdfsdffdsfsdsd
                    fsd
                    f sdf
                </div>
            </div> 
        </div>
        <div class="my-message">
            <img src="https://ideapod.com/wp-content/uploads/2017/06/stencil.facebook-post-20.jpg" />
            <div class="message-body">
                <div class="message-info">
                    <div class="message-author">Alex Castiglia</div>
                    <div class="message-date">07.02.2021</div>
                </div>
                <div class="text">Hello! What is your name?fdf sfsdhjf hsjdh fjsdfhsdjfh jsdhj dsf jsd hfsj hfjsdhf jsdhfhfhsdf dsjf hsdjf hdsf hsj fhjfh h fshdhs sjh hjshj dshfj sdhf jsdjsfj hsjfh jshfhfj sdh sdhfjsd hsdjdsjfsjdfhuehfuhuefhu
                    fsdfsdffdsfsd
                    fsd
                    fsdfsdffdsfsdsd
                    fsd
                    f sdf
                </div>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    
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