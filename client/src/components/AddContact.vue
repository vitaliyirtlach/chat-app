<template>
    <div class="add-contact-modal" v-if="isOpen">
        <div class="add-contact-modal-body">
            <div class="close-modal" @click="$emit('modal-close')"><i class="bi bi-x"></i></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isOpen: {
            required: true,
            type: Boolean
        }
    }
}
</script>

<style lang="scss" scoped>
.add-contact-modal {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100vw;
    background: rgba($color: black, $alpha: 0.7);
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 8000;
    .add-contact-modal-body {
        width: 90vw;
        height: 90vh;
        background: #fff;
        z-index: 9000;
        border-radius: 30px;
        position: relative;
        padding: 1%;
        .close-modal {
            position: absolute;
            top: 0px;
            right: 30px;
            font-size: 50px;
            cursor: pointer;
        }
    }
}
</style>