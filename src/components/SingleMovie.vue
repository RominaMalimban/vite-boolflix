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

        <div class="poster-main">
            <img :src="`https://image.tmdb.org/t/p/w500/${details.poster_path}`" alt="" class="poster">

            <!-- layover in display none -->
            <div class="layover">
                <!-- condizione in cui proprietà title è presente nell'oggetto details -->
                <div v-if="details.title">
                    <div>
                        <span class="title">
                            Titolo Film:
                        </span>
                        {{ details.title }}
                    </div>
                    <div v-if="details.original_title !== details.title">
                        <span class="title">Titolo originale film:</span>
                        {{ details.original_title }}
                    </div>
                </div>

                <!-- condizione in cui proprietà name è presente nell'oggetto details: -->
                <div v-else-if="details.name">
                    <div>
                        <span class="title">Titolo serie tv:</span>
                        {{ details.name }}
                    </div>
                    <div v-if="details.original_name !== details.name">
                        <span class="title">Titolo originale serie tv :</span>
                        {{ details.original_name }}
                    </div>
                </div>

                <!-- lingua e bandiera: -->
                <div class="language">
                    <span class="title">Language:</span>
                    <!-- {{ details.original_language }}  ===> lingua -->
                    <img :src="assignFlags" alt="" class="flag-image">
                </div>

                <!-- voto stelle: -->
                <div class="stars">
                    <span class="title">Voto:</span>
                    <!-- <span>{{ details.vote_average }}</span>  ===> voto da 1 a 10 decimale-->

                    <!-- ciclo per stampare a schermo un numero di stelle piene che vanno da 1 a 5 -->
                    <div v-for="star in getVote" class="star">
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div v-for="star in 5 - getVote">
                        <i class="fa-regular fa-star"></i>
                    </div>
                </div>
                <div>
                    <span class="title">Overview: </span>
                    {{ details.overview }}
                </div>
            </div>
            <!-- chiusura layover -->
        </div>

    </div>

</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as*;
@use "../styles/partials/mixins" as*;

.movie {
    width: calc(100% / 5 - 10px);
    margin: 5px;
    height: 420px;

    .poster-main {
        position: relative;

        .poster {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .layover {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            padding: 5px 8px;
            background-color: $black-color;
            border: 1px solid $red-color;
            overflow: auto;

            div,
            span {
                padding: 3px 0;
            }

            .title {
                font-weight: bolder;
                color: $red-color;
            }

            .language {
                @include flex (center);

                .flag-image {
                    width: 40px;
                    margin-left: 10px;
                }
            }

            .stars {
                display: flex;

                span {
                    display: inline-block;
                    margin-right: 10px;
                }

                i {
                    color: $red-color;
                }
            }
        }

        &:hover .layover {
            display: block;
        }
    }
}
</style>
