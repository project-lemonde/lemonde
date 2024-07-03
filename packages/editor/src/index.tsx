import { createRoot } from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { App } from "./app";

const root = document.getElementById('root') as HTMLDivElement;
const reactRoot = createRoot(root);

reactRoot.render(<FluentProvider theme={webLightTheme}><App /></FluentProvider>);
