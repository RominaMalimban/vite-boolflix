<script>
import { store } from './store.js';
import AppHeader from './components/AppHeader.vue';
import MovieList from './components/MovieList.vue';

export default {
  name: "App",
  components: {
    AppHeader,
    MovieList
  },
  data() {
    return {
      store
    }
  }

}
</script>

<template>

  <AppHeader />
  <MovieList />
</template>

<style scoped>

</style>
