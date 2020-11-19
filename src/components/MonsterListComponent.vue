<template>
  <div id="monster-list-page" class="row">
    <div class="search col-lg-12">
      <div class="form-group">
        <label for="search">Search</label>
        <input type="text" v-model="searchValue" id="search" class="form-control">
      </div>
    </div>
    <monster-list-element v-for="dragon in dragons" :key="dragon.index" :data="dragon"></monster-list-element>
  </div>
</template>

<script>
import MonsterListElement from "@/components/MonsterListElement";

export default {
  name: "MonsterListComponent",
  components: {MonsterListElement},
  data() {
    return {
      searchValue: ''
    }
  },
  computed: {
    dragons: {
      get() {
        const data = this.$store.getters["dragons/getAll"];
        if (data) {
          return this.$store.getters["dragons/getAll"].filter(data => data.name.toLowerCase().indexOf(this.searchValue.toLowerCase()) >= 0);
        }

        return data;
      }
    }
  }
}
</script>

<style scoped>

</style>
