<template>
    <section class="section-colors">
        <div class="page-container">
        <h2 class="font-police">Nos coups de coeur </h2>
            <div v-for="activities in filteredData" :key="activities.id">
                <FavHeartCard :activities="activities"/>
            </div>
        </div>            
    </section>    
</template>
<script>
export default {
    props:['search'],
    data () {
        return {
            search :"",
            activities: [
                {
                    id:'',
                    title: '',
                    country: '',
                    town: '',
                    price: '',
                    popular: '',
                    time:'',
                    rating:''
                }
            ]
        }
    },
  computed: {
   /*filteredData(){
      const LowerCaseSearch = this.search.toLowerCase();
      return this.experiences.filter(
        experience => 
          experience.name.toLowerCase().includes(LowerCaseSearch) || experience.category.toLowerCase().includes(LowerCaseSearch))
      
    }*/

  }
}
</script>
<style scoped>

</style>