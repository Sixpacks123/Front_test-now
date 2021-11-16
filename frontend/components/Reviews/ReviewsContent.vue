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

export default {
    name:'ReviewsContent',
    data () {
        return {
            //je met les données en static et non dans un store car on a aucune interaction avec elle
            items: []
        }
    }, mounted(){

     this.$axios.get('http://localhost:3001/reviews')
       .then(response => {
          this.items = response.data
       })
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