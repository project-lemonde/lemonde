import { create } from "zustand";

interface ProjectProperty {
    name: string;
    engineType: string;
    engineOptions: { [key: string]: unknown };
}

interface State {
    projectProperty: ProjectProperty | null;
}

interface Actions {
    setProjectProperty: (projectProperty: State["projectProperty"]) => void;
}

export const useProjectStore = create<State & Actions>()((set) => ({
    projectProperty: null,
    setProjectProperty: (projectProperty) => set({ projectProperty }),
}));
