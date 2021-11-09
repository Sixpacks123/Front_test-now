<template>
    <section class="section-colors">
        <div class="page-container">
        <h2 class="font-police">{{title}}</h2>
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
      searchWord: this.$store.getters.getSearchWord,
      
    }
  },
    computed: {
        filteredActivity () {
            try {
                
                return (this.$store.getters.getFilteredActivity || this.$store.state.allActivity || this.$store.getters.getFilteredCategory)

            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped>

</style>