<script>
export default {
    name: "SingleMovie",
    props: {
        details: Object
    }
}
</script>

<template>

    <!-- template card singola -->
    <div class="movie">
        <img :src="`https://image.tmdb.org/t/p/w200/${details.poster_path}`" alt="">
        <div>{{ details.title }}</div>
        <div>{{ details.original_title }}</div>
        <div> Language: {{ details.original_language }}</div>
        <div>{{ details.vote_average }}</div>
    </div>

</template>

<style scoped>
.movie {
    width: calc(100% / 5);
}
</style>
