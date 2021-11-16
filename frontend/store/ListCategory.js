

export const state = () => ({
    ListCategory: [/*
        {
            id: 1,
            name: 'Montagne',
            icon: ['fas', 'hiking'],
            category:"Montagne",
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
            category : 'Aquatique'
        },
        {
            id: 4,
            name : 'Sport d\'équipe',
            icon: ['fas','volleyball-ball'],
            category:'Equipe'
        },
        {
            id: 5,
            name : 'Aérien',
            icon : ['fas','helicopter'],
            category:'Aerien'
        }*/
    ]
})



export const mutations = {
      toggle(state, c) {
        c.done = !c.done
      },
      updateCategory (state,ListCategory){
          state.ListCategory = ListCategory
      }
}

export const actions = {
    loadData({commit}) {
        this.$axios.get('http://localhost:3001/activityCategory').then((response) =>{
            commit('updateCategory', response.data)
        })
    }
}
