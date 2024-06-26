import type { InspectorContent } from "../../../types";

/**
 * Plugin that implements the sub surface component of the PBR material
 */
export const PbrSubSurfaceConfigurationInspector: readonly InspectorContent[] = [
    {
        name: "isRefractionEnabled",
        label: "Is Refraction Enabled",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Specifies if the refraction is enabled.",
    },
    {
        name: "isTranslucencyEnabled",
        label: "Is Translucency Enabled",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Specifies if the translucency is enabled.",
    },
    {
        name: "isDispersionEnabled",
        label: "Is Dispersion Enabled",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Specifies if the dispersion is enabled.",
    },
    {
        name: "isScatteringEnabled",
        label: "Is Scattering Enabled",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Specifies if the sub surface scattering is enabled.",
    },
    {
        name: "scatteringDiffusionProfile",
        label: "Scattering Diffusion Profile",
        type: "color3",
        category: "Misc",
        description: "Diffusion profile for subsurface scattering. Useful for better scattering in the skins or foliages.",
    },
    {
        name: "refractionIntensity",
        label: "Refraction Intensity",
        type: "number",
        default: 1,
        category: "Misc",
        description: `Defines the refraction intensity of the material.
            The refraction when enabled replaces the Diffuse part of the material.
            The intensity helps transitioning between diffuse and refraction.`,
    },
    {
        name: "translucencyIntensity",
        label: "Translucency Intensity",
        type: "number",
        default: 1,
        category: "Misc",
        description: `Defines the translucency intensity of the material.
            When translucency has been enabled, this defines how much of the "translucency"
            is added to the diffuse part of the material.`,
    },
    {
        name: "useAlbedoToTintRefraction",
        label: "Use Albedo To Tint Refraction",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "When enabled, transparent surfaces will be tinted with the albedo colour (independent of thickness)",
    },
    {
        name: "useAlbedoToTintTranslucency",
        label: "Use Albedo To Tint Translucency",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "When enabled, translucent surfaces will be tinted with the albedo colour (independent of thickness)",
    },
    {
        name: "thicknessTexture",
        label: "Thickness Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: `Stores the average thickness of a mesh in a texture (The texture is holding the values linearly).
            The red (or green if useGltfStyleTextures=true) channel of the texture should contain the thickness remapped between 0 and 1.
            0 would mean minimumThickness
            1 would mean maximumThickness
            The other channels might be use as a mask to vary the different effects intensity.`,
    },
    {
        name: "refractionTexture",
        label: "Refraction Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: "Defines the texture to use for refraction.",
    },
    {
        name: "indexOfRefraction",
        label: "Index of Refraction",
        type: "number",
        default: 1.5,
        category: "Misc",
        description: `Index of refraction of the material base layer.
            https://en.wikipedia.org/wiki/List_of_refractive_indices
            This does not only impact refraction but also the Base F0 of Dielectric Materials.
            From dielectric fresnel rules: F0 = square((iorT - iorI) / (iorT + iorI))`,
    },
    {
        name: "volumeIndexOfRefraction",
        label: "Volume Index of Refraction",
        type: "number",
        default: -1,
        category: "Misc",
        description: `Index of refraction of the material's volume.
            https://en.wikipedia.org/wiki/List_of_refractive_indices
            This ONLY impacts refraction. If not provided or given a non-valid value,
            the volume will use the same IOR as the surface.`,
    },
    {
        name: "invertRefractionY",
        label: "Invert Refraction Y",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Controls if refraction needs to be inverted on Y. This could be useful for procedural texture.",
    },
    {
        name: "linkRefractionWithTransparency",
        label: "Link Refraction With Transparency",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `This parameters will make the material used its opacity to control how much it is refracting against not.
            Materials half opaque for instance using refraction could benefit from this control.`,
    },
    {
        name: "minimumThickness",
        label: "Minimum Thickness",
        type: "number",
        default: 0,
        category: "Misc",
        description: "Defines the minimum thickness stored in the thickness map.",
    },
    {
        name: "maximumThickness",
        label: "Maximum Thickness",
        type: "number",
        default: 1,
        category: "Misc",
        description: "Defines the maximum thickness stored in the thickness map.",
    },
    {
        name: "useThicknessAsDepth",
        label: "Use Thickness As Depth",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Defines that the thickness should be used as a measure of the depth volume.",
    },
    {
        name: "tintColor",
        label: "Tint Color",
        type: "color3",
        default: [1, 1, 1],
        category: "Misc",
        description: "Defines the volume tint of the material. This is used for both translucency and scattering.",
    },
    {
        name: "tintColorAtDistance",
        label: "Tint Color At Distance",
        type: "number",
        default: 1,
        category: "Misc",
        description: "Defines the distance at which the tint color should be found in the media. This is used for refraction only.",
    },
    {
        name: "dispersion",
        label: "Dispersion",
        type: "number",
        default: 0,
        category: "Misc",
        description: "Defines the Abbe number for the volume.",
    },
    {
        name: "diffusionDistance",
        label: "Diffusion Distance",
        type: "color3",
        default: [1, 1, 1],
        category: "Misc",
        description: "Defines how far each channel transmit through the media. It is defined as a color to simplify it selection.",
    },
    {
        name: "useMaskFromThicknessTexture",
        label: "Use Mask From Thickness Texture",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `Stores the intensity of the different subsurface effects in the thickness texture.
            Note that if refractionIntensityTexture and/or translucencyIntensityTexture is provided it takes precedence over thicknessTexture + useMaskFromThicknessTexture
            * the green (red if useGltfStyleTextures = true) channel is the refraction intensity.
            * the blue (alpha if useGltfStyleTextures = true) channel is the translucency intensity.`,
    },
    {
        name: "refractionIntensityTexture",
        label: "Refraction Intensity Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: `Stores the intensity of the refraction. If provided, it takes precedence over thicknessTexture + useMaskFromThicknessTexture
            * the green (red if useGltfStyleTextures = true) channel is the refraction intensity.`,
    },
    {
        name: "translucencyIntensityTexture",
        label: "Translucency Intensity Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: `Stores the intensity of the translucency. If provided, it takes precedence over thicknessTexture + useMaskFromThicknessTexture
            * the blue (alpha if useGltfStyleTextures = true) channel is the translucency intensity.`,
    },
    {
        name: "translucencyColor",
        label: "Translucency Color",
        type: "color3",
        default: [1, 1, 1],
        category: "Misc",
        description: "Defines the translucency tint of the material. If not set, the tint color will be used instead.",
    },
    {
        name: "translucencyColorTexture",
        label: "Translucency Color Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Textures",
        description: `Defines the translucency tint color of the material as a texture.
            This is multiplied against the translucency color to add variety and realism to the material.
            If translucencyColor is not set, the tint color will be used instead.`,
    },
    {
        name: "useGltfStyleTextures",
        label: "Use glTF Style Textures",
        type: "boolean",
        default: true,
        category: "Misc",
        description: `Use channels layout used by glTF:
            * thicknessTexture: the green (instead of red) channel is the thickness
            * thicknessTexture/refractionIntensityTexture: the red (instead of green) channel is the refraction intensity
            * thicknessTexture/translucencyIntensityTexture: the alpha (instead of blue) channel is the translucency intensity.`,
    },
];
