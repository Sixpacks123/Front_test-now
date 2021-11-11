<template>
    <div>
        <div class="card">
            <img class="img" src="~/assets/img/parapente.jpg" alt="">
            <div class="card-content">
                <div class="btn">
                    <!--icone flèche-->
                </div>
                <div class="card-header">
                    <div class="card-header">
                        <h4>{{ activities.name }}</h4>
                        <p>{{ activities.ville }}</p>
                    </div>
                    <div class="card-header">
                        <p></p>
                    </div>
                </div>
                <div class="card-description">
                    <GlobalRatingStar
                    :rating=5
                    :ratingValue="5"
                    ></GlobalRatingStar>
                    <p>
                        <span></span>
                        <span></span>
                    </p>
                </div>
            </div>
        </div>
        <p>{{ activities.name }}</p>
        <p>{{ activities.category }}</p>
        </div>
</template>
<script>
export default {
    props: ["activities"]
}
// en attente du back pour dev cete page
</script>
<style scoped>
.card{
    width: 300px;
    height: 200px;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 2px 10px #ddd;
    overflow: hidden;
    position: relative;
    margin: 10px 10px 10px 0;
}
.card-content{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: calc(100% - 20px);
    height: 40px;
    background-color: #fbfbfb;
    padding: 10px;
    transition: all .2s linear;
}

.img{
    width: 100%;
    height: 140px;
    object-position: center;
    object-fit: cover;
}

</style>
