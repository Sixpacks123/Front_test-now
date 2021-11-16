<template>
    <div>
        <div class="card">
            <span  class="popular font-police" v-if='activities.popular === true'>POPULAIRE</span>
            <img class="img" :src="require(`~/assets/img/${activities.img}.jpg`)" alt="">
            <div class="card-content" :class="{  contentUp: show === true }">
                <div class="btn" @click="show = !show">
                    <!--icone flèche-->
                    <font-awesome-icon class='icon' :class="{ iconUp: show === true }" :icon="['fas', 'chevron-up']"/>
                </div>
                <div class="card-header">
                    <div class="card-description">
                        <h4 class="font-police">{{ activities.TitleActivity }}</h4>
                        <span class="location font-police">{{ activities.city }}, {{ activities.country }}</span>
                    </div>
                    <div class="card-description"> 
                        <p class="font-police">{{activities.price}}€ </p>
                    </div>
                </div>
                <div class="card-header">
                    <div>
                        <GlobalRatingStar
                        :rating=5
                        :ratingValue='activities.rating'
                        ></GlobalRatingStar>
                    </div>
                    <div>
                        <span class="font-police">Durée</span>
                        <span class="font-police">{{  activities.time }}</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
</template>
<script>
export default {
    props: ["activities"],
    data () {
        return {
            show: false
        }
    },
    computed : {
        imageSource() {
            return require(`~/assets/img/${this.imageName}.jpg`)
        },
    }
}
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
.contentUp{
    height: 80px;
}
.btn{
    position: absolute;
    width: 17px;
    height: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color:var(--color-white);
    border: .5px solid #ccc;
    left: 50%;
    transform: translate(-50%,-20px);
    transition: all .2s linear;
    cursor: pointer;
}
.img{
    width: 100%;
    height: 140px;
    object-position: center;
    object-fit: cover;
}
.card-header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
}
.card-description{
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}
.icon{
    color: var(--color-gray);
    width: .7em;
}
.iconUp{
    transform: rotate(180deg);
}
.popular{
    background-color: var(--color-dark-cyan);
color: #fff;
font-size: .8em;
padding: 3px 7px;
position: absolute;
top: 10px;
right: 10px;
border-radius: 5px;
}
.location{
    font-size: .7em;
font-weight: 100;
letter-spacing: 1px;
color: #999;
margin-top: 5px;
}
</style>
