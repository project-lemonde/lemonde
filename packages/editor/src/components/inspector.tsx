import { Checkbox, Combobox, Input, Label, makeStyles, Select, Subtitle2 } from "@fluentui/react-components";
import { useSceneStore } from "../stores/sceneStore";
import { SceneInspector } from "../inspectors/sceneInspector";
import type { InspectorContent } from "../types";

function getInspectorContents(type: string) {
    const contents: { [type: string]: readonly InspectorContent[] } = {
        scene: SceneInspector,
    };

    if (contents[type]) {
        return contents[type];
    }
    return [];
}

function transformInspectorContent(content: InspectorContent) {
    switch (content.type) {
        case "boolean": {
            return (
                <div>
                    <Checkbox name={content.name} label={content.label} defaultChecked={!!content.default} />
                </div>
            );
        }
        case "enum": {
            return (
                <div>
                    <Label htmlFor="enum">{content.label}</Label>
                    <Select size="small">
                        {content.enum?.map((value) => (<option key={value.value}>{value.label}</option>))}
                    </Select>
                </div>
            )
        }
        case "text": {
            return (
                <div>
                    <Label htmlFor="text">{content.label}</Label>
                    <Input type="text" />
                </div>
            )
        }
    }
    return null;
}

const useStyles = makeStyles({
    contents: {
        height: "100%",
        overflowY: "auto",
    }
});

export function Inspector() {
    const styles = useStyles();
    const selectedId = useSceneStore((state) => state.selectedId);
    const hierarchy = useSceneStore((state) => state.hierarchy);
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const contents = selectedId ? getInspectorContents((hierarchy[selectedId] as any).type) : [];

    return (
        <>
            <Subtitle2>Inspector</Subtitle2>
            <div className={styles.contents}>
                {contents.map(transformInspectorContent)}
            </div>
        </>
    );
}
