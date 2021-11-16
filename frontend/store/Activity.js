
export const state = () => ({
    allActivity: [/*
        {
            TitleActivity:'Parapente',
            city: 'Annecy',
            country: 'France',
            price:'80',
            rating:3,
            time: '1h30',
            img:'blausee',
            popular: false,
            category:'Montagne'
        },
        {
            TitleActivity:'Blausee',
            city: 'Bern',
            country: 'Suisse',
            price:'Gratuit',
            rating:2,
            time: '3h',
            img:'blausee',
            popular: false,
            category:''
        },
        {
            TitleActivity:'Ski alpin',
            city: 'Mont-Tremblant',
            country: 'Canada',
            price:'24',
            rating:4,
            time: 'Illimité',
            img:'blausee',
            popular: true,
            category:'Ski'
        },
        {
            TitleActivity:'Balade à dos de chameau',
            city: 'Dubaï',
            country: ' Emirats arabes unis',
            price:'41',
            rating:4,
            time: 'Illimité',
            img:'blausee',
            popular: true,
            category:'Montagne'
        }*/
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
    getFilteredCategory: (state) =>state.filteredCategory,

}

export const mutations = {
    filtered_Activity (state, word) {
        word= word.trim().toLowerCase()
        if (!(word) || word === '{}') {
            state.searchWord = null
            state.filteredActivity = null
        } else {
          state.searchWord = word
          console.log(word)
          word = word.trim().toLowerCase()
          state.filteredActivity = state.allActivity.filter((activity ) => {
           return activity.city.toLowerCase().includes(word) || activity.TitleActivity.toLowerCase().includes(word) || activity.country.toLowerCase().includes(word) 
          })
        }
      },
      filteredBycategory (state,category) {
        state.filteredCategory = category
        category = category.toLowerCase()
        state.filteredActivity = state.allActivity.filter((activity) =>{ return activity.category.toLowerCase().includes(category) })
        
    },
    updateActivity(state, allActivity) {
        state.allActivity = allActivity
      },
}

export const actions = {
    filtered_Activity ({ commit }, word) {
        commit('filtered_Activity', word)
      },
      filteredBycategory ({ commit}, category){
          commit('filteredBycategory', category)
      },  loadData({commit}) {
        this.$axios.get('http://localhost:3001/activity').then((response) => {
          commit('updateActivity', response.data)
          
        })
      }

    }



    