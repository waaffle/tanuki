import { create } from 'zustand'

type State = {
    currentCategory: number
}

type Actions = {
    setCurrentCategory: (newCat: number) => void
}

export const useCategoryStore = create<State & Actions>((set) => ({
    currentCategory: 1,
    setCurrentCategory: (newCat: number) => set({ currentCategory: newCat }),
}))