import type { InspectorContent } from "../../../types";
import { MaterialInspector } from "../materialInspector";

/**
 * The Physically based material base class of BJS.
 *
 * This offers the main features of a standard PBR material.
 * For more information, please refer to the documentation :
 * https://doc.babylonjs.com/features/featuresDeepDive/materials/using/introToPBR
 */
export const PbrBaseMaterialInspector: readonly InspectorContent[] = [
    ...MaterialInspector,
    {
        name: "realTimefiltering",
        label: "Real Time Filtering",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Specifies if the texture filtering is real time.",
    },
    {
        name: "realTimeFilteringQuality",
        label: "Real Time Filtering Quality",
        type: "enum",
        default: 8,
        category: "Misc",
        description: "Specifies the quality of the real time filtering.",
        enum: [
            {
                label: "Low",
                value: 8,
                description: "Low quality for texture filtering",
            },
            {
                label: "Medium",
                value: 16,
                description: "Medium quality for texture filtering",
            },
            {
                label: "High",
                value: 64,
                description: "High quality for texture filtering",
            },
            {
                label: "Offline",
                value: 4096,
                description: "Offline (baking) quality for texture filtering",
            },
        ],
    },
    {
        name: "debugMode",
        label: "Debug Mode",
        type: "enum",
        default: 0,
        category: "Debug",
        description: `This is reserved for the inspector.
            Defines the material debug mode.
            It helps seeing only some components of the material while troubleshooting.`,
        enum: [
            {
                label: "None",
                value: 0,
            },
            {
                label: "Position",
                value: 1,
            },
            {
                label: "Normal",
                value: 2,
            },
            {
                label: "Tangent",
                value: 3,
            },
            {
                label: "Bitangent",
                value: 4,
            },
            {
                label: "Bump Normals",
                value: 5,
            },
            {
                label: "Main UV1",
                value: 6,
            },
            {
                label: "Main UV2",
                value: 7,
            },
            {
                label: "Clear Coat Tangent",
                value: 8,
            },
            {
                label: "Clear Coat Bitangent",
                value: 9,
            },
            {
                label: "Clear Coat Bump Normals",
                value: 10,
            },
            {
                label: "Anisotropic Normal",
                value: 11,
            },
            {
                label: "Anisotropic Tangent",
                value: 12,
            },
            {
                label: "Anisotropic Bitangent",
                value: 13,
            },
            {
                label: "Albedo",
                value: 20,
            },
            {
                label: "Ambient",
                value: 21,
            },
            {
                label: "Opacity",
                value: 22,
            },
            {
                label: "Emissive",
                value: 23,
            },
            {
                label: "Lightmap",
                value: 24,
            },
            {
                label: "Reflectivity",
                value: 25,
            },
            {
                label: "Reflectivity (non-metallic)",
                value: 26,
            },
            {
                label: "Clear Coat",
                value: 27,
            },
            {
                label: "Clear Coat Tint",
                value: 28,
            },
            {
                label: "Sheen",
                value: 29,
            },
            {
                label: "Anisotropic",
                value: 30,
            },
            {
                label: "SubSurface",
                value: 31,
            },
            {
                label: "Bump",
                value: 32,
            },
            {
                label: "Environment Refraction",
                value: 40,
            },
            {
                label: "Environment Reflection",
                value: 41,
            },
            {
                label: "Clear Coat Environment Reflection",
                value: 42,
            },
            {
                label: "Diffuse",
                value: 50,
            },
            {
                label: "Specular",
                value: 51,
            },
            {
                label: "Clear Coat",
                value: 52,
            },
            {
                label: "Sheen",
                value: 53,
            },
            {
                label: "Reflection",
                value: 54,
            },
            {
                label: "Surface Albedo",
                value: 60,
            },
            {
                label: "Clear Coat Specular Environment R0",
                value: 61,
            },
            {
                label: "Metallic",
                value: 62,
            },
            {
                label: "Metallic F0",
                value: 71,
            },
            {
                label: "Roughness",
                value: 63,
            },
            {
                label: "AlphaG",
                value: 64,
            },
            {
                label: "NdotV",
                value: 65,
            },
            {
                label: "Clear Coat Color",
                value: 66,
            },
            {
                label: "Clear Coat Roughness",
                value: 67,
            },
            {
                label: "Clear Coat NdotV",
                value: 68,
            },
            {
                label: "Transmittance",
                value: 69,
            },
            {
                label: "Refraction Transmittance",
                value: 70,
            },
            {
                label: "MicroSurface",
                value: 72,
            },
            {
                label: "Albedo Color",
                value: 73,
            },
            {
                label: "Reflectivity Color",
                value: 74,
            },
            {
                label: "Emissive Color",
                value: 75,
            },
            {
                label: "Radiance Occlusion",
                value: 80,
            },
            {
                label: "Horizon Occlusion",
                value: 81,
            },
            {
                label: "MS BRDF Energy Conservation",
                value: 82,
            },
            {
                label: "Specular Environment Reflectance",
                value: 83,
            },
            {
                label: "Clear Coat Environment Reflectance",
                value: 84,
            },
            {
                label: "Sheen Environment Reflectance",
                value: 85,
            },
            {
                label: "Luminance Over Alpha",
                value: 86,
            },
            {
                label: "Alpha",
                value: 87,
            },
            {
                label: "Albedo Alpha",
                value: 88,
            },
            {
                label: "Ambient Occlusion",
                value: 89,
            },
            {
                label: "Does Not Exist",
                value: 90,
            },
        ],
    },
    {
        name: "clearCoat",
        label: "Clear Coat",
        type: "reference",
        referenceType: "PBRClearCoatConfiguration",
        category: "Misc",
        description: "Defines the clear coat layer parameters for the material.",
    },
    {
        name: "iridescence",
        label: "Iridescence",
        type: "reference",
        referenceType: "PBRIridescenceConfiguration",
        category: "Misc",
        description: "Defines the iridescence layer parameters for the material.",
    },
    {
        name: "anisotropy",
        label: "Anisotropy",
        type: "reference",
        referenceType: "PBRAnisotropicConfiguration",
        category: "Misc",
        description: "Defines the anisotropic parameters for the material.",
    },
    {
        name: "brdf",
        label: "BRDF",
        type: "reference",
        referenceType: "PBRBRDFConfiguration",
        category: "Misc",
        description: "Defines the BRDF parameters for the material.",
    },
    {
        name: "sheen",
        label: "Sheen",
        type: "reference",
        referenceType: "PBRSheenConfiguration",
        category: "Misc",
        description: "Defines the Sheen parameters for the material.",
    },
    {
        name: "subSurface",
        label: "SubSurface",
        type: "reference",
        referenceType: "PBRSubSurfaceConfiguration",
        category: "Misc",
        description: "Defines the SubSurface parameters for the material.",
    },
    {
        name: "prePassConfiguration",
        label: "PrePass Configuration",
        type: "reference",
        referenceType: "PrePassConfiguration",
        category: "Misc",
        description: "Defines additional PrePass parameters for the material.",
    },
    {
        name: "detailMap",
        label: "Detail Map",
        type: "reference",
        referenceType: "DetailMapConfiguration",
        category: "Misc",
        description: "Defines the detail map parameters for the material.",
    },
    {
        name: "decalMap",
        label: "Decal Map",
        type: "reference",
        referenceType: "DecalMapConfiguration",
        category: "Misc",
        description: "Defines the decal map parameters for the material.",
    },
];
