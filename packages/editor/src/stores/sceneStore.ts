import { create } from "zustand";

interface State {
    hierarchy: { [id: string]: unknown };
    activeSceneId: string | null;
    selectedId: string | null;
}

interface Actions {
    setHierarchy: (id: string, property: unknown) => void;
    setActiveSceneId: (id: State["activeSceneId"]) => void;
    setSelectedId: (id: State["selectedId"]) => void;
}

export const useSceneStore = create<State & Actions>()((set) => ({
    hierarchy: {},
    activeSceneId: null,
    selectedId: null,
    setHierarchy: (id, property) => set((state) => {
        state.hierarchy[id] = property;
        return state;
    }),
    setActiveSceneId: (id) => set({ activeSceneId: id }),
    setSelectedId: (id) => set({ selectedId: id }),
}));
