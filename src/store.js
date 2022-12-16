import { reactive } from 'vue';

export const store = reactive({
    movieList: [],
    apiUrl: "https://api.themoviedb.org/3/movie/popular/?api_key=9dedd5f24457aa0b2af960a8c2a32689"
});