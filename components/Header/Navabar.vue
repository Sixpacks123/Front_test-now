<template>
<header class="page-container">
    <div class="container-nav">
       <HeaderNavContent/>
       <HeaderSearchBar/>
    </div>
  </header>
</template>
<style scoped>
.container-nav {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding:10px;


}
@media screen and (min-width: 600px) {
  .container-nav {
    flex-direction: row;
    padding: 2rem  2rem;
  }
}
</style>
