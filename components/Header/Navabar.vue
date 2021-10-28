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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  top: 0;

}
@media screen and (max-width: 600px) {
  .container-nav {
    flex-direction: column;
    padding: 2rem 2rem;
  }
}
</style>
