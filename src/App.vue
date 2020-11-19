<template>
  <div id="app" class="container">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('dragons/getAllDragons').catch((err) => {
      console.log(err);
      alert('Can\t load dragons list');
    });

    this.$store.dispatch('dragons/loadFavorites');
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css";
</style>
