<template>
    <footer class="page-container">
        <div class="content-navigation">
                <!--Navigation--> 
                <FooterNavigation/>
                <!--About-->
                <FooterAbout/>
        </div>
                <!--Newsletter-->
        
    </footer>
</template>
<style scoped>
.content-navigation{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
}

@media screen and (min-width: 600px) {
    .content-navigation{
        flex-direction: row;
    }
  }

</style>