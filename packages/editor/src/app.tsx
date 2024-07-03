import { StrictMode } from "react";
import { MenuBar } from "./components/menuBar";

export function App() {
    return (
        <StrictMode>
            <div>
                <MenuBar />
            </div>
        </StrictMode>
    );
}
