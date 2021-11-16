<template>
    <div>
        <!--composant Recherche activité contient les card des sport, le systeme de filtre et le bloc -->
        <ActivityContent/> 
        <!--composant nos coups de coeurs card d'activité con tenant des donnée recupéréer avec axios -->
        <FavContent/>
        <!-- Composant Retour clients-->
        <ReviewsContent/>
       
    </div>
</template>
<script>
export default {
    //charger les deonnée du backend
    created() {
    //console.log(this.$store)
    this.$store.dispatch('loadData') // dispatch loading
  }
}
</script>