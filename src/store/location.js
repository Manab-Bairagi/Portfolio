import { create } from "zustand";
import { locations } from "../constants";
import { immer } from "zustand/middleware/immer";

const DEFAULT_LOCATION = locations.work

export const useLocationStore = create(immer((set) => ({
    activeLocation: DEFAULT_LOCATION,
    setActiveLocation: (location=null) => set((state) => {
        state.activeLocation = location || DEFAULT_LOCATION
    }),
    resetActiveLocation: () => set((state) => {
        state.activeLocation = DEFAULT_LOCATION
    })


}))
)

