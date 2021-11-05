<template>
    <section class="section-color">
        <div class="page-container">
            <h2 class="font-police">Retours de nos clients</h2>
            <div class="content-reviews inline-flex">
                <ReviewsCard
                v-for="item in items" :key="item.name"
                :image="item.img"
                :name="item.name"
                :reviews="item.reviews"
                :rating="item.rating"
                >
                </ReviewsCard>
            </div>
        </div>
    </section>
</template>
<script>
import image1 from '~/assets/img/fatima_mafoula.jpg'
import image2 from '~/assets/img/philippe_castellier.jpg'
import image3 from '~/assets/img/jean_jacques_leroy.jpg'
import image4 from '~/assets/img/fatima_mafoula.jpg'

export default {
    name:'ReviewsContent',
    data () {
        return {
            items: [
                {
                    img: image1,
                    name:'Fatima Mafoula',
                    reviews:'Grâce à Loisirama, j’ai pu participer à une superbe balade en montagne avec toute la famille pour un prix imbattable, merci !',
                    rating:3
                },
                {
                    img: image2,
                    name:'Philippe castellier',
                    reviews:'Alors que j’étais en vacances aux Caraïbes avec un ami, nous avions voulu faire de l’hélicoptère, grâce à Loisirama, il nous a fallu moins de 5 minutes pour trouver notre bonheur !',
                    rating:4
                },
                {
                    img: image3,
                    name:'Jean-jacques Leroy',
                    reviews:'Je rêvais de faire une balade sur des chameaux. En seulement trois cliques, j’ai pu réaliser ce rêve ! C’était un moment génial de partage et de beauté, merci Loisirama !',
                    rating:5
                },
                {
                    img:image4,
                    name:'Pénélope Du Flantier',
                    reviews:'Nous avons trouvé tout ce que nous recherchions sur ce site avec mon mari pour notre nuit de noce : de la plongée sous-marine, du ski nautique et j’en passe.. Je conseille fortement Loisirama !',
                    rating:4
                }
            ]
        }
    }
}
</script>
<style scoped>
.content-reviews{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>