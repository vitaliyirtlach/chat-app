import router from '@/router'
import { createStore } from 'vuex'

const defaultState = {
    isAuth: false,
    id: null,
    avatar: null,
    groups: null,
    email: null,
    location: null,
    firstName: null,
    lastName: null
}

const store = createStore({
    state: defaultState,
    
    mutations: {
        setUserData(state, payload) {
            store.replaceState({isAuth: state.isAuth, ...payload})
        },
        setAuth(state, isAuth = false) {
            state.isAuth = isAuth
            router.push("/")
        }
    }
})

export default store
