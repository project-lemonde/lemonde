import { useContext, useState } from "react";
import type { MenuItem } from "./menuBar";
import { CurrentSceneContext } from "../contexts/useCurrentScene";

export function MenuBarList({ items, depth, onClick }: { items: MenuItem[], depth: number, onClick: (action: string) => void }) {
    const [expanded, setExpanded] = useState(false);
    const scene = useContext(CurrentSceneContext);

    function onClickHandler(action?: string) {
        if (depth === 1) {
            setExpanded(!expanded);
            return;
        }
        if (action) {
            onClick(action);
            setExpanded(!expanded);
        }
    }

    return (
        <ul style={{ listStyle: "none", padding: 0, display: depth === 1 ? "flex" : "block" }}>
            {items.map((item) => (
                <li key={item.label}>
                    <button type="button" disabled={item.needScene && !scene} onMouseEnter={() => depth > 1 && setExpanded(!expanded)} onMouseLeave={() => depth > 1 && setExpanded(!expanded)} onClick={() => onClickHandler}>{item.label}</button>
                    {(item.items && expanded) && <MenuBarList items={item.items} depth={depth + 1} onClick={onClick} />}
                </li>
            ))}
        </ul>
    )
}
