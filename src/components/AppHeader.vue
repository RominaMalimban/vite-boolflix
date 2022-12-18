<script>
import { store } from '../store.js';

export default {
  name: "AppHeader",
  data() {
    return {
      store
    }

  }
}
</script>

<template>

  <header>
    <h1>Boolflix</h1>
    <section>
      <input type="text" v-model="store.searchTitle">
      <button type="submit" @click.prevent="$emit('searchMovie')">Search</button>
    </section>
  </header>


</template>

<style lang="scss" scoped>
@use "../styles/generals.scss" as*;
@use "../styles/partials/variables" as*;

header {
  background-color: #0b0b0b;
  height: 70px;
  display: flex;

  h1 {
    font-size: 40px;
    color: #e50914;
  }
}
</style>
