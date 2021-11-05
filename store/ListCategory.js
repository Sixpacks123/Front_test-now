

export const state = () => ({
    ListCategory: [
        {
            id: 1,
            name: 'Montagne',
            icon: ['fas', 'hiking'],
            category:"Montage",
        },
        {
            id: 2,
            name : 'Sport d\'hiver',
            icon : ['fas','skiing'],
            category : 'Hiver',  
        },
        {
            id: 3,
            name : 'Sport aquatique',
            icon : ['fas','swimmer'],
            category : 'aquatique'
        },
        {
            id: 4,
            name : 'Sport d\'équipe',
            icon: ['fas','volleyball-ball'],
            category:'equipe'
        },
        {
            id: 5,
            name : 'Aérien',
            icon : ['fas','helicopter'],
            category:'aerien'
        }
    ]
})



export const mutations = {
      toggle(state, c) {
        c.done = !c.done
      }
}


