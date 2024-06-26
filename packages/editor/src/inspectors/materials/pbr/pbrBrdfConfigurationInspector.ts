import type { InspectorContent } from "../../../types";

/**
 * Plugin that implements the BRDF component of the PBR material
 */
export const PbrBrdfConfigurationInspector: readonly InspectorContent[] = [
    {
        name: "useEnergyConservation",
        label: "Use Energy Conservation",
        type: "boolean",
        default: true,
        category: "Misc",
        description: "Defines if the material uses energy conservation.",
    },
    {
        name: "useSmithVisibilityHeightCorrelated",
        label: "Use Smith Visibility Height Correlated",
        type: "boolean",
        default: true,
        category: "Misc",
        description: `Defines if the material uses height smith correlated visibility term.
            If you intent to not use our default BRDF, you need to load a separate BRDF Texture for the PBR
            You can either load https://assets.babylonjs.com/environments/uncorrelatedBRDF.png
            or https://assets.babylonjs.com/environments/uncorrelatedBRDF.dds to have more precision
            Not relying on height correlated will also disable energy conservation.`,
    },
    {
        name: "useSphericalHarmonics",
        label: "Use Spherical Harmonics",
        type: "boolean",
        default: true,
        category: "Misc",
        description: `Defines if the material uses spherical harmonics vs spherical polynomials for the
            diffuse part of the IBL.
            The harmonics despite a tiny bigger cost has been proven to provide closer results
            to the ground truth.`,
    },
    {
        name: "useSpecularGlossinessInputEnergyConservation",
        label: "Use Specular Glossiness Input Energy Conservation",
        type: "boolean",
        default: true,
        category: "Misc",
        description: `Defines if the material uses energy conservation, when the specular workflow is active.
            If activated, the albedo color is multiplied with (1. - maxChannel(specular color)).
            If deactivated, a material is only physically plausible, when (albedo color + specular color) < 1.
            In the deactivated case, the material author has to ensure energy conservation, for a physically plausible rendering.`,
    },
];
