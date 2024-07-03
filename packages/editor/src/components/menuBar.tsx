import {
    Menu,
    MenuItem,
    MenuList,
    MenuPopover,
    MenuTrigger,
    Toolbar,
    ToolbarButton,
} from "@fluentui/react-components";

export function MenuBar() {
    return (
        <Toolbar aria-label="nav">
            <Menu>
                <MenuTrigger>
                    <ToolbarButton aria-label="File">File</ToolbarButton>
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem>New Project</MenuItem>
                        <MenuItem>New Scene</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>

            <Menu>
                <MenuTrigger>
                    <ToolbarButton aria-label="Edit">Edit</ToolbarButton>
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem secondaryContent="Ctrl+Z">Undo</MenuItem>
                        <MenuItem secondaryContent="Ctrl+R">Redo</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>

            <Menu>
                <MenuTrigger>
                    <ToolbarButton aria-label="Create">Create</ToolbarButton>
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement={true}>
                                <MenuItem>Cameras</MenuItem>
                            </MenuTrigger>
                            <MenuPopover>
                                <MenuList>
                                    <MenuItem>Arc Rotate Camera</MenuItem>
                                    <MenuItem>Device Orientation Camera</MenuItem>
                                    <MenuItem>Fly Camera</MenuItem>
                                    <MenuItem>Follow Camera</MenuItem>
                                    <MenuItem>Free Camera</MenuItem>
                                    <MenuItem>Gamepad Camera</MenuItem>
                                    <MenuItem>Target Camera</MenuItem>
                                    <MenuItem>Touch Camera</MenuItem>
                                    <MenuItem>Universal Camera (Recommended)</MenuItem>
                                    <Menu>
                                        <MenuTrigger disableButtonEnhancement={true}>
                                            <MenuItem>Anaglyph</MenuItem>
                                        </MenuTrigger>
                                        <MenuPopover>
                                            <MenuList>
                                                <MenuItem>Anaglyph Arc Rotate Camera</MenuItem>
                                                <MenuItem>Anaglyph Free Camera</MenuItem>
                                                <MenuItem>Anaglyph Gamepad Camera</MenuItem>
                                                <MenuItem>Anaglyph Universal Camera</MenuItem>
                                            </MenuList>
                                        </MenuPopover>
                                    </Menu>
                                    <Menu>
                                        <MenuTrigger disableButtonEnhancement={true}>
                                            <MenuItem>Stereoscopic</MenuItem>
                                        </MenuTrigger>
                                        <MenuPopover>
                                            <MenuList>
                                                <MenuItem>Stereoscopic Arc Rotate Camera</MenuItem>
                                                <MenuItem>Stereoscopic Free Camera</MenuItem>
                                                <MenuItem>Stereoscopic Gamepad Camera</MenuItem>
                                                <MenuItem>Stereoscopic Screen Universal Camera</MenuItem>
                                                <MenuItem>Stereoscopic Universal Camera</MenuItem>
                                            </MenuList>
                                        </MenuPopover>
                                    </Menu>
                                    <Menu>
                                        <MenuTrigger disableButtonEnhancement={true}>
                                            <MenuItem>VR Device Orientation</MenuItem>
                                        </MenuTrigger>
                                        <MenuPopover>
                                            <MenuList>
                                                <MenuItem>VR Device Orientation Free Camera</MenuItem>
                                                <MenuItem>VR Device Orientation Gamepad Camera</MenuItem>
                                            </MenuList>
                                        </MenuPopover>
                                    </Menu>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement={true}>
                                <MenuItem>Lights</MenuItem>
                            </MenuTrigger>

                            <MenuPopover>
                                <MenuList>
                                    <MenuItem>Directional Light</MenuItem>
                                    <MenuItem>Hemispheric Light</MenuItem>
                                    <MenuItem>Point Light</MenuItem>
                                    <MenuItem>Spot Light</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement={true}>
                                <MenuItem>Shadows</MenuItem>
                            </MenuTrigger>

                            <MenuPopover>
                                <MenuList>
                                    <MenuItem>Shadow Generator</MenuItem>
                                    <MenuItem>Cascaded Shadow Generator</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement={true}>
                                <MenuItem>Group</MenuItem>
                            </MenuTrigger>
                        </Menu>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement={true}>
                                <MenuItem>Meshes</MenuItem>
                            </MenuTrigger>

                            <MenuPopover>
                                <MenuList>
                                    <MenuItem>Box</MenuItem>
                                    <MenuItem>Capsule</MenuItem>
                                    <MenuItem>Cylinder</MenuItem>
                                    <MenuItem>Decal</MenuItem>
                                    <MenuItem>Disc</MenuItem>
                                    <MenuItem>Geodesic</MenuItem>
                                    <MenuItem>Goldberg</MenuItem>
                                    <MenuItem>Greased Line</MenuItem>
                                    <MenuItem>Ground</MenuItem>
                                    <MenuItem>Hemisphere</MenuItem>
                                    <MenuItem>Ico Sphere</MenuItem>
                                    <MenuItem>Lathe</MenuItem>
                                    <MenuItem>Lines</MenuItem>
                                    <MenuItem>Plane</MenuItem>
                                    <MenuItem>Polyhedron</MenuItem>
                                    <MenuItem>Ribbon</MenuItem>
                                    <MenuItem>Shape</MenuItem>
                                    <MenuItem>Sphere</MenuItem>
                                    <MenuItem>Text</MenuItem>
                                    <MenuItem>Tiled Box</MenuItem>
                                    <MenuItem>Tiled Plane</MenuItem>
                                    <MenuItem>Torus</MenuItem>
                                    <MenuItem>Torus Knot</MenuItem>
                                    <MenuItem>Tube</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement={true}>
                                <MenuItem>Materials</MenuItem>
                            </MenuTrigger>

                            <MenuPopover>
                                <MenuList>
                                    <MenuItem>Standard Material</MenuItem>
                                    <MenuItem>Multi Material</MenuItem>
                                    <MenuItem>Shader Material</MenuItem>
                                    <MenuItem>Background Material</MenuItem>
                                    <MenuItem>Gaussian Splatting Material</MenuItem>
                                    <MenuItem>Greased Line Simple Material</MenuItem>
                                    <MenuItem>Node Material</MenuItem>
                                    <MenuItem>Occulusion Material</MenuItem>
                                    <MenuItem>PBR Material</MenuItem>
                                    <MenuItem>PBR Metallic Roughness Material</MenuItem>
                                    <MenuItem>PBR Specular Glossiness Material</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement={true}>
                                <MenuItem>Render Pipelines</MenuItem>
                            </MenuTrigger>

                            <MenuPopover>
                                <MenuList>
                                    <MenuItem>Default Rendering Pipeline</MenuItem>
                                    <MenuItem>Lens Rendering Pipeline</MenuItem>
                                    <MenuItem>SSAO2 Rendering Pipeline</MenuItem>
                                    <MenuItem>SSAO Rendering Pipeline</MenuItem>
                                    <MenuItem>SSR Rendering Pipeline</MenuItem>
                                    <MenuItem>Standard Rendering Pipeline</MenuItem>
                                    <MenuItem>TAA Rendering Pipeline</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                        <Menu>
                            <MenuTrigger disableButtonEnhancement={true}>
                                <MenuItem>Textures</MenuItem>
                            </MenuTrigger>

                            <MenuPopover>
                                <MenuList>
                                    <MenuItem>Alpha Raw Texture</MenuItem>
                                    <MenuItem>Color Grading Texture</MenuItem>
                                    <MenuItem>Cube Texture</MenuItem>
                                    <MenuItem>Custom Procedural Texture</MenuItem>
                                    <MenuItem>Dynamic Texture</MenuItem>
                                    <MenuItem>Equi Rectangular Cube Texture</MenuItem>
                                    <MenuItem>External Texture</MenuItem>
                                    <MenuItem>HDR Cube Texture</MenuItem>
                                    <MenuItem>Html Element Texture</MenuItem>
                                    <MenuItem>Luminance Alpha Raw Texture</MenuItem>
                                    <MenuItem>Luminance Raw Texture</MenuItem>
                                    <MenuItem>Mirror Texture</MenuItem>
                                    <MenuItem>Noise Procedural Texture</MenuItem>
                                    <MenuItem>Procedural Texture</MenuItem>
                                    <MenuItem>R Raw Texture</MenuItem>
                                    <MenuItem>R Storage Raw Texture</MenuItem>
                                    <MenuItem>Raw Cube Texture</MenuItem>
                                    <MenuItem>Raw Texture 3D</MenuItem>
                                    <MenuItem>Refraction Texture</MenuItem>
                                    <MenuItem>Render Target Texture</MenuItem>
                                    <MenuItem>RGB Raw Texture</MenuItem>
                                    <MenuItem>RGBA Raw Texture 2D Array</MenuItem>
                                    <MenuItem>RGBA Raw Texture</MenuItem>
                                    <MenuItem>RGBA Storage Raw Texture</MenuItem>
                                    <MenuItem>Texture</MenuItem>
                                    <MenuItem>Video Texture</MenuItem>
                                </MenuList>
                            </MenuPopover>
                        </Menu>
                    </MenuList>
                </MenuPopover>
            </Menu>

            <Menu>
                <MenuTrigger>
                    <ToolbarButton aria-label="Play">Play</ToolbarButton>
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem>Play</MenuItem>
                        <MenuItem>Pause</MenuItem>
                        <MenuItem>Stop</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>

            <Menu>
                <MenuTrigger>
                    <ToolbarButton aria-label="Help">Help</ToolbarButton>
                </MenuTrigger>

                <MenuPopover>
                    <MenuList>
                        <MenuItem>Documentation</MenuItem>
                        <MenuItem>Community</MenuItem>
                        <MenuItem>Report an Issue</MenuItem>
                        <MenuItem>GitHub</MenuItem>
                        <MenuItem>Version</MenuItem>
                    </MenuList>
                </MenuPopover>
            </Menu>
        </Toolbar>
    );
}
