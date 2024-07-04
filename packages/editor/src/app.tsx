import { StrictMode } from "react";
import { MenuBar } from "./components/menuBar";
import { makeStyles } from "@fluentui/react-components";
import { CreateProjectDialog } from "./components/createProjectDialog";
import { useEngineStore } from "./stores/engineStore";

const useStyles = makeStyles({
    createProject: {
        alignItems: "center",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
    },
});

export function App() {
    const styles = useStyles();
    const engine = useEngineStore((state) => state.engine);

    const main = engine && <main><MenuBar /></main> || <main className={styles.createProject}><CreateProjectDialog /></main>;

    return (
        <StrictMode>
            {main}
        </StrictMode>
    );
}
