import { MenuBarList } from "./menuBarList";

export type MenuItem = {
    label: string,
    action?: string,
    needEngine?: boolean,
    needScene?: boolean,
    items?: MenuItem[],
};

const menu: MenuItem[] = [
    {
        label: "File",
        items: [
            {
                label: "New Scene",
                action: "file-new-scene",
                needEngine: true,
            },
        ],
    },
    {
        label: "Edit",
        items: [
            {
                label: "Undo",
                action: "edit-undo",
            },
            {
                label: "Redo",
                action: "edit-redo",
            },
        ],
    },
    {
        label: "Create",
        items: [
            {
                label: "Cameras",
                items: [
                    {
                        label: "Arc Rotate Camera",
                        action: "create-cameras-arc-rotate-camera",
                        needScene: true,
                    },
                    {
                        label: "Device Orientation Camera",
                        action: "create-cameras-device-orientation-camera",
                        needScene: true,
                    },
                    {
                        label: "Fly Camera",
                        action: "create-cameras-fly-camera",
                        needScene: true,
                    },
                    {
                        label: "Follow Camera",
                        action: "create-cameras-follow-camera",
                        needScene: true,
                    },
                    {
                        label: "Free Camera",
                        action: "create-cameras-free-camera",
                        needScene: true,
                    },
                    {
                        label: "Gamepad Camera",
                        action: "create-cameras-gamepad-camera",
                        needScene: true,
                    },
                    {
                        label: "Target Camera",
                        action: "create-cameras-target-camera",
                        needScene: true,
                    },
                    {
                        label: "Touch Camera",
                        action: "create-cameras-touch-camera",
                        needScene: true,
                    },
                    {
                        label: "Universal Camera (Recommended)",
                        action: "create-cameras-universal-camera",
                        needScene: true,
                    },
                    {
                        label: "Virtual Joysticks Camera",
                        action: "create-cameras-virtual-joysticks-camera",
                        needScene: true,
                    },
                    {
                        label: "Anaglyph",
                        items: [
                            {
                                label: "Anaglyph Arc Rotate Camera",
                                action: "create-cameras-anaglyph-arc-rotate-camera",
                                needScene: true,
                            },
                            {
                                label: "Anaglyph Free Camera",
                                action: "create-cameras-anaglyph-free-camera",
                                needScene: true,
                            },
                            {
                                label: "Anaglyph Gamepad Camera",
                                action: "create-cameras-anaglyph-gamepad-camera",
                                needScene: true,
                            },
                            {
                                label: "Anaglyph Universal Camera",
                                action: "create-cameras-anaglyph-universal-camera",
                                needScene: true,
                            },
                        ],
                    },
                    {
                        label: "Stereoscopic",
                        items: [
                            {
                                label: "Stereoscopic Arc Rotate Camera",
                                action: "create-cameras-stereoscopic-arc-rotate-camera",
                                needScene: true,
                            },
                            {
                                label: "Stereoscopic Free Camera",
                                action: "create-cameras-stereoscopic-free-camera",
                                needScene: true,
                            },
                            {
                                label: "Stereoscopic Gamepad Camera",
                                action: "create-cameras-stereoscopic-gamepad-camera",
                                needScene: true,
                            },
                            {
                                label: "Stereoscopic Screen Universal Camera",
                                action: "create-cameras-stereoscopic-screen-universal-camera",
                                needScene: true,
                            },
                            {
                                label: "Stereoscopic Universal Camera",
                                action: "create-cameras-stereoscopic-universal-camera",
                                needScene: true,
                            },
                        ],
                    },
                    {
                        label: "VR Device Orientation",
                        items: [
                            {
                                label: "VR Device Orientation Free Camera",
                                action: "create-cameras-vr-device-orientation-free-camera",
                                needScene: true,
                            },
                            {
                                label: "VR Device Orientation Gamepad Camera",
                                action: "create-cameras-vr-device-orientation-gamepad-camera",
                                needScene: true,
                            },
                            {
                                label: "VR Device Orientation Universal Camera",
                                action: "create-cameras-vr-device-orientation-universal-camera",
                                needScene: true,
                            },
                        ],
                    },
                ],
            },
            {
                label: "Lights",
                items: [
                    {
                        label: "Directional Light",
                        action: "create-lights-directional-light",
                        needScene: true,
                    },
                    {
                        label: "Hemispheric Light",
                        action: "create-lights-hemispheric-light",
                        needScene: true,
                    },
                    {
                        label: "Point Light",
                        action: "create-lights-point-light",
                        needScene: true,
                    },
                    {
                        label: "Spot Light",
                        action: "create-lights-spot-light",
                        needScene: true,
                    },
                ],
            },
            {
                label: "Shadows",
                items: [
                    {
                        label: "Shadow Generator",
                        action: "create-shadows-shadow-generator",
                        needScene: true,
                    },
                    {
                        label: "Cascaded Shadow Generator",
                        action: "create-shadows-cascaded-shadow-generator",
                        needScene: true,
                    },
                ],
            },
            {
                label: "Group",
                action: "create-group",
                needScene: true,
            },
            {
                label: "Meshes",
                items: [
                    {
                        label: "Box",
                        action: "create-meshes-box",
                        needScene: true,
                    },
                    {
                        label: "Capsule",
                        action: "create-meshes-capsule",
                        needScene: true,
                    },
                    {
                        label: "Cylinder",
                        action: "create-meshes-cylinder",
                        needScene: true,
                    },
                    {
                        label: "Decal",
                        action: "create-meshes-decal",
                        needScene: true,
                    },
                    {
                        label: "Disc",
                        action: "create-meshes-disc",
                        needScene: true,
                    },
                    {
                        label: "Geodesic",
                        action: "create-meshes-geodesic",
                        needScene: true,
                    },
                    {
                        label: "Goldberg",
                        action: "create-meshes-goldberg",
                        needScene: true,
                    },
                    {
                        label: "Greased Line",
                        action: "create-meshes-greased-line",
                        needScene: true,
                    },
                    {
                        label: "Ground",
                        action: "create-meshes-ground",
                        needScene: true,
                    },
                    {
                        label: "Hemisphere",
                        action: "create-meshes-hemisphere",
                        needScene: true,
                    },
                    {
                        label: "Ico Sphere",
                        action: "create-meshes-ico-sphere",
                        needScene: true,
                    },
                    {
                        label: "Lathe",
                        action: "create-meshes-lathe",
                        needScene: true,
                    },
                    {
                        label: "Lines",
                        action: "create-meshes-lines",
                        needScene: true,
                    },
                    {
                        label: "Plane",
                        action: "create-meshes-plane",
                        needScene: true,
                    },
                    {
                        label: "Polyhedron",
                        action: "create-meshes-polyhedron",
                        needScene: true,
                    },
                    {
                        label: "Ribbon",
                        action: "create-meshes-ribbon",
                        needScene: true,
                    },
                    {
                        label: "Shape",
                        action: "create-meshes-shape",
                        needScene: true,
                    },
                    {
                        label: "Sphere",
                        action: "create-meshes-sphere",
                        needScene: true,
                    },
                    {
                        label: "Text",
                        action: "create-meshes-text",
                        needScene: true,
                    },
                    {
                        label: "Tiled Box",
                        action: "create-meshes-tiled-box",
                        needScene: true,
                    },
                    {
                        label: "Tiled Plane",
                        action: "create-meshes-tiled-plane",
                        needScene: true,
                    },
                    {
                        label: "Torus",
                        action: "create-meshes-torus",
                        needScene: true,
                    },
                    {
                        label: "Torus Knot",
                        action: "create-meshes-torus-knot",
                        needScene: true,
                    },
                    {
                        label: "Tube",
                        action: "create-meshes-tube",
                        needScene: true,
                    },
                ],
            },
            {
                label: "Materials",
                items: [
                    {
                        label: "Standard Material",
                        action: "create-materials-standard-material",
                        needScene: true,
                    },
                    {
                        label: "Multi Material",
                        action: "create-materials-multi-material",
                        needScene: true,
                    },
                    {
                        label: "Shader Material",
                        action: "create-materials-shader-material",
                        needScene: true,
                    },
                    {
                        label: "Background Material",
                        action: "create-materials-background-material",
                        needScene: true,
                    },
                    {
                        label: "Gaussian Splatting Material",
                        action: "create-materials-gaussian-splatting-material",
                        needScene: true,
                    },
                    {
                        label: "Greased Line Simple Material",
                        action: "create-materials-greased-line-simple-material",
                        needScene: true,
                    },
                    {
                        label: "Node Material",
                        action: "create-materials-node-material",
                        needScene: true,
                    },
                    {
                        label: "Occulusion Material",
                        action: "create-materials-occulusion-material",
                        needScene: true,
                    },
                    {
                        label: "PBR Material",
                        action: "create-materials-pbr-material",
                        needScene: true,
                    },
                    {
                        label: "PBR Metallic Roughness Material",
                        action: "create-materials-pbr-metallic-roughness-material",
                        needScene: true,
                    },
                    {
                        label: "PBR Specular Glossiness Material",
                        action: "create-materials-pbr-specular-glossiness-material",
                        needScene: true,
                    },
                ],
            },
            {
                label: "Render Pipelines",
                items: [
                    {
                        label: "Default Rendering Pipeline",
                        action: "create-render-pipelines-default-rendering-pipeline",
                        needScene: true,
                    },
                    {
                        label: "Lens Rendering Pipeline",
                        action: "create-render-pipelines-lens-rendering-pipeline",
                        needScene: true,
                    },
                    {
                        label: "SSAO2 Rendering Pipeline",
                        action: "create-render-pipelines-ssao2-rendering-pipeline",
                        needScene: true,
                    },
                    {
                        label: "SSAO Rendering Pipeline",
                        action: "create-render-pipelines-ssao-rendering-pipeline",
                        needScene: true,
                    },
                    {
                        label: "SSR Rendering Pipeline",
                        action: "create-render-pipelines-ssr-rendering-pipeline",
                        needScene: true,
                    },
                    {
                        label: "Standard Rendering Pipeline",
                        action: "create-render-pipelines-standard-rendering-pipeline",
                        needScene: true,
                    },
                    {
                        label: "TAA Rendering Pipeline",
                        action: "create-render-pipelines-taa-rendering-pipeline",
                        needScene: true,
                    },
                ],
            },
            {
                label: "Textures",
                items: [
                    {
                        label: "Alpha Raw Texture",
                        action: "create-textures-alpha-raw-texture",
                        needScene: true,
                    },
                    {
                        label: "Color Grading Texture",
                        action: "create-textures-color-grading-texture",
                        needScene: true,
                    },
                    {
                        label: "Cube Texture",
                        action: "create-textures-cube-texture",
                        needScene: true,
                    },
                    {
                        label: "Custom Procedural Texture",
                        action: "create-textures-custom-procedural-texture",
                        needScene: true,
                    },
                    {
                        label: "Dynamic Texture",
                        action: "create-textures-dynamic-texture",
                        needScene: true,
                    },
                    {
                        label: "Equi Rectangular Cube Texture",
                        action: "create-textures-equi-rectangular-cube-texture",
                        needScene: true,
                    },
                    {
                        label: "External Texture",
                        action: "create-textures-external-texture",
                        needScene: true,
                    },
                    {
                        label: "HDR Cube Texture",
                        action: "create-textures-hdr-cube-texture",
                        needScene: true,
                    },
                    {
                        label: "Html Element Texture",
                        action: "create-textures-html-element-texture",
                        needScene: true,
                    },
                    {
                        label: "Luminance Alpha Raw Texture",
                        action: "create-textures-luminance-alpha-raw-texture",
                        needScene: true,
                    },
                    {
                        label: "Luminance Raw Texture",
                        action: "create-textures-luminance-raw-texture",
                        needScene: true,
                    },
                    {
                        label: "Mirror Texture",
                        action: "create-textures-mirror-texture",
                        needScene: true,
                    },
                    {
                        label: "Noise Procedural Texture",
                        action: "create-textures-noise-procedural-texture",
                        needScene: true,
                    },
                    {
                        label: "Procedural Texture",
                        action: "create-textures-procedural-texture",
                        needScene: true,
                    },
                    {
                        label: "R Raw Texture",
                        action: "create-textures-r-raw-texture",
                        needScene: true,
                    },
                    {
                        label: "R Storage Raw Texture",
                        action: "create-textures-r-storage-raw-texture",
                        needScene: true,
                    },
                    {
                        label: "Raw Cube Texture",
                        action: "create-textures-raw-cube-texture",
                        needScene: true,
                    },
                    {
                        label: "Raw Texture 3D",
                        action: "create-textures-raw-texture-3d",
                        needScene: true,
                    },
                    {
                        label: "Refraction Texture",
                        action: "create-textures-refraction-texture",
                        needScene: true,
                    },
                    {
                        label: "Render Target Texture",
                        action: "create-textures-render-target-texture",
                        needScene: true,
                    },
                    {
                        label: "RGB Raw Texture",
                        action: "create-textures-rgb-raw-texture",
                        needScene: true,
                    },
                    {
                        label: "RGBA Raw Texture 2D Array",
                        action: "create-textures-rgba-raw-texture-2d-array",
                        needScene: true,
                    },
                    {
                        label: "RGBA Raw Texture",
                        action: "create-textures-rgba-raw-texture",
                        needScene: true,
                    },
                    {
                        label: "RGBA Storage Raw Texture",
                        action: "create-textures-rgba-storage-raw-texture",
                        needScene: true,
                    },
                    {
                        label: "Texture",
                        action: "create-textures-texture",
                        needScene: true,
                    },
                    {
                        label: "Video Texture",
                        action: "create-textures-video-texture",
                        needScene: true,
                    },
                ],
            },
        ],
    },
    {
        label: "Help",
        items: [
            {
                label: "Version",
                action: "help-version",
            },
        ],
    },
];

export function MenuBar() {
    function onClickHandler(action: string) {
        // biome-ignore lint/suspicious/noConsoleLog: <explanation>
        console.log("TODO", action);
    }

    return (
        <nav>
            <MenuBarList items={menu} depth={1} onClick={onClickHandler} />
        </nav>
    );
}
