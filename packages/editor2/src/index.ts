import { esm } from "https://esm.sh/build";

window.addEventListener("load", () => {
    async function loadFromFile(file: File): Promise<void> {
        const text = await file.text();
        const result = await esm(text);
        console.log(result);
    }
    document.body.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer?.items) {
            [...e.dataTransfer.items].forEach((item) => {
                if (item.kind === "file") {
                    const file = item.getAsFile();
                    console.log(file);
                    if (file) {
                        loadFromFile(file);
                    }
                }
            });
        } else if (e.dataTransfer?.files) {
            [...e.dataTransfer.files].forEach((file) => {
                loadFromFile(file);
            });
        }
    });
    document.body.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
});
