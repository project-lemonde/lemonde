import { StrictMode, useContext } from "react";
import { MenuBar } from "./components/menuBar";
import { EngineContext } from "./contexts/useEngine";
import { makeStyles } from "@fluentui/react-components";
import { CreateProjectDialog } from "./components/createProjectDialog";

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
    const engine = useContext(EngineContext);

    const main = engine && <main><MenuBar /></main> || <main className={styles.createProject}><CreateProjectDialog /></main>;

    return (
        <StrictMode>
            {main}
        </StrictMode>
    );
}
