import type { InspectorContent } from "../../../types";

/**
 * Plugin that implements the clear coat component of the PBR material
 */
export const PbrClearCoatConfigurationInspector: readonly InspectorContent[] = [
    {
        name: "isEnabled",
        label: "Is Enabled",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Specifies if the clear coat is enabled.",
    },
    {
        name: "intensity",
        label: "Intensity",
        type: "number",
        default: 1,
        category: "Misc",
        description: "Defines the clear coat layer strength (between 0 and 1) it defaults to 1.",
    },
    {
        name: "roughness",
        label: "Roughness",
        type: "number",
        default: 0,
        category: "Misc",
        description: "Defines the clear coat layer roughness.",
    },
    {
        name: "indexOfRefraction",
        label: "Index of Refraction",
        type: "number",
        default: 1.5,
        category: "Misc",
        description: `Defines the index of refraction of the clear coat.
            This defaults to 1.5 corresponding to a 0.04 f0 or a 4% reflectance at normal incidence
            The default fits with a polyurethane material.
            Changing the default value is more performance intensive.`,
    },
    {
        name: "texture",
        label: "Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: `Stores the clear coat values in a texture (red channel is intensity and green channel is roughness)
            If useRoughnessFromMainTexture is false, the green channel of texture is not used and the green channel of textureRoughness is used instead
            if textureRoughness is not empty, else no texture roughness is used`,
    },
    {
        name: "useRoughnessFromMainTexture",
        label: "Use Roughness From Main Texture",
        type: "boolean",
        default: true,
        category: "Textures",
        description: `Indicates that the green channel of the texture property will be used for roughness (default: true)
            If false, the green channel from textureRoughness is used for roughness`,
    },
    {
        name: "textureRoughness",
        label: "Texture Roughness",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: `Stores the clear coat roughness in a texture (green channel)
            Not used if useRoughnessFromMainTexture is true`,
    },
    {
        name: "remapF0OnInterfaceChange",
        label: "Remap F0 On Interface Change",
        type: "boolean",
        default: true,
        category: "Misc",
        description: "Defines if the F0 value should be remapped to account for the interface change in the material.",
    },
    {
        name: "bumpTexture",
        label: "Bump Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: "Define the clear coat specific bump texture.",
    },
    {
        name: "isTintEnabled",
        label: "Is Tint Enabled",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Defines if the clear coat tint is enabled in the material.",
    },
    {
        name: "tintColor",
        label: "Tint Color",
        type: "color3",
        default: [1, 1, 1],
        category: "Misc",
        description: "Defines the clear coat tint of the material.",
    },
    {
        name: "tintColorAtDistance",
        label: "Tint Color At Distance",
        type: "number",
        default: 1,
        category: "Misc",
        description: "Defines the distance at which the tint color should be found in the clear coat media.",
    },
    {
        name: "tintThickness",
        label: "Tint Thickness",
        type: "number",
        default: 1,
        category: "Misc",
        description: "Defines the clear coat layer thickness.",
    },
    {
        name: "tintTexture",
        label: "Tint Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: "Stores the clear tint values in a texture.",
    },
];
