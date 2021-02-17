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
        setAuth(state, payload) {
            store.replaceState(payload)
            router.push("/")
        }
    }
})

export default store
