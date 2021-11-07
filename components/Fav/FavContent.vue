<template>
    <section class="section-colors">
        <div class="page-container">
        <h2 class="font-police">Nos coups de coeur </h2>
            <!--<div v-for="activities in filteredData" :key="activities.id">
                <FavHeartCard :activities="activities"/>
            </div>-->
            {{searchWord}}

            <li v-for="(a,i) in filteredActivity" :key="i"> {{ a.name }} || {{a.ville}}</li>
        </div>            
    </section>    
</template>
<script>
export default {
 data () {
    return {
      searchWord: this.$store.getters.getSearchWord
    }
  },
    computed: {
        filteredActivity () {
            try {
                let a = (this.$store.getters.getFilteredActivity || this.$store.state.allActivity)
                console.log(a)
                return (a)
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped>

</style>