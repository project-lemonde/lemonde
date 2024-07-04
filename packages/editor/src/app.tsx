import { StrictMode } from "react";
import { MenuBar } from "./components/menuBar";
import { makeStyles } from "@fluentui/react-components";
import { CreateProjectDialog } from "./components/createProjectDialog";
import { useProjectStore } from "./stores/projectStore";
import { useEngineStore } from "./stores/engineStore";

const useStyles = makeStyles({
    createProject: {
        alignItems: "center",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
    },
    hidden: {
        display: "none",
    },
});

export function App() {
    const styles = useStyles();
    const setEngine = useEngineStore((state) => state.setEngine);
    const projectProperty = useProjectStore((state) => state.projectProperty);
    const setProjectProperty = useProjectStore((state) => state.setProjectProperty);

    function handleCreateProject(projectName: string, engineType: string, engineOptions: { [key: string]: unknown }) {
        setProjectProperty({ name: projectName, engineType, engineOptions });
    }

    function canvasRef(canvas: HTMLCanvasElement) {
        if (!projectProperty) {
            return;
        }

        switch (projectProperty.engineType) {
            case "webgl1": {
                import("@babylonjs/core/Engines/engine").then(({ Engine }) => {
                    // biome-ignore lint/style/useNamingConvention: <explanation>
                    const engine = new Engine(canvas, false, { ...projectProperty.engineOptions, ...{ disableWebGL2Support: true }});
                    function resize() {
                        engine.resize();
                    }
                    window.addEventListener("resize", resize);
                    setEngine(engine);
                });
                break;
            }
            case "webgl2": {
                import("@babylonjs/core/Engines/engine").then(({ Engine }) => {
                    // biome-ignore lint/style/useNamingConvention: <explanation>
                    const engine = new Engine(canvas, false, { ...projectProperty.engineOptions, ...{ disableWebGL2Support: false }});
                    function resize() {
                        engine.resize();
                    }
                    window.addEventListener("resize", resize);
                    setEngine(engine);
                });
                break;
            }
            case "webgpu": {
                import("@babylonjs/core/Engines/webgpuEngine").then(async ({ WebGPUEngine }) => {
                    if (await WebGPUEngine.IsSupportedAsync) {
                        const engine = new WebGPUEngine(canvas, projectProperty.engineOptions);
                        await engine.initAsync();
                        function resize() {
                            engine.resize();
                        }
                        window.addEventListener("resize", resize);
                        setEngine(engine);
                    } else {
                        throw new Error("WebGPU is not supported on this device.")
                    }
                }).catch((err) => {
                    window.alert(err);
                    setProjectProperty(null);
                });
            }
        }
    }

    return (
        <StrictMode>
            <main className={projectProperty ? styles.hidden : ""}>
                <MenuBar />
                <canvas ref={canvasRef} />
            </main>
            <main className={projectProperty ? styles.createProject : styles.hidden}><CreateProjectDialog handleSubmit={handleCreateProject} /></main>
        </StrictMode>
    );
}
