import { createRoot } from "react-dom/client";
import { FluentProvider, webDarkTheme } from "@fluentui/react-components";
import { App } from "./app";

const root = document.getElementById('root') as HTMLDivElement;
const reactRoot = createRoot(root);

reactRoot.render(<FluentProvider theme={webDarkTheme}><App /></FluentProvider>);
