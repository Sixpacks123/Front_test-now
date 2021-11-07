export const state = () => ({
    allActivity: [
        {
            name:'Paris',
            ville: 'Paris'
        },
        {
            name:'Rennes',
            ville: 'Rennes'
        },
        {
            name:'Brest',
            ville:'Brest'
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
        if (!(word) || word === '{}') {
            state.searchWord = null
            state.filteredActivity = null
        } else {
          state.searchWord = word
          word = word.trim().toLowerCase()
          state.filteredActivity = state.allActivity.filter((activity) => {
            return activity.ville.toLowerCase().includes(word) 
          })
        }
      }
    }

export const actions = {
    filtered_Activity ({ commit }, word) {
        commit('filtered_Activity', word)
      }
    }

