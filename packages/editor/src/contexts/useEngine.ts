import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { createContext } from "react";

export const EngineContext = createContext<AbstractEngine | null>(null);
