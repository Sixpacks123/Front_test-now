<template>
    <article class="card-reviews">
           <img class="customer-img" :src="require(`~/assets/img/${image}.jpg`)" alt="">
        <div>
            <div>
                <p class="name font-police">{{name}}</p>
            </div>
            <div>
              <p class="reviews font-police">"{{reviews}}"</p>
            </div>
            <div>
                <GlobalRating
                :rating=5
                :ratingValue="rating"
                ></GlobalRating>
            </div>
        </div>
    </article>
</template>
<script>
export default {
    props: ['image','name','reviews','rating']
}
</script>
<style scoped>
    .card-reviews{  
        display: flex;
        justify-content: center;
        align-content: center;
        margin: 5px;
        padding: 10px;
    }
   .customer-img{
       
       width: 80px;
       height: 80px;
       border-radius: 50%;
       margin-right: 15px;
   }
   .name{
       font-size: 1.2em;
       font-weight: 500;
       color: var(--color-dark);
   }
   .reviews{
       font-style: italic;
       color: var(--color-mid-gray);
       font-size: 0.6em;
   }
   @media screen and (min-width: 1220px) {
       .card-reviews{
        width: 45%;
        margin: 20px;
       }
       .reviews{
        font-size: 1em;
       }
       .name{
           font-size: 1.5em;
       }
       .customer-img{
           width: 110px;
           height: 110px;
       }
   }
      @media screen and (min-width: 600px) {
       .card-reviews{
        margin: 20px;
       }
       .reviews{
        font-size: 1em;
       }
       .name{
           font-size: 1.3;
       }
   }
</style>