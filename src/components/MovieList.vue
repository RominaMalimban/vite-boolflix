<script>
import { store } from '../store.js';
import SingleMovie from './SingleMovie.vue';

export default {
    name: "MovieList",
    components: {
        SingleMovie
    },
    data() {
        return {
            store
        }

    }
}
</script>

<template>

    <section>

        <!-- contenitore padre che contiene singola card movie -->
        <div class="movies container">

            <SingleMovie v-for="(movie, index) in store.movieList" :key="index" :details="movie" />
        </div>
    </section>


</template>

<style scoped>
.movies {
    display: flex;
    flex-wrap: wrap;
}
</style>
