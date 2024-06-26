import type { InspectorContent } from "../../../types";

/**
 * Plugin that implements the anisotropic component of the PBR material
 */
export const PbrAnisotropicConfigurationInspector: readonly InspectorContent[] = [
    {
        name: "isEnabled",
        label: "Is Enabled",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Specifies if the anisotropy is enabled.",
    },
    {
        name: "intensity",
        label: "Intensity",
        type: "number",
        default: 1,
        category: "Misc",
        description: "Defines the anisotropy strength (between 0 and 1) it defaults to 1.",
    },
    {
        name: "angle",
        label: "Angle",
        type: "number",
        category: "Misc",
        description: `Defines if the effect is along the tangents, bitangents or in between.
            By default, the effect is "stretching" the highlights along the tangents.`,
    },
    {
        name: "texture",
        label: "Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: `Stores the anisotropy values in a texture.
            rg is direction (like normal from -1 to 1)
            b is a intensity`,
    },
    {
        name: "legacy",
        label: "Legacy",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Defines if the anisotropy is in legacy mode for backwards compatibility before 6.4.0.",
    },
];
