import type { AbstractEngine } from "@babylonjs/core/Engines/abstractEngine";
import { Engine } from "@babylonjs/core/Engines/engine";
import "@babylonjs/core/Materials/standardMaterial";
import { Color4 } from "@babylonjs/core/Maths/math.color";
import { SceneInspector } from "./sceneInspector";
import type { InspectorContent } from "./types";
import { AddSceneCommand } from "./commands/addSceneCommand";

window.addEventListener("load", () => {
    const canvas = document.getElementById("render-canvas") as HTMLCanvasElement | undefined;
    if (!canvas) {
        throw new Error("Canvas not found");
    }
    const addObject = document.getElementById("add-object") as HTMLButtonElement;
    const addObjectMenu = document.getElementById("add-object-menu") as HTMLDivElement;
    const addScene = document.querySelector<HTMLButtonElement>("#add-object-menu [data-target='Scene']");
    const inspector = document.getElementById("inspector") as HTMLDivElement;
    initEngineAsync(canvas)
        .then(({ engine }) => {
            addObject.addEventListener("click", (e) => {
                e.preventDefault();
                addObjectMenu.style.display = "block";
            });
            addScene?.addEventListener("click", (e) => {
                e.preventDefault();
                const result = AddSceneCommand({ engine });
                result.camera.attachControl(true);
                const table = createSceneInspector(result.scene);
                for (const t of inspector.getElementsByTagName("table")) {
                    t.remove();
                }
                inspector.appendChild(table);
                addObjectMenu.style.display = "none";
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
function  createSceneInspector(sceneAny: any): HTMLTableElement {
    const table = document.createElement("table");
    const tbody = table.createTBody();
    for (const prop of SceneInspector) {
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
        const input = createInput(sceneAny, prop);
        if (input) {
            td2.appendChild(input);
        }
    }
    return table;
}

// biome-ignore lint/suspicious/noExplicitAny: Dynamic property assignment
function createInput(target: any, prop: InspectorContent): HTMLInputElement | HTMLSelectElement | undefined {
    switch (prop.type) {
        case "number": {
            const numberInput = document.createElement("input");
            numberInput.id = prop.name;
            numberInput.name = prop.name;
            numberInput.type = "number";
            numberInput.value = prop.default?.toString() ?? "";
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
            stringInput.value = prop.default?.toString() ?? "";
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
            booleanInput.checked = !!prop.default;
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
            colorInput.value = prop.default?.toString() ?? "";
            colorInput.addEventListener("change", () => {
                target[prop.name] = Color4.FromHexString(colorInput.value);
            });
            return colorInput;
        }
        case "texture": {
            break;
        }
        case "observable": {
            break;
        }
        case "vector3": {
            break;
        }
    }
}
