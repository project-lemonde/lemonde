import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { Engine } from "@babylonjs/core/Engines/engine";
import "@babylonjs/core/Materials/standardMaterial";
import { Color3 } from "@babylonjs/core/Maths/math.color";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import type { Scene } from "@babylonjs/core/scene";
import { AddBoxCommand } from "./commands/addBoxCommand";
import { AddDirectionalLightCommand } from "./commands/addDirectionalLightCommand";
import { AddSceneCommand } from "./commands/addSceneCommand";
import { DirectionalLightInspector } from "./inspectors/directionalLightInspector";
import { MeshInspector } from "./inspectors/meshInspector";
import { SceneInspector } from "./inspectors/sceneInspector";
import type { InspectorContent } from "./types";

const assets: { [key: string]: unknown } = {};
const instances: { [key: string]: unknown } = {};

window.addEventListener("load", () => {
    const canvas = document.getElementById("render-canvas") as HTMLCanvasElement | undefined;
    if (!canvas) {
        throw new Error("Canvas not found");
    }
    const addObject = document.getElementById("add-object") as HTMLButtonElement;
    const addObjectMenu = document.getElementById("add-object-menu") as HTMLDivElement;
    const addScene = document.querySelector<HTMLButtonElement>("#add-object-menu [data-target='Scene']");
    const addDirectionalLight = document.querySelector<HTMLButtonElement>("#add-object-menu [data-target='DirectionalLight']");
    const addBox = document.querySelector<HTMLButtonElement>("#add-object-menu [data-target='Box']");
    const inspector = document.getElementById("inspector-content") as HTMLDivElement;
    const hierarchyList = document.getElementById("hierarchy-list") as HTMLUListElement;
    let activeScene: Scene | null = null;
    initEngineAsync(canvas)
        .then(({ engine }) => {
            engine.runRenderLoop(() => {
                if (activeScene) {
                    activeScene.render();
                }
            });

            const toggleObjectMenu = () => {
                addObjectMenu.style.display = addObjectMenu.style.display === "block" ? "none" : "block";
            };
            const replaceInspector = (table: HTMLTableElement) => {
                inspector.innerHTML = "";
                inspector.appendChild(table);
            };
            addObject.addEventListener("click", (e) => {
                e.preventDefault();
                toggleObjectMenu();
            });
            addScene?.addEventListener("click", (e) => {
                e.preventDefault();
                const { scene, camera } = AddSceneCommand({ engine });
                activeScene = scene;
                camera.attachControl(true);
                const table = createInspector(scene, SceneInspector);
                replaceInspector(table);
                toggleObjectMenu();
                const button = document.createElement("button");
                button.textContent = "Default Scene";
                const li = document.createElement("li");
                li.appendChild(button);
                hierarchyList.appendChild(li);
            });
            addDirectionalLight?.addEventListener("click", (e) => {
                e.preventDefault();
                if (!activeScene) {
                    return;
                }
                const { light } = AddDirectionalLightCommand({
                    scene: activeScene,
                    direction: new Vector3(0, -1, 0),
                    position: new Vector3(0, 5, 0),
                });
                const table = createInspector(light, DirectionalLightInspector);
                replaceInspector(table);
                toggleObjectMenu();
            });
            addBox?.addEventListener("click", (e) => {
                e.preventDefault();
                if (!activeScene) {
                    return;
                }
                const { mesh } = AddBoxCommand({ scene: activeScene });
                const table = createInspector(mesh, MeshInspector);
                replaceInspector(table);
                toggleObjectMenu();
            });
        });
}, { once: true });

async function initEngineAsync(canvas: HTMLCanvasElement): Promise<{ engine: AbstractEngine }> {
    const engine = new Engine(canvas);
    const resize = () => {
        engine.resize();
    };
    window.addEventListener("resize", resize);

    return { engine };
}

// biome-ignore lint/suspicious/noExplicitAny: Dynamic property assignment
function createInspector(target: any, props: readonly InspectorContent[]): HTMLTableElement {
    const table = document.createElement("table");
    const tbody = table.createTBody();
    for (const prop of props) {
        const tr = tbody.insertRow();
        const td1 = tr.insertCell();
        const label = document.createElement("label");
        label.textContent = prop.label;
        label.htmlFor = prop.name;
        if (prop.description) {
            label.title = prop.description;
        }
        td1.appendChild(label);
        const td2 = tr.insertCell();
        const input = createInput(target, prop);
        if (input) {
            td2.appendChild(input);
        }
    }
    return table;
}

// biome-ignore lint/suspicious/noExplicitAny: Dynamic property assignment
function createInput(target: any, prop: InspectorContent) {
    switch (prop.type) {
        case "number": {
            const numberInput = document.createElement("input");
            numberInput.id = prop.name;
            numberInput.name = prop.name;
            numberInput.type = "number";
            numberInput.value = target[prop.name] ?? prop.default?.toString() ?? "";
            numberInput.addEventListener("change", () => {
                target[prop.name] = Number.parseFloat(numberInput.value);
            });
            return numberInput;
        }
        case "text": {
            const stringInput = document.createElement("input");
            stringInput.id = prop.name;
            stringInput.name = prop.name;
            stringInput.type = "text";
            stringInput.value = target[prop.name] ?? prop.default?.toString() ?? "";
            stringInput.addEventListener("change", () => {
                target[prop.name] = stringInput.value;
            });
            return stringInput;
        }
        case "boolean": {
            const booleanInput = document.createElement("input");
            booleanInput.id = prop.name;
            booleanInput.name = prop.name;
            booleanInput.type = "checkbox";
            booleanInput.checked = target[prop.name] ?? !!prop.default;
            booleanInput.addEventListener("click", () => {
                target[prop.name] = booleanInput.checked;
            });
            return booleanInput;
        }
        case "enum": {
            const select = document.createElement("select");
            select.id = prop.name;
            select.name = prop.name;
            for (const e of prop.enum ?? []) {
                const option = document.createElement("option");
                option.value = e.value.toString();
                option.textContent = e.label;
                option.selected = e.value === (target[prop.name] ?? prop.default);
                select.appendChild(option);
            }
            select.addEventListener("change", () => {
                target[prop.name] = select.value;
            });
            return select;
        }
        case "color4":
        case "color3": {
            const colorInput = document.createElement("input");
            colorInput.id = prop.name;
            colorInput.name = prop.name;
            colorInput.type = "color";
            colorInput.value = Color3.FromArray(target[prop.name] ?? prop.default as number[] ?? [1, 1, 1]).toHexString();
            colorInput.addEventListener("change", () => {
                target[prop.name] = Color3.FromHexString(colorInput.value);
            });
            return colorInput;
        }
        case "reference": {
            break;
        }
        case "vector2": {
            break;
        }
        case "vector3": {
            break;
        }
        case "vector4": {
            break;
        }
    }
}
