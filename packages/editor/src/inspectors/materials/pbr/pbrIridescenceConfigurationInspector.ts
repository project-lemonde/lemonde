import type { InspectorContent } from "../../../types";

/**
 * Plugin that implements the iridescence (thin film) component of the PBR material
 */
export const PbrIridescenceConfigurationInspector: readonly InspectorContent[] = [
    {
        name: "isEnabled",
        label: "Is Enabled",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Specifies if the iridescence is enabled.",
    },
    {
        name: "intensity",
        label: "Intensity",
        type: "number",
        default: 1,
        category: "Misc",
        description: "Defines the iridescence layer strength (between 0 and 1) it defaults to 1.",
    },
    {
        name: "minimumThickness",
        label: "Minimum Thickness",
        type: "number",
        default: 100,
        category: "Misc",
        description: "Defines the minimum thickness of the thin-film layer given in nanometers (nm).",
    },
    {
        name: "maximumThickness",
        label: "Maximum Thickness",
        type: "number",
        default: 400,
        category: "Misc",
        description: "Defines the maximum thickness of the thin-film layer given in nanometers (nm). This will be the thickness used if not thickness texture has been set.",
    },
    {
        name: "indexOfRefraction",
        label: "Index of Refraction",
        type: "number",
        default: 1.3,
        category: "Misc",
        description: "Defines the index of refraction of the thin-film layer.",
    },
    {
        name: "texture",
        label: "Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: "Stores the iridescence intensity in a texture (red channel)",
    },
    {
        name: "thicknessTexture",
        label: "Thickness Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: "Stores the iridescence thickness in a texture (green channel)",
    },
];
