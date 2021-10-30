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
              @click.native="selectItem(item.id)"

              >
              
              </ActivityCard>
            </div>
             {{messsage}}
        </div>
    </section>
</template>
<script>

import Card from './Card.vue'
export default {
    name: 'ActivityContent',
    components: { Card },
    data: function() {
        return {
            items: [
                {
                    id: 1,
                    name: 'Montagne',
                    icon: ['fas', 'hiking'],
                    categorie:"Montage",

                },
                {
                    id: 2,
                    name : 'Sport d\'hiver',
                    icon : ['fas','skiing'],
                    categorie : 'Hiver',
                    
                },
                {
                    id: 3,
                    name : 'Sport aquatique',
                    icon : ['fas','swimmer'],
                    categorie : 'aquatique'
                },
                {
                    id: 4,
                    name : 'Sport d\'équipe',
                    icon: ['fas','volleyball-ball']
                },
                {
                    id: 5,
                    name : 'Aérien',
                    icon : ['fas','helicopter']
                }
            ],
            activeItem : null,
            messsage: ''
        }
    },
    methods: {
       selectItem(i) {
            this.activeItem = i;

        }
    } 
}
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