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

      let myUrl = store.apiUrl;

      // condizione:
      if (store.searchTitle !== "") {
        myUrl = `${store.apiSearchMovie}&query=${store.searchTitle}`
      }

      axios
        .get(myUrl)
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

  <AppHeader @searchMovie="getMovies" />
  <MovieList />
</template>

<style lang="scss">
@use './styles/generals.scss' as*;
@use './styles/partials/variables' as*;
</style>
