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
    <h1>BOOLFLIX</h1>
    <div class="search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="text" v-model="store.searchTitle" placeholder="Cerca un film o una serie TV">
      <button type="submit" @click.prevent="$emit('searchMovie')">Search</button>
    </div>
  </header>


</template>

<style lang="scss" scoped>
@use "../styles/generals.scss" as*;
@use "../styles/partials/variables" as*;

header {
  position: fixed;
  width: 100%;
  z-index: 50000;
  top: 0;
  left: 0;
  background-color: #0b0b0b;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  h1 {
    font-size: 40px;
    color: #e50914;
    font-weight: bolder;
  }

  .search {
    display: flex;
    align-items: center;

    .fa-magnifying-glass {
      border: 1px solid #fff;
      height: 30px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      border-right: 1px solid black;
      line-height: 30px;
      padding: 0 10px;
    }


    input {
      display: inline-block;
      height: 30px;
      width: 300px;
      padding: 0 10px;
      margin-right: 10px;
    }

    button {
      height: 30px;
      padding: 0 10px;
      background-color: #e50914;
      border: 1px solid #e50914;
      color: #fff;
      border-radius: 10px;
      font-weight: bolder;

      &:hover {
        background-color: #ed575f;
      }
    }
  }


}
</style>
