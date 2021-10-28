<template>
    <div>
        <h3 class="font-police">Incrivez-vous à notre NewsLetter !</h3>
        <div class="content-news">
            <input class="input-news font-police" type="text" placeholder="Adresse Email"/>
            <div class="icon-news">
                <font-awesome-icon :icon="['fas', 'mail-bulk']"/>
                <font-awesome-icon :icon="['fas', 'facebook']"/>
                <font-awesome-icon :icon="['fas', 'mail-bulk']"/>
                <font-awesome-icon :icon="['fas', 'mail-bulk']"/>
                
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
    margin-bottom: 5px;
    
}

.icon-news{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    gap: 5px
}
</style>