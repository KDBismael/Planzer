export const state = () => ({
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 69ab1e8ec8bc2d397c65b6538734ccfa4451a1e7
  user: {
      name: '',
      title: '',
      city: '',
      phone: '',
      about: '',
  },
  googleResponse: ''
<<<<<<< HEAD
=======
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
=======
    user: {
        name: '',
        title: '',
        city: '',
        phone: '',
        about: '',
    },
    googleResponse: ''
>>>>>>> 69ab1e8ec8bc2d397c65b6538734ccfa4451a1e7
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
<<<<<<< HEAD
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
=======
    async signInWithGoogle({ commit, dispatch }, googleCode) {
        try {
            await this.$axios.post('login/google', googleCode).then((res) => commit('setGoogleResponse', res.data))
        } catch (exception) {
            console.error(exception)
            await commit('base/setError', exception, { root: true })
        }
    },
>>>>>>> dc178bc4efc7f20f31a16ae7257af2d313472a7b
>>>>>>> 69ab1e8ec8bc2d397c65b6538734ccfa4451a1e7
}