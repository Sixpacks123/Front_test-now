<template>
<header class="page-container">
    <div class="container-nav">
        <div class="nav-right">
        <div>
            <img  class="logo" src="~/assets/img/logo.png" alt="" />
        </div>
        <nav class="nav-link">
            <nuxt-link class="header__link" to="/">
                Réservation
            </nuxt-link>
            <nuxt-link class="header__link" to="/">
                Contact
            </nuxt-link>
        </nav>
    </div>
    <div class="nav-left">
         future componsant de recherche 
    </div>
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
  .container {
    flex-direction: column;
    padding: 2rem 2rem;
  }
}

.nav-right{
    display: flex;
    flex-direction: column;
}

.nav-link{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 2px 10px;
    font-size: 1em;
}


.logo{
    width: 250px;
}


</style>
