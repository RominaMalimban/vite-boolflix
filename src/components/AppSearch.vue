<script>
import { store } from '../store.js';

export default {
    name: "AppSearch",
    data() {
        return {
            store
        }

    }
}
</script>

<template>

    <section>
        <input type="text" v-model="store.searchTitle">
        <button type="submit" @click.prevent="$emit('searchMovie')">Search</button>
    </section>


</template>

<style scoped>

</style>
