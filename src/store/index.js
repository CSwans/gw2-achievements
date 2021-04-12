import create from 'zustand'
import { persist } from "zustand/middleware"
import fetchAccountAchievements from "../api/accountAchievements"

export const useStore = create(persist(
    (set, get) => ({
        keys: [],
        saveNewKey: async (newKey) => {
            const accountAchievements = await fetchAccountAchievements({ accountKey: newKey.value })
            set(state => ({ keys: [...state.keys, { ...newKey, achievements: accountAchievements } ] }))
        },
        deleteKey: (keyName) => set(state => ({ keys: state.keys.filter(key => key.name !== keyName) })),
        refreshKey: async (keyName) => {
            const keyEntry = get().keys.findIndex(k => k.name === keyName)
            const accountAchievements = await fetchAccountAchievements({ accountKey: get().keys[keyEntry].value })
            const newKeys = get().keys
            newKeys[keyEntry].achievements = accountAchievements
            set(newKeys)
        }
    }),
    {
        name: "key-storage", // unique name
        getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
))

export default useStore
