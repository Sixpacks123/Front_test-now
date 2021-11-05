<template>
    <section class="section-color">
        <div class="page-container">
            <h2 class="font-police">Recherche par activité</h2>
            <div class="card-content">
                <ActivityCard 
                v-for="item in items" :key="item.id"
                :name='item.name'
                :icon='item.icon'
                :class="{ active: item.id === activeItem}"
                @click.native="selectItem(item.id,item.category)"
                >
                </ActivityCard>
            </div>
        </div>  
        <li v-for="item in test" :key="item.name">{{item.name}}</li>
    </section>
</template>
<script>
import Card from './Card.vue'
export default {
    name: 'ActivityContent',
    components: { Card },
    data: function() {
        return {
            currentFilter: '',
            items: [
                {
                    id: 1,
                    name: 'Montagne',
                    icon: ['fas', 'hiking'],
                    category:"Montage",
                },
                {
                    id: 2,
                    name : 'Sport d\'hiver',
                    icon : ['fas','skiing'],
                    category : 'Hiver',  
                },
                {
                    id: 3,
                    name : 'Sport aquatique',
                    icon : ['fas','swimmer'],
                    category : 'aquatique'
                },
                {
                    id: 4,
                    name : 'Sport d\'équipe',
                    icon: ['fas','volleyball-ball'],
                    category:'equipe'
                },
                {
                    id: 5,
                    name : 'Aérien',
                    icon : ['fas','helicopter'],
                    category:'aerien'
                }
            ],
            activeItem : null
        }
    },
    methods: {
       selectItem(i,filter) {
            this.activeItem = i;
            this.currentFilter = filter;
        }
    },
    computed: {
        test () {
            return this.items ? this.items.category === this.currentFilter : console.log("tg")
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
</style>