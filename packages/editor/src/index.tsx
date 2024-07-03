import { createRoot } from "react-dom/client";
import { App } from "./app";

const root = document.getElementById('root') as HTMLDivElement;
const reactRoot = createRoot(root);

reactRoot.render(<App />);
