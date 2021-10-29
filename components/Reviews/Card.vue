<template>
    <article class="card-reviews">
        <div>
           <img class="customer-img" :src="image" alt="">
        </div>
        <div>
            <div>
                <p class="name font-police">{{name}}</p>
            </div>
            <div>
              <p class="reviews font-police">"{{reviews}}"</p>
            </div>
            <div>
                notation
            </div>
        </div>
    </article>
</template>
<script>
export default {
    name: 'Card',
    props: ['image','name','reviews']
}
</script>
<style scoped>
    .card-reviews{  
        display: flex;
        justify-content: center;
        align-content: center;
        padding: 10px;
        margin: 30px;
    }
   .customer-img{
       width: 110px;
       height: 110px;
       border-radius: 50%;
       margin-right: 15px;
   }
   .name{
       font-size: 1.5em;
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
   }
      @media screen and (min-width: 600px) {
       .card-reviews{
        margin: 20px;
       }
       .reviews{
        font-size: 1em;
       }
   }
</style>