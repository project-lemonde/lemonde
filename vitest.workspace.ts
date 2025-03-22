import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
    {
        test: {
            name: "jsdom",
            environment: "jsdom",
            include: ["packages/lemonde-react/src/**/*.spec.tsx"],
        },
    },
]);
