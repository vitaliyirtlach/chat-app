import router from '@/router'
import { createStore } from 'vuex'

const defaultState = {
    isAuth: false,
    userId: null,
    avatar: null,
    groups: [],
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
        },
        newGroup(state, group) {
            state.groups.push(group as never)
        }
    }
})

export default store
