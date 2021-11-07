export const state = () => ({
    allActivity: [
        {
            name:'Piscine',
            ville: 'Paris'
        },
        {
            name:'surf',
            ville: 'Rennes'
        },
        {
            name:'parapente',
            ville: 'Marseille'
        }
    ],
    activity:{},
    searchWord: null,
    filteredActivity: null,
})

export const getters = {
    allActivity: (state) => state.allActivity,
    getActivity: (state) => state.activity,
    getSearchWord: (state) => state.searchWord,
    getFilteredActivity: (state) =>state.filteredActivity
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
          state.filteredActivity = state.allActivity.filter((activity) => {
            return activity.ville.toLowerCase().includes(word) || activity.name.toLowerCase().includes(word)  
          })
        }
      }

    }

export const actions = {
    filtered_Activity ({ commit }, word) {
        commit('filtered_Activity', word)
      }
    }

