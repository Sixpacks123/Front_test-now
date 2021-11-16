<template>
    <div class="card" >
        <font-awesome-icon class="icon" :icon="['fas',icon]"/>
        <p class="font-police">{{name}}</p>
    </div>
</template>
<script>
export default {
    props: ['name', 'icon' ]
}
</script>
<style scoped>
.card{
    height: 120px;
    width: 120px;
    box-shadow: 0 2px 5 green;
    border: 1px solid var(--color-light-gray);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all .2s linear;
    cursor: pointer;
    }
.icon{ 
    margin: 30px auto auto;
    font-size: 1.8em;
}
.active{
    border: 1px solid var(--color-green);
    box-shadow: 0 1px 5px var(--color-green);
}
.activeicon{
    color: var(--color-green);
}
</style>