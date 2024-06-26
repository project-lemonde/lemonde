import type { InspectorContent } from "../../../types";
import { PbrBaseMaterialInspector } from "./pbrBaseMaterialInspector";

/**
 * The Physically based simple base material of BJS.
 *
 * This enables better naming and convention enforcements on top of the pbrMaterial.
 * It is used as the base class for both the specGloss and metalRough conventions.
 */
export const PbrBaseSimpleMaterialInspector: readonly InspectorContent[] = [
    ...PbrBaseMaterialInspector,
    {
        name: "maxSimultaneousLights",
        label: "Max Simultaneous Lights",
        type: "number",
        default: 4,
        category: "Lighting",
        description: "Number of Simultaneous lights allowed on the material.",
    },
    {
        name: "disableLighting",
        label: "Disable Lighting",
        type: "boolean",
        default: false,
        category: "Lighting",
        description: "If sets to true, disables all the lights affecting the material.",
    },
    {
        name: "environmentTexture",
        label: "Environment Texture",
        type: "reference",
        referenceType: "BaseTexture",
        category: "Lighting",
        description: "Environment Texture used in the material (this is use for both reflection and environment lighting).",
    },
    {
        name: "invertNormalMapX",
        label: "Invert Normal Map X",
        type: "boolean",
        default: false,
        category: "Textures",
        description: "If sets to true, x component of normal map value will invert (x = 1.0 - x).",
    },
    {
        name: "invertNormalMapY",
        label: "Invert Normal Map Y",
        type: "boolean",
        default: false,
        category: "Textures",
        description: "If sets to true, y component of normal map value will invert (y = 1.0 - y).",
    },
    {
        name: "normalTexture",
        label: "Normal Texture",
        type: "reference",
        referenceType: "BaseTexture",
        category: "Textures",
        description: "Normal map used in the model.",
    },
    {
        name: "emissiveColor",
        label: "Emissive Color",
        type: "color3",
        default: [0, 0, 0],
        category: "Textures",
        description: "Emissivie color used to self-illuminate the model.",
    },
    {
        name: "emissiveTexture",
        label: "Emissive Texture",
        type: "reference",
        referenceType: "BaseTexture",
        category: "Textures",
        description: "Emissivie texture used to self-illuminate the model.",
    },
    {
        name: "occlusionStrength",
        label: "Occlusion Strength",
        type: "number",
        default: 1.0,
        category: "Textures",
        description: "Occlusion Channel Strength.",
    },
    {
        name: "occlusionTexture",
        label: "Occlusion Texture",
        type: "reference",
        referenceType: "BaseTexture",
        category: "Textures",
        description: "Occlusion Texture of the material (adding extra occlusion effects).",
    },
    {
        name: "alphaCutOff",
        label: "Alpha Cut Off",
        type: "number",
        category: "Textures",
        description: "Defines the alpha limits in alpha test mode.",
    },
    {
        name: "doubleSided",
        label: "Double Sided",
        type: "boolean",
        category: "Misc",
        description: "If sets to true and backfaceCulling is false, normals will be flipped on the backside.",
    },
    {
        name: "lightmapTexture",
        label: "Lightmap Texture",
        type: "reference",
        referenceType: "BaseTexture",
        category: "Textures",
        description: "Stores the pre-calculated light information of a mesh in a texture.",
    },
    {
        name: "useLightmapAsShadowmap",
        label: "Use Lightmap As Shadowmap",
        type: "boolean",
        default: false,
        category: "Textures",
        description: "If true, the light map contains occlusion information instead of lighting info.",
    },
];
