import store from "@/store"
export const getGroup = (groupId: number | string, cb: Function) => {
    const group = store.state.groups.find((group: any) => group.id == groupId)
    if (group) {
        cb(group)
    }
}