export type InspectorType =
    | "number"
    | "text"
    | "boolean"
    | "enum"
    | "color4"
    | "color3"
    | "vector2"
    | "vector3"
    | "vector4"
    | "reference";

export type InspectorContent = Readonly<{
    name: string;
    label: string;
    type: InspectorType;
    default?: unknown;
    referenceType?: string;
    category: string;
    description?: string;
    link?: string;
    enum?: ReadonlyArray<{
        label: string;
        value: string | number;
        description?: string;
    }>;
}>;
