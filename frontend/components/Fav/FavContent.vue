<template>
    <section class="section-colors">
        <div class="page-container">
        <h2 class="font-police">Nos Coups de coeur</h2>
        <div class="content">
            <article v-for="(a,i) in filteredActivity" :key="i">
                <FavHeartCard :activities="a"/>
            </article>
        </div>
        </div>            
    </section>    
</template>
<script>
import axios from 'axios'                                                                                                                                                
export default {
    computed: {
        filteredActivity () {
            try {
                console
                return (this.$store.getters['Activity/getFilteredActivity'] || this.$store.state.Activity.allActivity || this.$store.getters['Activity/getFilteredCategory'])
            } catch (error) {
                console.log(error)
            }
        }
    },


}
</script>
<style scoped>
.content{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

</style>