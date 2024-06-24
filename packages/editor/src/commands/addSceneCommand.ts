import type { Camera } from "@babylonjs/core/Cameras/camera";
import { UniversalCamera } from "@babylonjs/core/Cameras/universalCamera";
import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { Scene } from "@babylonjs/core/scene";

export interface AddSceneCommandProp {
    readonly engine: AbstractEngine;
}

export interface AddSceneCommandResult {
    readonly scene: Scene;
    readonly camera: Camera;
}

export function AddSceneCommand({ engine }: AddSceneCommandProp): AddSceneCommandResult {
    const scene = new Scene(engine);

    // Add editor-specific camera
    const camera = new UniversalCamera("EditorCamera", new Vector3(0, 5, -5), scene);

    return { scene, camera };
}
