import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { create } from "zustand";

interface State {
    engine: AbstractEngine | null;
}

interface Actions {
    setEngine: (engine: AbstractEngine | null) => void;
}

export const useEngineStore = create<State & Actions>()((set) => ({
    engine: null,
    setEngine: (engine) => set({ engine }),
}));
