<template>
    <section class="section-colors">
        <div class="page-container">
        <h2 class="font-police">Nos coups de coeur</h2>
            <div>
                <FavHeartCard/>
            </div>
        </div>            
    </section>    
</template>
<script>
export default {
    data () {
        return {
            items: [
                {
                    title: '',
                    country: '',
                    town: '',
                    price: '',
                    popular: '',
                    time:'',
                    rating:''
                }
            ]
        }
    }
}
</script>
<style scoped>

</style>