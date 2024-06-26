import type { InspectorContent } from "../../../types";

/**
 * Plugin that implements the sheen component of the PBR material.
 */
export const PbrSheenConfigurationInspector: readonly InspectorContent[] = [
    {
        name: "isEnabled",
        label: "Is Enabled",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Specifies if the sheen is enabled.",
    },
    {
        name: "linkSheenWithAlbedo",
        label: "Link Sheen With Albedo",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Specifies if the sheen is linked to the sheen color.",
    },
    {
        name: "intensity",
        label: "Intensity",
        type: "number",
        default: 1,
        category: "Misc",
        description: "Defines the sheen layer strength (between 0 and 1) it defaults to 1.",
    },
    {
        name: "color",
        label: "Color",
        type: "color3",
        default: [1, 1, 1],
        category: "Misc",
        description: "Defines the sheen color.",
    },
    {
        name: "texture",
        label: "Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: `Stores the sheen tint values in a texture (rgb is tint and a is a intensity or roughness if the roughness property has been defined and useRoughnessFromTexture is true)
            If the roughness property has been defined and useRoughnessFromTexture is false then the alpha channel is not used to modulate roughness`,
    },
    {
        name: "useRoughnessFromMainTexture",
        label: "Use Roughness From Main Texture",
        type: "boolean",
        default: true,
        category: "Textures",
        description: `Indicates that the alpha channel of the texture property will be used for roughness.
            Has no effect if the roughness (and texture!) property is not defined`,
    },
    {
        name: "roughness",
        label: "Roughness",
        type: "number",
        category: "Misc",
        description: `Defines the sheen roughness.
            It is not taken into account if linkSheenWithAlbedo is true.
            To stay backward compatible, material roughness is used instead if sheen roughness = null`,
    },
    {
        name: "textureRoughness",
        label: "Texture Roughness",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: `Stores the sheen roughness in a texture (alpha channel is the roughness. This texture won't be used if the texture property is not empty and useRoughnessFromTexture is true)`,
    },
    {
        name: "albedoScaling",
        label: "Albedo Scaling",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `If true, the sheen effect is layered above the base BRDF with the albedo-scaling technique.
            It allows the strength of the sheen effect to not depend on the base color of the material,
            making it easier to setup and tweak the effect`,
    },
];
