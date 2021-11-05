<template>
        <div class="nav-right">
            <div>
                <img  class="logo" src="~/assets/img/logo.png" alt="" />
            </div>
            <nav class="nav-link">
                <nuxt-link class="header__link" to="/">
                <font-awesome-icon :icon="['fas', 'book-open']"/>
                    Réservation
                </nuxt-link>
                <nuxt-link class="header__link" to="/">
                <font-awesome-icon :icon="['fas', 'mail-bulk']"/>
                    Contact
                </nuxt-link>
            </nav> 
        </div>
</template>
<style scoped>
.nav-right{
    display: flex;
    flex-direction: column;
}
.nav-link{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 20px 0;
    font-size: 1em;
}
.logo{
    width: 250px;
}
</style>