export const state = () => ({
    user: {
        name: '',
        title: '',
        city: '',
        phone: '',
        about: '',
    },
    googleResponse: ''
  })
  
  export const mutations = {
    setUser(state, user) {
        if (!user) user = {}
        state.user = user
    },
    setGoogleResponse(state, googleResponse) {
        if (googleResponse.token)
            state.user = googleResponse
        else
            state.googleResponse = googleResponse
    },
    setAccountSettings(state,option){
      state.user[Object.keys(option)]=Object.values(option)[0]
      console.log(state.user)
    }
  }
  
  export const actions = {
    async signInWithGoogle({ commit, dispatch }, googleCode) {
        try {
            await this.$axios.post('login/google', googleCode).then((res) => commit('setGoogleResponse', res.data))
        } catch (exception) {
            console.error(exception)
            await commit('base/setError', exception, { root: true })
        }
    },
    async updateAccountSettings({commit,dispatch},data){
      try {
        console.log(data)
        await this.$axios.put('/user',data).then((res) => commit('setAccountSettings',data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async uploadPictute({dispatch,commit},data){
      try {
        await this.$axios.post('/user/profile-picture',data).then((res) => console.log(res))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    }
  }