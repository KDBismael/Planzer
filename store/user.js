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
        state.googleResponse = googleResponse
    },
  }
  
  export const actions = {
    async signInWithGoogle({commit, dispatch}, googleCode) {
      try {
        await this.$axios.post('login/google', googleCode).then((res) => commit('setGoogleResponse', res.data))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    },
    async updateAccountSetting({commit,dispatch},data){
      try {
        await this.$axios.put('/user',data).then((res) => console.log(res))
      } catch (exception) {
        console.error(exception)
        await commit('base/setError', exception, {root: true})
      }
    }
  }