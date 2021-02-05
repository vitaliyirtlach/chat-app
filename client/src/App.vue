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
  const socket = io("http://localhost:5000")
export default {
  created() {
      socket.on('connect', function() {
            socket.emit("message", "New Message")
      })
  }
}
</script>
<style lang="scss">
</style>
