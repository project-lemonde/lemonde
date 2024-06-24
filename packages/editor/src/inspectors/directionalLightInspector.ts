import type { InspectorContent } from "../types";

export const DirectionalLightInspector: readonly InspectorContent[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        default: "DirectionalLight",
        category: "Misc",
        description: "Name of the light.",
    },
    {
        name: "diffuse",
        label: "Diffuse",
        type: "color3",
        default: [1.0, 1.0, 1.0],
        category: "Misc",
        description: "Diffuse gives the basic color to an object.",
    },
    {
        name: "specular",
        label: "Specular",
        type: "color3",
        default: [1.0, 1.0, 1.0],
        category: "Misc",
        description: `Specular produces a highlight color on an object.
            Note: This is not affecting PBR materials.`,
    },
    {
        name: "falloffType",
        label: "Falloff Type",
        type: "enum",
        default: 0,
        category: "Misc",
        description: `Defines the falloff type for this light. This lets overriding how punctual light are
            falling off base on range or angle.
            This can be set to any values in Light.FALLOFF_x.
            Note: This is only useful for PBR Materials at the moment. This could be extended if required to
            other types of materials.`,
        enum: [
            {
                label: "Default",
                value: 0,
                description: `Falloff Default: light is falling off following the material specification:
                    standard material is using standard falloff whereas pbr material can request special falloff per materials.`,
            },
            {
                label: "Physical",
                value: 1,
                description: "Falloff Physical: light is falling off following the inverse squared distance law.",
            },
            {
                label: "GLTF",
                value: 2,
                description: `Falloff gltf: light is falling off as described in the gltf moving to PBR document
                    to enhance interoperability with other engines.`,
            },
            {
                label: "Standard",
                value: 3,
                description: `Falloff Standard: light is falling off like in the standard material
                    to enhance interoperability with other materials.`,
            },
        ],
    },
    {
        name: "intensity",
        label: "Intensity",
        type: "number",
        default: 1.0,
        category: "Misc",
        description: `Strength of the light.
            Note: By default it is define in the framework own unit.
            Note: In PBR materials the intensityMode can be use to chose what unit the intensity is defined in.`,
    },
    {
        name: "range",
        label: "Range",
        type: "number",
        default: Number.MAX_VALUE,
        category: "Misc",
        description: `Defines how far from the source the light is impacting in scene units.
            Note: Unused in PBR material as the distance light falloff is defined following the inverse squared falloff.`,
    },
    {
        name: "intensityMode",
        label: "Intensity Mode",
        type: "enum",
        default: 0,
        category: "Misc",
        description: `Gets the photometric scale used to interpret the intensity.
            This is only relevant with PBR Materials where the light intensity can be defined in a physical way.`,
        enum: [
            {
                label: "Automatic",
                value: 0,
                description: `Each light type uses the default quantity according to its type:
                    point/spot lights use luminous intensity
                    directional lights use illuminance`,
            },
            {
                label: "Luminous Power",
                value: 1,
                description: "Lumen (lm)",
            },
            {
                label: "Luminous Intensity",
                value: 2,
                description: "candela (lm/sr)",
            },
            {
                label: "Illuminance",
                value: 3,
                description: "lux (lm/m^2)",
            },
            {
                label: "Luminance",
                value: 4,
                description: "nit (cd/m^2)",
            },
        ],
    },
    {
        name: "radius",
        label: "Radius",
        type: "number",
        default: 0.00001,
        category: "Misc",
        description: "sets the light radius used by PBR Materials to simulate soft area lights.",
    },
    {
        name: "renderPriority",
        label: "Render Priority",
        type: "number",
        default: 0,
        category: "Misc",
        description: `Defines the rendering priority of the lights. It can help in case of fallback or number of lights
            exceeding the number allowed of the materials.`,
    },
    {
        name: "shadowEnabled",
        label: "Shadow Enabled",
        type: "boolean",
        default: true,
        category: "Misc",
        description: `Sets whether or not the shadows are enabled for this light. This can help turning off/on shadow without detaching
            the current shadow generator.`,
    },
    {
        name: "excludeWithLayerMask",
        label: "Exclude With Layer Mask",
        type: "number",
        default: 0,
        category: "Misc",
        description: `Sets the layer id use to find what meshes are not impacted by the light.
            Inactive if 0`,
    },
    {
        name: "includeOnlyWithLayerMask",
        label: "Include Only With Layer Mask",
        type: "number",
        default: 0,
        category: "Misc",
        description: `Sets the layer id use to find what meshes are impacted by the light.
            Inactive if 0`,
    },
    {
        name: "lightmapMode",
        label: "Lightmap Mode",
        type: "enum",
        default: 0,
        category: "Misc",
        description: "Sets the lightmap mode of this light (should be one of the constants defined by Light.LIGHTMAP_x)",
        enum: [
            {
                label: "Default",
                value: 0,
                description: `If every light affecting the material is in this lightmapMode,
                    material.lightmapTexture adds or multiplies
                    (depends on material.useLightmapAsShadowmap)
                    after every other light calculations.`,
            },
            {
                label: "Specular",
                value: 1,
                description: `material.lightmapTexture as only diffuse lighting from this light
                    adds only specular lighting from this light
                    adds dynamic shadows`,
            },
            {
                label: "Shadows Only",
                value: 2,
                description: `material.lightmapTexture as only lighting
                    no light calculation from this light
                    only adds dynamic shadows from this light`,
            },
        ],
    },
    {
        name: "position",
        label: "Position",
        type: "vector3",
        default: [0, 0, 0],
        category: "Misc",
        description: `Sets the position the shadow will be casted from. Also use as the light position for both
            point and spot lights.`,
    },
    {
        name: "direction",
        label: "Direction",
        type: "vector3",
        default: [0, -1, 0],
        category: "Misc",
        description: `Sets the position the shadow will be casted from. Also use as the light position for both
            point and spot lights.`,
    },
    {
        name: "shadowMinZ",
        label: "Shadow Min Z",
        type: "number",
        default: 0.0001,
        category: "Misc",
        description: "Sets the shadow projection clipping minimum z value.",
    },
    {
        name: "shadowMaxZ",
        label: "Shadow Max Z",
        type: "number",
        default: 1000,
        category: "Misc",
        description: "Sets the shadow projection clipping maximum z value.",
    },
    {
        name: "shadowFrustumSize",
        label: "Shadow Frustum Size",
        type: "number",
        default: 0,
        category: "Misc",
        description: "pecifies a fix frustum size for the shadow generation.",
    },
    {
        name: "shadowOrthoScale",
        label: "Shadow Ortho Scale",
        type: "number",
        default: 0.1,
        category: "Misc",
        description: `Sets the shadow projection scale against the optimal computed one.
            0.1 by default which means that the projection window is increase by 10% from the optimal size.
            This does not impact in fixed frustum size (shadowFrustumSize being set)`,
    },
    {
        name: "autoUpdateExtends",
        label: "Auto Update Extends",
        type: "boolean",
        default: true,
        category: "Misc",
        description: `Automatically compute the projection matrix to best fit (including all the casters)
            on each frame.`,
    },
    {
        name: "autoCalcShadowZBounds",
        label: "Auto Calc Shadow Z Bounds",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `Automatically compute the shadowMinZ and shadowMaxZ for the projection matrix to best fit (including all the casters)
            on each frame. autoUpdateExtends must be set to true for this to work`,
    },
];
