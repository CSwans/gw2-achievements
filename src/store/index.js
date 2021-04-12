import create from 'zustand'
import { persist } from "zustand/middleware"
import fetchAccountAchievements from "../api/accountAchievements"

export const useStore = create(persist(
    (set) => ({
        keys: [],
        saveNewKey: async (newKey) => {
            const accountAchievements = await fetchAccountAchievements({ accountKey: newKey.value })
            set(state => ({ keys: [...state.keys, { ...newKey, achievements: accountAchievements } ] }))
        },
        deleteKey: (keyName) => set(state => ({ keys: state.keys.filter(key => key.name !== keyName) }))
    }),
    {
        name: "key-storage", // unique name
        getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
))

export default useStore
