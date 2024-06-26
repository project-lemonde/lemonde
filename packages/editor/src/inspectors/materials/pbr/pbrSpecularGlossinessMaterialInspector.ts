import type { InspectorContent } from "../../../types";
import { PbrBaseSimpleMaterialInspector } from "./pbrBaseSimpleMaterialInspector";

/**
 * The PBR material of BJS following the specular glossiness convention.
 *
 * This fits to the PBR convention in the GLTF definition:
 * https://github.com/KhronosGroup/glTF/tree/2.0/extensions/Khronos/KHR_materials_pbrSpecularGlossiness
 */
export const PbrSpecularGlossinessMaterialInspector: readonly InspectorContent[] = [
    ...PbrBaseSimpleMaterialInspector,
    {
        name: "baseColor",
        label: "Base Color",
        type: "color3",
        default: [1.0, 1.0, 1.0],
        category: "Misc",
        description: `The base color has two different interpretations depending on the value of metalness.
            When the material is a metal, the base color is the specific measured reflectance value
            at normal incidence (F0). For a non-metal the base color represents the reflected diffuse color
            of the material.`,
    },
    {
        name: "baseTexture",
        label: "Base Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Misc",
        description: `Base texture of the metallic workflow. It contains both the baseColor information in RGB as
            well as opacity information in the alpha channel.`,
    },
    {
        name: "metallic",
        label: "Metallic",
        type: "number",
        default: 0,
        category: "Misc",
        description: `Specifies the metallic scalar value of the material.
            Can also be used to scale the metalness values of the metallic texture.`,
    },
    {
        name: "roughness",
        label: "Roughness",
        type: "number",
        default: 0,
        category: "Misc",
        description: `Specifies the roughness scalar value of the material.
            Can also be used to scale the roughness values of the metallic texture.`,
    },
    {
        name: "metallicRoughnessTexture",
        label: "Metallic Roughness Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Misc",
        description: `Texture containing both the metallic value in the B channel and the
            roughness value in the G channel to keep better precision.`,
    },
    {
        name: "diffuseColor",
        label: "Diffuse Color",
        type: "color3",
        default: [1.0, 1.0, 1.0],
        category: "Misc",
        description: "Specifies the diffuse color of the material.",
    },
    {
        name: "diffuseTexture",
        label: "Diffuse Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Misc",
        description: "Specifies the diffuse texture of the material. This can also contains the opacity value in its alpha channel.",
    },
    {
        name: "specularColor",
        label: "Specular Color",
        type: "color3",
        default: [1.0, 1.0, 1.0],
        category: "Misc",
        description: "Specifies the specular color of the material. This indicates how reflective is the material (none to mirror).",
    },
    {
        name: "glossiness",
        label: "Glossiness",
        type: "number",
        category: "Misc",
        description: "Specifies the glossiness of the material. This indicates 'how sharp is the reflection'.",
    },
    {
        name: "specularGlossinessTexture",
        label: "Specular Glossiness Texture",
        type: "reference",
        referenceType: "BaseTexture",
        default: null,
        category: "Misc",
        description: "Specifies both the specular color RGB and the glossiness A of the material per pixels.",
    },
];
