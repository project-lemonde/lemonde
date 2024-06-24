import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import type { Light } from "@babylonjs/core/Lights/light";
import type { Vector3 } from "@babylonjs/core/Maths/math.vector";
import type { Scene } from "@babylonjs/core/scene";

export interface AddDirectionalLightCommandProp {
    readonly scene: Scene;
    readonly direction: Vector3;
    readonly position: Vector3;
}

export interface AddDirectionalLightCommandResult {
    readonly light: Light;
}

export function AddDirectionalLightCommand({ scene, direction, position }: AddDirectionalLightCommandProp): AddDirectionalLightCommandResult {
    const light = new DirectionalLight(getUniqueName(scene), direction, scene);
    light.position = position;
    light.autoCalcShadowZBounds = true;

    return { light };
}

function getUniqueName(scene: Scene): string {
    let i = 0;
    while (scene.getLightByName(`DirectionalLight${i}`)) {
        i++;
    }
    return `DirectionalLight${i}`;
}
