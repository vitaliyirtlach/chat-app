<template>
  <router-view />
</template>

<script>
import "@/utils/FormStyles.scss"
import {socket} from "./socket"

socket.on("connect", () => {
  console.log(socket.id)
})

export default {
  
}
</script>
<style lang="scss">
  @import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css");
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap');
  
  @import "root";

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: $poppins-font;
  }
  body {
    overflow: hidden;
  }
  input {
    outline:none;
  }
  .contact-status-offline, .contact-status-online {
    width: 10px;
    height: 10px;
    border-radius: 50px;
  }
  .contact-status-online {
    background:  $online-color;
  }
  .contact-status-offline {
      background:  $offline-color;
  }
</style>
