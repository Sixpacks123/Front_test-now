<template>
    <footer class="page-container">
        <div class="content-navigation">
            <div class="footer-link">
                <!--Navigation--> 
                <FooterNavigation/>
                <!--About-->
                <FooterAbout/>
            </div>
            <!--Newsletter-->
            <FooterNewsletter/>
        </div>
    </footer>
</template>
<script>
</script>

<style scoped>
.content-navigation{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 20px;
}

.footer-link{
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
} 
@media screen and (min-width: 600px) {
    .content-navigation{
        flex-direction: row;
    }
    .footer-link{
        flex-direction: row;
    }
  }

</style>