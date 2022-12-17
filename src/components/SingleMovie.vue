<script>
export default {
    name: "SingleMovie",
    props: {
        details: Object
    },
    data() {
        return {
            listFlags: [
                {
                    img: "img/italy.png",
                    lang: "it"
                },
                {
                    img: "img/france.png",
                    lang: "fr"
                },
                {
                    img: "img/united-kingdom.png",
                    lang: "en"
                },
                {
                    img: "img/spain.png",
                    lang: "es"
                },
                {
                    img: "img/german-flag.png",
                    lang: "de"
                },
                {
                    img: "img/rainbow.png",
                    lang: ""
                }
            ]


        }

    },
    computed: {
        // funzione per trasformare stringa statica della lingua in immagine: 
        assignFlags() {

            for (let i = 0; i < this.listFlags.length; i++) {
                if (this.listFlags[i].lang.includes(this.details.original_language)) {
                    return this.listFlags[i].img
                }
            }
            return this.listFlags[this.listFlags.length - 1].img
        },
        // funzione per trasformare il voto da 1 a 10 decimale in un numero intero da 1 a 5:
        getVote() {
            return Math.round(this.details.vote_average / 2);
        }

    }

}
</script>

<template>

    <!-- template card singola -->
    <div class="movie">
        <img :src="`https://image.tmdb.org/t/p/w200/${details.poster_path}`" alt="">

        <!-- condizione in cui proprietà title è presente nell'oggetto details -->
        <div v-if="details.title">
            <div>Titolo Film: {{ details.title }}</div>
            <div>Titolo originale film: {{ details.original_title }}</div>
        </div>

        <!-- condizione in cui proprietà name è presente nell'oggetto details -->
        <div v-else-if="details.name">
            <div>Titolo serie tv: {{ details.name }}</div>
            <div>Titolo originale serie tv : {{ details.original_name }}</div>
        </div>

        <div>
            <img :src="assignFlags" alt="" class="bandiera">
        </div>

        <div> Language: {{ details.original_language }}</div>
        <div>Voto: {{ getVote }}</div>
    </div>

</template>

<style scoped>
.movie {
    width: calc(100% / 5);
}

.bandiera {
    width: 40px;
}
</style>
