export default function({ store, route, redirect }) {
    let user = store.$auth.user
    let page = route.name

    // if (!user) {
    //     store.$auth.setUser(store.$auth.$storage.getUniversal('user', true))
    //     user = store.$auth.$storage.getUniversal('user', true)
    // }

    // Login redirect
    if (user && page === 'index')
        return redirect('/dashboard')
}