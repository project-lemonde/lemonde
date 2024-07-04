import {
    Subtitle2,
    Tree,
    TreeItem,
    TreeItemLayout,
} from "@fluentui/react-components";
import { useSceneStore } from "../stores/sceneStore";

export function Hierarchy() {
    const hierarchy = useSceneStore((state) => state.hierarchy);

    return (
        <>
            <Subtitle2>Hirarchy</Subtitle2>
            <Tree aria-label="Scene Hierarchy" size="small">
                {Object.keys(hierarchy).map((id) => (
                    <TreeItem itemType="leaf" key={id}>
                        <TreeItemLayout>{id}</TreeItemLayout>
                    </TreeItem>
                ))}
            </Tree>
        </>
    );
}
