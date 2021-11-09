export const state = () => ({
    allActivity: [
        {
            name:'Rando',
            ville: 'Tigne',
            category:'Montagne'
        },
        {
            name:'ski',
            ville: 'Brest',
            category:'Hiver'
        },
        {
            name:'nantation',
            ville: 'Marseille',
            category: 'Aquatique'
        },
        {
            name:'foot',
            ville: 'Marseille',
            category: 'Equipe'
        },
        {
            name:'parapente',
            ville: 'Marseille',
            category: 'Aerien'
        }
    ],
    activity:{},
    category:{},
    searchWord: null,
    filteredActivity: null,
    filteredCategory: null
})

export const getters = {
    allActivity: (state) => state.allActivity,
    getActivity: (state) => state.activity,
    getCategory: (state) => state.category,
    getSearchWord: (state) => state.searchWord,
    getFilteredActivity: (state) =>state.filteredActivity,
    getFilteredActivity: (state) =>state.filteredCategory,

}

export const mutations = {
    filtered_Activity (state, word) {
        word= word.trim().toLowerCase()
        if (!(word) || word === '{}') {
            state.searchWord = null
            state.filteredActivity = null
        } else {
          state.searchWord = word
          word = word.trim().toLowerCase()
          state.filteredActivity = state.allActivity.filter((activity ) => {
            return activity.ville.toLowerCase().includes(word) || activity.name.toLowerCase().includes(word) 
          })
        }
      },
      filteredBycategory (state,category) {
          console.log(category)
        state.filteredCategory = category
        category = category.toLowerCase()
        state.filteredCategory = state.allActivity.filter((activity) =>{ return activity.category.toLowerCase().includes(category) })
        
    }
}

export const actions = {
    filtered_Activity ({ commit }, word) {
        commit('filtered_Activity', word)
      },
      filteredBycategory ({ commit}, Ncategory){
          commit('filteredBycategory', Ncategory)
      }

    }

