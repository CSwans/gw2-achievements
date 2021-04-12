import create from 'zustand'
import { persist } from "zustand/middleware"

export const useStore = create(persist(
    (set) => ({
        keys: [],
        saveNewKey: (newKey) => set(state => ({ keys: [...state.keys, newKey ] })),
        deleteKey: (keyName) => set(state => ({ keys: state.keys.filter(key => key.name !== keyName) }))
    }),
    {
        name: "key-storage", // unique name
        getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
))

export default useStore
