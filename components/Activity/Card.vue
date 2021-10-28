<template>
    <div class="card">

        <font-awesome-icon class="icon" :icon="icon"/>
        <p class="font-police">{{name}}</p>
    </div>
    
</template>
<script>
export default {
    name: 'Card',
    props: ['name', 'icon' ]
}
</script>

<style scoped>
.card{
    height: 120px;
    width: 120px;
    background-color: var(--color-white);
    border: 2px solid var(--color-light-gray);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    }

.icon{ 
    margin: 30px auto auto;
    font-size: 1.8em;
}
.card:active{
border: 2px solid green;
}


</style>