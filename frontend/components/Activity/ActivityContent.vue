<template>
    <section class="section-color">
        <div class="page-container">
            <h2 class="font-police">Recherche par activité</h2>
            <div class="card-content">
                <ActivityCard 
                v-for="c in ListCategory" :key="c.id"
                :name='c.name'
                :icon='c.icon'
                :class="{ activeicon: c.id=== activeItem, active: c.id === activeItem}"
                @click.native="selectItem(c.id),SetCategorie(c.category)"
                
                >
                </ActivityCard>
            </div>
        </div>  
</section>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    name: 'ActivityContent',
    data: function() {
        return {
            activeItem : null
        }
    },
    methods: {
       selectItem(i) {
            this.activeItem = i;
        },
         ...mapMutations({
            toggle: 'ListCategory/toggle'
    }),SetCategorie(item){
        this.$store.dispatch('filteredBycategory',item)
    } 
    },
    computed: {
        ListCategory() {
            return this.$store.state.ListCategory.ListCategory
        }
    },
    
}

//reste a dev la partie recherche d'activité
</script>
<style scoped>
.card-content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}
</style>