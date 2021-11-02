<template>
        <form class="search_bar">
            <div>
                <font-awesome-icon class="search-icon" :icon="['fas', 'search']"/>
            </div>
            <div>
                <input 
                class="bar"
                type="text"
                placeholder="Ville, Pays">
            </div>
            <div class="btn">
                <button class="btn">Rechercher</button>
            </div>
        </form>    
</template>
<script >
/*
export default {
    computed: {

    }, @change="hanfleChange"
                v-model="searchText"
    data() {
        return {
            searchText: ''
        }
    },
    methods: {
        handleChange(){
            this.$emit("search", this.searchText)
        }
    }
}*/
</script>
<style scoped>
.search_bar{
    border: 1px solid var(--color-light-gray);
    border-radius: 5px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
   height: 40px;
   width: 100%
}

.btn{
   visibility: hidden;
}
.bar{
    background-color: transparent;
    font-size: .9em;
    font-weight: 400;
    color: var(--color-gray);
    outline: none;
    width: auto;
    height: 40px;
    padding: 0 5px;
    border:none;
}
.search-icon{
    color: var(--color-red);
    margin: 0 10px;
    width: 1em;
    height: 40px;
}
 

 @media screen and (min-width: 800px) {
   .btn{
    visibility:visible;
    width: 120px;
    background-color: var(--color-light-gray);
    color: var(--color-black);
    margin: 0 0 0 auto;
    font-weight: 500;
    border: none;
    transition: .2s linear;
    height: 40px;
}
.search_bar{
    width: 400px;
}
  }
</style>