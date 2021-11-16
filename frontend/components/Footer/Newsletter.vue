<template>
    <div>
        <h3 class="font-police">Incrivez-vous à notre NewsLetter !</h3>
        <div class="content-news">
            <input class="input-news font-police" type="text" placeholder="Adresse Email"/>
            <div class="icon-news">
                <font-awesome-icon class="icon" :icon="['fas', 'bed']"/>
                <font-awesome-icon class="icon" :icon="['fab', 'facebook']"/>
                <font-awesome-icon class="icon" :icon="['fab', 'instagram']"/>
                <font-awesome-icon class="icon" :icon="['fab', 'twitter']"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.content-news{
    display: flex;
    flex-direction: column;
}
.input-news{
    background-color: var(--color-light-gray);
    border: 0 solid;
    border-radius: 5px;
    height: 30px;
    outline: none;
    text-indent: 10px;
}
.icon-news{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 5px
}
.icon{
    color: var(--color-red);
    padding: 10px 5px;
}
@media screen and (min-width: 600px) {
    .content-news{
        flex-direction: column;
    }
}
</style>