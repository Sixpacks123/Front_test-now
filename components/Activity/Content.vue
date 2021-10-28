<template>
    <section class="">
        <div class="page-container">
            <h2 class="font-police">Recherche par activité</h2>
            <div class="card-content">
                 <ActivityCard 
              v-for="item in items" :key="item.name"
              :name='item.name'
              :icon='item.icon'>
              </ActivityCard>
            </div>
             
        </div>
    </section>
</template>
<script>

import Card from './Card.vue'
export default {
    name: 'content',
    components: { Card },
    data: function() {
        return {
            items: [
                {
                    name: 'Montagne',
                    icon: ['fas', 'hiking']
                },
                {
                    name : 'Sport d\'hiver',
                    icon : ['fas','skiing']
                },
                {
                    name : 'Sport aquatique',
                    icon : ['fas','swimmer']
                },
                {
                    name : 'Sport d\'équipe',
                    icon: ['fas','volleyball-ball']
                },
                {
                    name : 'Aérien',
                    icon : ['fas','helicopter']
                }
            ]
        }
    }
}
</script>
<style scoped>
section{
    width: 100vw;
    max-width: 100vw;
    position: relative;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    padding: 30px 0px 50px;
}

.card-content{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
}

</style>