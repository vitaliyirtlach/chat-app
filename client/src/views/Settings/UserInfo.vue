<template>
    <div class="settings-user-info">
        <div class="settings-user-general-info">
            <div class="settings-avatar">
                <img src="https://ideapod.com/wp-content/uploads/2017/06/stencil.facebook-post-20.jpg" />
                <div class="settings-edit"><i class="bi bi-pencil"></i></div>
            </div>
            <div class="general-info">
                <div class="general-username">Alex Castiglia</div>
                <div class="general-location">Island, NY</div>
            </div>
        </div>
        <form class="settings-form">
            <div class="field-group">
                <div class="field">
                    <div class="field-label">First name</div>
                    <input type="text" placeholder="First name" />
                </div>
                <div class="field">
                    <div class="field-label">Last name</div>
                    <input type="text" placeholder="Last name" />
                </div>
            </div>
            <div class="field-group">
                <div class="field">
                    <div class="field-label">Email</div>
                    <input type="text" placeholder="First name" />
                </div>
                <div class="field">
                    <div class="field-label">Phone Number</div>
                    <input type="text" placeholder="Last name" />
                </div>
            </div>
            <div class="field-group">
                <div class="field">
                    <div class="field-label">Location</div>
                    <input type="text" placeholder="First name" />
                </div>
            </div>
            <button class="form-submit">Save changes</button>
        </form>
    </div>
</template>

<script>
export default {
    
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