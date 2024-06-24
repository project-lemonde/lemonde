import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import type { Scene } from "@babylonjs/core/scene";
import type { AbstractMesh } from "@babylonjs/core/Meshes/abstractMesh";

export interface AddBoxCommandProp {
    readonly scene: Scene;
}

export interface AddBoxCommandResult {
    readonly mesh: AbstractMesh;
}

export function AddBoxCommand({ scene }: AddBoxCommandProp): AddBoxCommandResult {
    const mesh = MeshBuilder.CreateBox(getUniqueName(scene), {}, scene);

    return { mesh };
}

function getUniqueName(scene: Scene): string {
    let i = 0;
    while (scene.getTransformNodeByName(`Box${i}`)) {
        i++;
    }
    return `Box${i}`;
}
