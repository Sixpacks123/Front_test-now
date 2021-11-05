<template>
<header class="page-container">
    <div class="container-nav">
       <HeaderNavContent/>
       <HeaderSearchBar v-model="search"/>
    </div>
  </header>
</template>
<script>
export default {
  props: ['search']
}
</script>
<style scoped>
.container-nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding:10px;
}
@media screen and (min-width: 600px) {
  .container-nav {
    flex-direction: row;
  }
}
</style>
