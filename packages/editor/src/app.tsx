import { makeStyles } from "@fluentui/react-components";
import { StrictMode } from "react";
import { Assets } from "./components/assets";
import { CreateProjectDialog } from "./components/createProjectDialog";
import { Hierarchy } from "./components/hierarchy";
import { Inspector } from "./components/inspector";
import { MainCanvas } from "./components/mainCanvas";
import { MenuBar } from "./components/menuBar";
import { useProjectStore } from "./stores/projectStore";

const useStyles = makeStyles({
    createProject: {
        alignItems: "center",
        display: "flex",
        height: "100vh",
        justifyContent: "center",
    },
    nav: {
        height: "32px",
    },
    main: {
        display: "flex",
        height: "100vh",
    },
    mainCanvas: {
        width: "100%",
        height: "calc(100vh - 32px - 350px)",
    },
    footer: {
        height: "350px",
    },
    left: {
        width: "100%",
    },
    right: {
        width: "350px",
    },
    hierarchy: {
        height: "250px",
    },
    inspector: {
        height: "calc(100vh - 250px)",
    },
});

export function App() {
    const styles = useStyles();
    const projectProperty = useProjectStore((state) => state.projectProperty);

    return (
        <StrictMode>
            {projectProperty && (
                <div className={styles.main}>
                    <main className={styles.left}>
                        <nav className={styles.nav}>
                            <MenuBar />
                        </nav>
                        <div className={styles.mainCanvas}>
                            <MainCanvas />
                        </div>
                        <footer className={styles.footer}>
                            <Assets />
                        </footer>
                    </main>
                    <aside className={styles.right}>
                        <div className={styles.hierarchy}>
                            <Hierarchy />
                        </div>
                        <div className={styles.inspector}>
                            <Inspector />
                        </div>
                    </aside>
                </div>
            ) || (
                <main className={styles.createProject}>
                    <CreateProjectDialog />
                </main>
            )}
        </StrictMode>
    );
}
