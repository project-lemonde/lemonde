import type { Scene } from "@babylonjs/core/scene";
import { createContext } from "react";

export const CurrentSceneContext = createContext<Scene | null>(null);
