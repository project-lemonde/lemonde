import { UniversalCamera } from "@babylonjs/core/Cameras/universalCamera";
import { Engine } from "@babylonjs/core/Engines/engine";
import { DirectionalLight } from "@babylonjs/core/Lights/directionalLight";
import "@babylonjs/core/Materials/standardMaterial";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Scene } from "@babylonjs/core/scene";

window.addEventListener("load", () => {
    const canvas = document.getElementById("render-canvas") as HTMLCanvasElement;
    const engine = new Engine(canvas);
    const scene = new Scene(engine);
    const camera = new UniversalCamera("EditorCamera", new Vector3(0, 5, -5), scene);
    camera.setTarget(new Vector3(0, 1, 0));
    camera.attachControl(true);

    new DirectionalLight("LIGHT", new Vector3(0, -0.8, 0.1), scene);
    MeshBuilder.CreateGround("GROUND", { width: 100, height: 100 }, scene);
    const box = MeshBuilder.CreateBox("BOX", {}, scene);
    box.position.y = 1;

    const render = () => {
        box.rotation.y += 0.01;
        scene.render();
    };
    const resize = () => {
        engine.resize();
    };
    engine.resize();
    window.addEventListener("resize", resize);
    engine.runRenderLoop(render);
});
