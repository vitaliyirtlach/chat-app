import router from '@/router'
import { createStore } from 'vuex'
import { socket } from "@/socket"
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
        },
        newMessage(state, {message, groupId}) { 
            const group: any = state.groups.find((group: any) => group.id == groupId);
            if (!group.messages.find((mes: any) => mes.id === message.id)) group.messages.push(message)
        },
        logout(state) {
            store.replaceState(defaultState)
            router.push("/auth/login")
        }
    }
})

export default store
