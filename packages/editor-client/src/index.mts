import { FreeCamera } from "@babylonjs/core/Cameras/freeCamera";
import { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine.js";
import { Engine } from "@babylonjs/core/Engines/engine.js";
import { WebGPUEngine } from "@babylonjs/core/Engines/webgpuEngine.js";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight.js";
import { Scene } from "@babylonjs/core/scene";
import "./index.css";
import { Vector3 } from "@babylonjs/core/Maths/math";

async function main() {
    const engine = await createEngine(document.getElementById("renderCanvas") as HTMLCanvasElement);
    const scene = await createInitialScene(engine);

    engine.runRenderLoop(() => {
        scene.render();
    });
    window.addEventListener("resize", () => {
        engine.resize();
    });
}

async function createEngine(canvas: HTMLCanvasElement): Promise<AbstractEngine> {
    if (await WebGPUEngine.IsSupportedAsync) {
        const engine = new WebGPUEngine(canvas, {
        });
        await engine.initAsync();
        return engine;
    }
    return new Engine(canvas, true, {}, true);
}

async function createInitialScene(engine: AbstractEngine) {
    const scene = new Scene(engine);
    const camera = new FreeCamera("EditorCamera", Vector3.One(), scene, true);
    camera.attachControl(true);
    const light = new DirectionalLight("DirectionalLight", new Vector3(0, 1, 0), scene);
    return scene;
}

main();
