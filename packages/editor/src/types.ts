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
    | "texture"
    | "observable"
    | "reference";

export type InspectorContent = Readonly<{
    name: string;
    label: string;
    type: InspectorType;
    default?: unknown;
    observableType?: string;
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
