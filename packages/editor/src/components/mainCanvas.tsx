import { Scene } from "@babylonjs/core/scene";
import { makeStyles } from "@fluentui/react-components";
import { useMemo } from "react";
import { useEngineStore } from "../stores/engineStore";
import { useProjectStore } from "../stores/projectStore";
import { useSceneStore } from "../stores/sceneStore";
import { UniversalCamera } from "@babylonjs/core/Cameras/universalCamera";
import { Vector3 } from "@babylonjs/core";

async function initEngineAsync(canvas: HTMLCanvasElement, engineType: string, engineOptions: { [key: string]: unknown }) {
    if (engineType === "webgl1" || engineType === "webgl2") {
        const { Engine } = await import("@babylonjs/core/Engines/engine");
        // biome-ignore lint/style/useNamingConvention: <explanation>
        return new Engine(canvas, false, { ...engineOptions, ...{ disableWebGL2Support: engineType === "webgl1" }});
    }
    if (engineType === "webgpu") {
        const { WebGPUEngine } = await import("@babylonjs/core/Engines/webgpuEngine");
        if (await WebGPUEngine.IsSupportedAsync) {
            const engine = new WebGPUEngine(canvas, engineOptions);
            await engine.initAsync();
            return engine;
        }
        throw new Error("WebGPU is not supported on this device.");
    }
    throw new Error("Unknown engine type.");
}

const useStyles = makeStyles({
    mainCanvas: {
        width: "100%",
        height: "100%",
    },
});

export function MainCanvas() {
    const styles = useStyles();
    const setEngine = useEngineStore((state) => state.setEngine);
    const projectProperty = useProjectStore((state) => state.projectProperty);
    const setProjectProperty = useProjectStore((state) => state.setProjectProperty);
    const activeSceneId = useSceneStore((state) => state.activeSceneId);
    const setHierarchy = useSceneStore((state) => state.setHierarchy);
    const setActiveSceneId = useSceneStore((state) => state.setActiveSceneId);
    const setSelectedId = useSceneStore((state) => state.setSelectedId);

    const canvasRef = useMemo(() => {
        let cleanup: (() => void) | undefined;
        return (canvas: HTMLCanvasElement | null) => {
            if (!(projectProperty && canvas)) {
                cleanup?.();
                return;
            }

            initEngineAsync(canvas, projectProperty.engineType, projectProperty.engineOptions)
                .then((engine) => {
                    function resize() {
                        engine.resize();
                    }
                    window.addEventListener("resize", resize);
                    const scene = new Scene(engine);
                    const id = "New Scene";
                    const camera = new UniversalCamera("EditorCamera", new Vector3(0, 5, -10), scene);
                    camera.setTarget(new Vector3(0, 1, 0));
                    camera.attachControl(true);
                    scene.metadata = { id };
                    setHierarchy(id, { type: "scene" });
                    setActiveSceneId(id);
                    setSelectedId(id);
                    function renderActiveScene() {
                        for (const scene of engine.scenes) {
                            if (scene.metadata && scene.metadata.id === activeSceneId) {
                                scene.render();
                            }
                        }
                    }
                    engine.runRenderLoop(renderActiveScene);
                    cleanup = () => {
                        engine.stopRenderLoop(renderActiveScene);
                        engine.dispose();
                        window.removeEventListener("resize", resize);
                        setEngine(null);
                        setProjectProperty(null);
                    };
                }).catch((err) => {
                    window.alert(err);
                    setProjectProperty(null);
                });
        };
    }, [projectProperty, setEngine, setProjectProperty, activeSceneId, setSelectedId, setHierarchy, setActiveSceneId]);

    return (
        <canvas ref={canvasRef} className={styles.mainCanvas} />
    );
}
