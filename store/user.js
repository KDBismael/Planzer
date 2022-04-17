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

    async revoverLink({ commit, dispatch },data){
        try {
            await this.$axios.post('/forgot-password',data).then((res) => console.log(res))
        } catch (exception) {
            console.error(exception)
            await commit('base/setError', exception, { root: true })
        }
    },

    async setNewPassword({ commit, dispatch },data){
        try {
            await this.$axios.post('/change-forgot-password',data).then((res) => console.log(res))
        } catch (exception) {
            console.error(exception)
            await commit('base/setError', exception, { root: true })
        }
    },
    async signUpWithGoogle({commit,dispatch},data){
        try {
            console.log(data)
            await this.$axios.post('/sign-up/google',data).then((res) => console.log(res))
        } catch (exception) {
            console.error(exception)
            await commit('base/setError', exception, { root: true })
        }
    }
}