<script>
import axios from 'axios'
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
  },
  methods: {
    getMovies() {
      // chiamata axios:
      axios
        .get(store.apiUrl)
        .then(res => {
          store.movieList = res.data.results;
        })
        .catch(err => {
          console.log("errori", err)
        });
    }
  },
  mounted() {
    this.getMovies();
  }

}
</script>

<template>

  <AppHeader />
  <MovieList />
</template>

<style >

</style>
