<template>
  <div class="card col-lg-4">
    <div class="card-body">
      <h5 class="card-title">
        <router-link :to="{name: 'details', params: { id: data.index }}">
          {{ data.name }}
        </router-link>
      </h5>
      <router-link :to="{name: 'details', params: { id: data.index }}" class="btn btn-primary">Details</router-link>

      <button class="btn btn-danger float-right"
              :title="favorite ? 'remove from favorites' : 'add to favorites'"
              @click="favoriteAction">
        <i :class="{
          'far fa-star': favorite === false,
          'fa fa-star': favorite,
        }"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MonsterListElement",
  props: {
    data: Object
  },
  computed: {
    favorite() {
      return this.$store.getters['dragons/getFavorites'].indexOf(this.data.index) >= 0;
    }
  },
  methods: {
    favoriteAction() {
      if(this.favorite) {
        this.$store.dispatch('dragons/removeFavorite', this.data.index);
      } else {
        this.$store.dispatch('dragons/addToFavorites', this.data.index);
      }
    }
  }
}
</script>

<style scoped>

</style>
