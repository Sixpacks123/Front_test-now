<template>
    <section class="section-color">
        <div class="page-container">
            <h2 class="font-police">Recherche par activité</h2>
            <div class="card-content">
                <!--<ActivityCard 
                v-for="item in items" :key="item.id"
                :name='item.name'
                :icon='item.icon'
                :class="{ active: item.id === activeItem}"
                @click.native="selectItem(item.id,item.category)"
                >
                </ActivityCard>-->
                <ActivityCard 
                v-for="c in ListCategory" :key="c.id"
                :name='c.name'
                :icon='c.icon'
                :class="{ active: c.id === activeItem}"
                @click.native="selectItem(c.id)"
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
       selectItem(i,filter) {
            this.activeItem = i;
        },
         ...mapMutations({
            toggle: 'ListCategory/toggle'
    })
    },
    computed: {
        ListCategory() {
            return this.$store.state.ListCategory.ListCategory
        }
    } 
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
.highlight {
  background: yellow;
}

.done {
  text-decoration: line-through;
  background: red;
}
</style>