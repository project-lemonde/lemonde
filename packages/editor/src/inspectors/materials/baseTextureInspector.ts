import type { InspectorContent } from "../../types";

export const BaseTextureInspector: readonly InspectorContent[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        default: "",
        category: "Misc",
        description: "Define the name of the texture.",
    },
    {
        name: "hasAlpha",
        label: "Has Alpha",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Define if the texture is having a usable alpha value (can be use for transparency or glossiness for instance).",
    },
    {
        name: "getAlphaFromRGB",
        label: "Get Alpha From RGB",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `Defines if the alpha value should be determined via the rgb values.
            If true the luminance of the pixel might be used to find the corresponding alpha value.`,
    },
    {
        name: "level",
        label: "Level",
        type: "number",
        default: 1,
        category: "Misc",
        description: `Intensity or strength of the texture.
            It is commonly used by materials to fine tune the intensity of the texture`,
    },
    {
        name: "coordinatesIndex",
        label: "Coordinates Index",
        type: "number",
        default: 0,
        category: "Misc",
        description: `Define the UV channel to use starting from 0 and defaulting to 0.
            This is part of the texture as textures usually maps to one uv set.`,
    },
    {
        name: "coordinatesMode",
        label: "Coordinates Mode",
        type: "enum",
        default: 0,
        category: "Misc",
        description: "How a texture is mapped.",
        enum: [
            {
                label: "Explicit",
                value: 0,
            },
            {
                label: "Spherical",
                value: 1,
            },
            {
                label: "Planar",
                value: 2,
            },
            {
                label: "Cubic",
                value: 3,
            },
            {
                label: "Projection",
                value: 4,
            },
            {
                label: "Skybox",
                value: 5,
            },
            {
                label: "Invcubic",
                value: 6,
            },
            {
                label: "Equirectangular",
                value: 7,
            },
            {
                label: "Fixed Equirectangular",
                value: 8,
            },
            {
                label: "Fixed Equirectangular Mirrored",
                value: 9,
            },
        ],
    },
    {
        name: "wrapU",
        label: "Wrap U",
        type: "enum",
        default: 1,
        category: "Misc",
        description: "The wrap mode of the texture in the U direction.",
        enum: [
            {
                label: "Clamp",
                value: 0,
            },
            {
                label: "Wrap",
                value: 1,
            },
            {
                label: "Mirror",
                value: 2,
            },
        ],
    },
    {
        name: "wrapV",
        label: "Wrap V",
        type: "enum",
        default: 1,
        category: "Misc",
        description: "The wrap mode of the texture in the V direction.",
        enum: [
            {
                label: "Clamp",
                value: 0,
            },
            {
                label: "Wrap",
                value: 1,
            },
            {
                label: "Mirror",
                value: 2,
            },
        ],
    },
    {
        name: "wrapR",
        label: "Wrap R",
        type: "enum",
        default: 1,
        category: "Misc",
        description: "The wrap mode of the texture in the R direction.",
        enum: [
            {
                label: "Clamp",
                value: 0,
            },
            {
                label: "Wrap",
                value: 1,
            },
            {
                label: "Mirror",
                value: 2,
            },
        ],
    },
    {
        name: "anisotropicFilteringLevel",
        label: "Anisotropic Filtering Level",
        type: "number",
        default: 4,
        category: "Misc",
        description: `With compliant hardware and browser (supporting anisotropic filtering)
            this defines the level of anisotropic filtering in the texture.
            The higher the better but the slower. This defaults to 4 as it seems to be the best tradeoff.`,
    },
    {
        name: "isCube",
        label: "Is Cube",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Define if the texture is a cube texture or if false a 2d texture.",
    },
    {
        name: "is3D",
        label: "Is 3D",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Define if the texture is a 3d texture.",
    },
    {
        name: "is2DArray",
        label: "Is 2D Array",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Define if the texture is a 2d array texture.",
    },
    {
        name: "gammaSpace",
        label: "Gamma Space",
        type: "boolean",
        default: true,
        category: "Misc",
        description: `Define if the texture contains data in gamma space (most of the png/jpg aside bump).
            HDR texture are usually stored in linear space.
            This only impacts the PBR and Background materials`,
    },
    {
        name: "isRGBD",
        label: "Is RGBD",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Gets or sets whether or not the texture contains RGBD data.",
    },
    {
        name: "invertZ",
        label: "Invert Z",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Is Z inverted in the texture (useful in a cube texture).",
    },
    {
        name: "lodLevelInAlpha",
        label: "Lod Level In Alpha",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Define if the texture is a render target.",
    },
    {
        name: "lodGenerationOffset",
        label: "Lod Generation Offset",
        type: "number",
        default: 0,
        category: "Misc",
        description: "With prefiltered texture, defined the offset used during the prefiltering steps.",
    },
    {
        name: "lodGenerationScale",
        label: "Lod Generation Scale",
        type: "number",
        default: 0,
        category: "Misc",
        description: "With prefiltered texture, defined the scale used during the prefiltering steps.",
    },
    {
        name: "linearSpecularLOD",
        label: "Linear Specular LOD",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `With prefiltered texture, defined if the specular generation is based on a linear ramp.
            By default we are using a log2 of the linear roughness helping to keep a better resolution for
            average roughness values.`,
    },
    {
        name: "irradianceTexture",
        label: "Irradiance Texture",
        type: "reference",
        referenceType: "BaseTexture",
        category: "Misc",
        description: `In case a better definition than spherical harmonics is required for the diffuse part of the environment.
            You can set the irradiance texture to rely on a texture instead of the spherical approach.
            This texture need to have the same characteristics than its parent (Cube vs 2d, coordinates mode, Gamma/Linear, RGBD).`,
    },
    {
        name: "onDisposeObservable",
        label: "Dispose",
        type: "reference",
        referenceType: "Observable<BaseTexture>",
        category: "Events",
        description: "An event triggered when the texture is disposed.",
    }
];
