<template>
    <div>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    <router-view></router-view>
  </div>
</template>
<script>
  // import io from "socket.io-client";
  const socket = io("localhost:5000", {
    // transports: ["websockets"]
  });
export default {
  created() {
      socket.on('connect', () => {
          console.log(socket.id)
      })
      
      socket.on("disconnect", () => {
        console.log(socket.connected); // false
      });
  }
}
</script>
<style lang="scss">
</style>
