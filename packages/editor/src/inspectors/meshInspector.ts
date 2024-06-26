import type { InspectorContent } from "../types";

export const MeshInspector: readonly InspectorContent[] = [
    {
        name: "name",
        label: "Name",
        type: "text",
        default: "Mesh",
        category: "General",
        description: "Name of the mesh.",
    },
    {
        name: "id",
        label: "Id",
        type: "text",
        default: "",
        category: "General",
        description: "Id of the mesh.",
    },
    {
        name: "position",
        label: "Position",
        type: "vector3",
        default: [0, 0, 0],
        category: "General",
        description: "Position of the mesh.",
    },
    {
        name: "rotation",
        label: "Rotation",
        type: "vector3",
        default: [0, 0, 0],
        category: "General",
        description: "Rotation of the mesh.",
    },
    {
        name: "scaling",
        label: "Scaling",
        type: "vector3",
        default: [1, 1, 1],
        category: "General",
        description: "Scaling of the mesh.",
    },
    {
        name: "billboardMode",
        label: "Billboard Mode",
        type: "enum",
        default: 0,
        category: "Misc",
        description: "Billboard mode of the mesh.",
        enum: [
            {
                label: "None",
                value: 0,
                description: "Object will not rotate to face the camera",
            },
            {
                label: "X",
                value: 1,
                description: "Object will rotate to face the camera but only on the x axis",
            },
            {
                label: "Y",
                value: 2,
                description: "Object will rotate to face the camera but only on the y axis",
            },
            {
                label: "Z",
                value: 4,
                description: "Object will rotate to face the camera but only on the z axis",
            },
            {
                label: "All",
                value: 7,
                description: "Object will rotate to face the camera on all axes",
            },
            {
                label: "Use Position",
                value: 128,
                description: "Object will rotate to face the camera's position instead of orientation",
            },
        ],
    },
    {
        name: "preserveParentRotationForBillboard",
        label: "Preserve Parent Rotation For Billboard",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `Gets or sets a boolean indicating that parent rotation should be preserved when using billboards.
            This could be useful for glTF objects where parent rotation helps converting from right handed to left handed`,
    },
    {
        name: "scalingDeterminant",
        label: "Scaling Determinant",
        type: "number",
        default: 1,
        category: "Misc",
        description: "Multiplication factor on scale x/y/z when computing the world matrix. Eg. for a 1x1x1 cube setting this to 2 will make it a 2x2x2 cube",
    },
    {
        name: "infiniteDistance",
        label: "Infinite Distance",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Gets or sets the distance of the object to max, often used by skybox",
    },
    {
        name: "ignoreNonUniformScaling",
        label: "Ignore Non Uniform Scaling",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `Gets or sets a boolean indicating that non uniform scaling (when at least one component is different from others) should be ignored.
            By default the system will update normals to compensate`,
    },
    {
        name: "reIntegrateRotationIntoRotationQuaternion",
        label: "Re Integrate Rotation Into Rotation Quaternion",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Gets or sets a boolean indicating that even if rotationQuaternion is defined, you can keep updating rotation property and Babylon.js will just mix both",
    },
    {
        name: "cullingStrategy",
        label: "Culling Strategy",
        type: "enum",
        default: 1,
        category: "Misc",
        description: `The culling strategy to use to check whether the mesh must be rendered or not.
            This value can be changed at any time and will be used on the next render mesh selection.`,
        enum: [
            {
                label: "Standard",
                value: 0,
                description: `Default culling strategy : this is an exclusion test and it's the more accurate.
                    Test order :
                    Is the bounding sphere outside the frustum ?
                    If not, are the bounding box vertices outside the frustum ?
                    It not, then the cullable object is in the frustum.`,
            },
            {
                label: "Bounding Sphere Only",
                value: 1,
                description: `Culling strategy : Bounding Sphere Only.
                    This is an exclusion test. It's faster than the standard strategy because the bounding box is not tested.
                    It's also less accurate than the standard because some not visible objects can still be selected.
                    Test : is the bounding sphere outside the frustum ?
                    If not, then the cullable object is in the frustum.`,
            },
            {
                label: "Optimistic Inclusion",
                value: 2,
                description: `Culling strategy : Optimistic Inclusion.
                    This in an inclusion test first, then the standard exclusion test.
                    This can be faster when a cullable object is expected to be almost always in the camera frustum.
                    This could also be a little slower than the standard test when the tested object center is not the frustum but one of its bounding box vertex is still inside.
                    Anyway, it's as accurate as the standard strategy.
                    Test :
                    Is the cullable object bounding sphere center in the frustum ?
                    If not, apply the default culling strategy.`,
            },
            {
                label: "Optimistic Inclusion Then BSphere Only",
                value: 3,
                description: `Culling strategy : Optimistic Inclusion then Bounding Sphere Only.
                    This in an inclusion test first, then the bounding sphere only exclusion test.
                    This can be the fastest test when a cullable object is expected to be almost always in the camera frustum.
                    This could also be a little slower than the BoundingSphereOnly strategy when the tested object center is not in the frustum but its bounding sphere still intersects it.
                    It's less accurate than the standard strategy and as accurate as the BoundingSphereOnly strategy.
                    Test :
                    Is the cullable object bounding sphere center in the frustum ?
                    If not, apply the Bounding Sphere Only strategy. No Bounding Box is tested here.`,
            },
        ],
    },
    {
        name: "partitioningSubdivisions",
        label: "Partitioning Subdivisions",
        type: "number",
        default: 10,
        category: "FacetData",
        description: "Gets or set the number (integer) of subdivisions per axis in the partitioning space",
        link: "https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#tweaking-the-partitioning",
    },
    {
        name: "partitioningBBoxRatio",
        label: "Partitioning BBox Ratio",
        type: "number",
        default: 1.01,
        category: "FacetData",
        description: `The ratio (float) to apply to the bounding box size to set to the partitioning space.
            Ex : 1.01 (default) the partitioning space is 1% bigger than the bounding box`,
        link: "https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#tweaking-the-partitioning",
    },
    {
        name: "mustDepthSortFacets",
        label: "Must Depth Sort Facets",
        type: "boolean",
        default: false,
        category: "FacetData",
        description: `Gets or sets a boolean indicating that the facets must be depth sorted on next call to updateFacetData().
            Works only for updatable meshes.
            Doesn't work with multi-materials`,
        link: "https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#facet-depth-sort",
    },
    {
        name: "facetDepthSortFrom",
        label: "Facet Depth Sort From",
        type: "vector3",
        default: [0, 0, 0],
        category: "FacetData",
        description: `The location (Vector3) where the facet depth sort must be computed from.
            By default, the active camera position.
            Used only when facet depth sort is enabled`,
        link: "https://doc.babylonjs.com/features/featuresDeepDive/mesh/facetData#facet-depth-sort",
    },
    {
        name: "collisionRetryCount",
        label: "Collision Retry Count",
        type: "number",
        default: 3,
        category: "FacetData",
        description: "number of collision detection tries. Change this value if not all collisions are detected and handled properly",
    },
    // TODO: MorphTargetManager
    // TODO: BakedVertexAnimationManager
    {
        name: "onCollideObservable",
        label: "Collide",
        type: "reference",
        referenceType: "Observable<Vector3>",
        category: "Misc",
        description: "An event triggered when this mesh collides with another one",
    },
    {
        name: "onCollisionPositionChangeObservable",
        label: "Collision Position Change",
        type: "reference",
        referenceType: "Observable<Vector3>",
        category: "Misc",
        description: "An event triggered when the collision's position changes",
    },
    {
        name: "onMaterialChangedObservable",
        label: "Material Changed",
        type: "reference",
        referenceType: "Observable<AbstractMesh>",
        category: "Misc",
        description: "An event triggered when material is changed",
    },
    {
        name: "visibility",
        label: "Visibility",
        type: "number",
        default: 1,
        category: "Misc",
        description: "Gets or sets mesh visibility between 0 and 1 (default is 1)",
    },
    {
        name: "alphaIndex",
        label: "Alpha Index",
        type: "number",
        default: Number.MAX_VALUE,
        category: "Misc",
        description: "Gets or sets the alpha index used to sort transparent meshes",
        link: "https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering#alpha-index",
    },
    {
        name: "isVisible",
        label: "Is Visible",
        type: "boolean",
        default: true,
        category: "Misc",
        description: "Gets or sets a boolean indicating if the mesh is visible (renderable). Default is true",
    },
    {
        name: "isPickable",
        label: "Is Pickable",
        type: "boolean",
        default: true,
        category: "Misc",
        description: "Gets or sets a boolean indicating if the mesh can be picked (by scene.pick for instance or through actions). Default is true",
    },
    {
        name: "isNearPickable",
        label: "Is Near Pickable",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Gets or sets a boolean indicating if the mesh can be near picked (touched by the XR controller or hands). Default is false",
    },
    {
        name: "showSubMeshesBoundingBox",
        label: "Show Sub Meshes Bounding Box",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Gets or sets a boolean indicating that bounding boxes of subMeshes must be rendered as well (false by default)",
    },
    {
        name: "isBlocker",
        label: "Is Blocker",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Gets or sets a boolean indicating if the mesh must be considered as a ray blocker for lens flares (false by default)",
        link: "https://doc.babylonjs.com/features/featuresDeepDive/environment/lenseFlare",
    },
    {
        name: "enablePointerMoveEvents",
        label: "Enable Pointer Move Events",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Gets or sets a boolean indicating that pointer move events must be supported on this mesh (false by default)",
    },
    {
        name: "pointerOverDisableMeshTesting",
        label: "Pointer Over Disable Mesh Testing",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `Gets or sets the property which disables the test that is checking that the mesh under the pointer is the same than the previous time we tested for it (default: false).
            Set this property to true if you want thin instances picking to be reported accurately when moving over the mesh.
            Note that setting this property to true will incur some performance penalties when dealing with pointer events for this mesh so use it sparingly.`,
    },
    {
        name: "renderingGroupId",
        label: "Rendering Group Id",
        type: "number",
        default: 0,
        category: "Misc",
        description: "Specifies the rendering group id for this mesh (0 by default)",
        link: "https://doc.babylonjs.com/features/featuresDeepDive/materials/advanced/transparent_rendering#rendering-groups",
    },
    {
        name: "material",
        label: "Material",
        type: "reference",
        referenceType: "Material",
        category: "Misc",
        description: "Material of the mesh.",
    },
    {
        name: "receiveShadows",
        label: "Receive Shadows",
        type: "boolean",
        default: false,
        category: "Shadows",
        description: "Gets or sets a boolean indicating that this mesh can receive realtime shadows",
        link: "https://doc.babylonjs.com/features/featuresDeepDive/lights/shadows",
    },
    {
        name: "outlineColor",
        label: "Outline Color",
        type: "color3",
        default: [1, 0, 0],
        category: "Debug",
        description: "Defines color to use when rendering outline",
    },
    {
        name: "outlineWidth",
        label: "Outline Width",
        type: "number",
        default: 0.02,
        category: "Debug",
        description: "Defines width to use when rendering outline",
    },
    {
        name: "overlayColor",
        label: "Overlay Color",
        type: "color3",
        default: [1, 0, 0],
        category: "Debug",
        description: "Defines color to use when rendering overlay",
    },
    {
        name: "overlayAlpha",
        label: "Overlay Alpha",
        type: "number",
        default: 0.5,
        category: "Debug",
        description: "Defines alpha to use when rendering overlay",
    },
    {
        name: "hasVertexAlpha",
        label: "Has Vertex Alpha",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `Gets or sets a boolean indicating that this mesh needs to use vertex alpha data to render.
            This property is misnamed and should be useVertexAlpha. Note that the mesh will be rendered
            with alpha blending when this flag is set even if vertex alpha data is missing from the geometry.`,
    },
    {
        name: "useVertexColors",
        label: "Use Vertex Colors",
        type: "boolean",
        default: true,
        category: "Misc",
        description: "Gets or sets a boolean indicating that this mesh needs to use vertex color data to render (if this kind of vertex data is available in the geometry)",
    },
    {
        name: "computeBonesUsingShaders",
        label: "Compute Bones Using Shaders",
        type: "boolean",
        default: true,
        category: "Misc",
        description: "Gets or sets a boolean indicating that bone animations must be computed by the GPU (true by default)",
    },
    {
        name: "numBoneInfluencers",
        label: "Num Bone Influencers",
        type: "number",
        default: 4,
        category: "Misc",
        description: "Gets or sets the number of allowed bone influences per vertex (4 by default)",
    },
    {
        name: "applyFog",
        label: "Apply Fog",
        type: "boolean",
        default: true,
        category: "Misc",
        description: "Gets or sets a boolean indicating that this mesh will allow fog to be rendered on it (true by default)",
    },
    {
        name: "enableDistantPicking",
        label: "Enable Distant Picking",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "When enabled, decompose picking matrices for better precision with large values for mesh position and scling",
    },
    {
        name: "useOctreeForRenderingSelection",
        label: "Use Octree For Rendering Selection",
        type: "boolean",
        default: true,
        category: "Misc",
        description: "Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes selection (true by default)",
    },
    {
        name: "useOctreeForPicking",
        label: "Use Octree For Picking",
        type: "boolean",
        default: true,
        category: "Misc",
        description: "Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes picking (true by default)",
    },
    {
        name: "useOctreeForCollisions",
        label: "Use Octree For Collisions",
        type: "boolean",
        default: true,
        category: "Misc",
        description: "Gets or sets a boolean indicating that internal octree (if available) can be used to boost submeshes collision (true by default)",
    },
    {
        name: "layerMask",
        label: "Layer Mask",
        type: "number",
        default: 0x0FFFFFFF,
        category: "Misc",
        description: "Gets or sets the current layer mask (default is 0x0FFFFFFF)",
        link: "https://doc.babylonjs.com/features/featuresDeepDive/cameras/layerMasksAndMultiCam",
    },
    {
        name: "alwaysSelectAsActiveMesh",
        label: "Always Select As Active Mesh",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "True if the mesh must be rendered in any case (this will shortcut the frustum clipping phase)",
    },
    {
        name: "doNotSyncBoundingInfo",
        label: "Do Not Sync Bounding Info",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Gets or sets a boolean indicating that the bounding info does not need to be kept in sync (for performance reason)",
    },
    // TODO: ActionManager
    {
        name: "ellipsoid",
        label: "Ellipsoid",
        type: "vector3",
        default: [0.5, 1, 0.5],
        category: "Misc",
        description: "Gets or sets the ellipsoid used to impersonate this mesh when using collision engine (default is (0.5, 1, 0.5))",
        link: "https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions",
    },
    {
        name: "ellipsoidOffset",
        label: "Ellipsoid Offset",
        type: "vector3",
        default: [0, 0, 0],
        category: "Misc",
        description: "Gets or sets the ellipsoid offset used to impersonate this mesh when using collision engine (default is (0, 0, 0))",
        link: "https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions",
    },
    {
        name: "collisionMask",
        label: "Collision Mask",
        type: "number",
        default: -1,
        category: "Misc",
        description: `Gets or sets a collision mask used to mask collisions (default is -1).
            A collision between A and B will happen if A.collisionGroup & b.collisionMask !== 0`,
    },
    {
        name: "collisionResponse",
        label: "Collision Response",
        type: "boolean",
        default: true,
        category: "Misc",
        description: `Gets or sets a collision response flag (default is true).
            when collisionResponse is false, events are still triggered but colliding entity has no response
            This helps creating trigger volume when user wants collision feedback events but not position/velocity
            to respond to the collision.`,
    },
    {
        name: "collisionGroup",
        label: "Collision Group",
        type: "number",
        default: -1,
        category: "Misc",
        description: `Gets or sets the current collision group mask (-1 by default).
            A collision between A and B will happen if A.collisionGroup & b.collisionMask !== 0`,
    },
    // TODO: surroundingMeshes
    {
        name: "edgesWidth",
        label: "Edges Width",
        type: "number",
        default: 1,
        category: "Debug",
        description: "Defines edge width used when edgesRenderer is enabled",
        link: "https://www.babylonjs-playground.com/#10OJSG#13",
    },
    {
        name: "edgesColor",
        label: "Edges Color",
        type: "color4",
        default: [1, 0, 0, 1],
        category: "Debug",
        description: "Defines edge color used when edgesRenderer is enabled",
        link: "https://www.babylonjs-playground.com/#10OJSG#13",
    },
    // TODO: skeleton
    {
        name: "onRebuildObservable",
        label: "Rebuild",
        type: "reference",
        referenceType: "Observable<AbstractMesh>",
        category: "Misc",
        description: "An event triggered when the mesh is rebuilt",
    },
    {
        name: "checkCollisions",
        label: "Check Collisions",
        type: "boolean",
        default: false,
        category: "Misc",
        description: "Gets or sets a boolean indicating that this mesh can be used in the collision engine",
        link: "https://doc.babylonjs.com/features/featuresDeepDive/cameras/camera_collisions",
    },
    {
        name: "onBeforeRenderObservable",
        label: "Before Render",
        type: "reference",
        referenceType: "Observable<Mesh>",
        category: "Misc",
        description: "An event triggered before rendering the mesh",
    },
    {
        name: "onBeforeBindObservable",
        label: "Before Bind",
        type: "reference",
        referenceType: "Observable<Mesh>",
        category: "Misc",
        description: "An event triggered before binding the mesh",
    },
    {
        name: "onAfterRenderObservable",
        label: "After Render",
        type: "reference",
        referenceType: "Observable<Mesh>",
        category: "Misc",
        description: "An event triggered after rendering the mesh",
    },
    {
        name: "onBetweenPassObservable",
        label: "Between Pass",
        type: "reference",
        referenceType: "Observable<SubMesh>",
        category: "Misc",
        description: "An event triggered between rendering passes",
    },
    {
        name: "onBeforeDrawObservable",
        label: "Before Draw",
        type: "reference",
        referenceType: "Observable<Mesh>",
        category: "Misc",
        description: "An event triggered before drawing the mesh",
    },
    {
        name: "delayLoadState",
        label: "Delay Load State",
        type: "enum",
        default: 0,
        category: "Misc",
        description: "Gets the delay loading state of the mesh (when delay loading is turned on)",
        link: "https://doc.babylonjs.com/features/featuresDeepDive/importers/incrementalLoading",
        enum: [
            {
                label: "None",
                value: 0,
                description: "Defines that the resource is not delayed",
            },
            {
                label: "Loaded",
                value: 1,
                description: "Defines that the resource was successfully delay loaded",
            },
            {
                label: "Loading",
                value: 2,
                description: "Defines that the resource is currently delay loading",
            },
            {
                label: "Not Loaded",
                value: 4,
                description: "Defines that the resource is delayed and has not started loading",
            },
        ],
    },
    {
        name: "forcedInstanceCount",
        label: "Forced Instance Count",
        type: "number",
        default: 0,
        category: "Misc",
        description: `Gets or sets the forced number of instances to display.
            If 0 (default value), the number of instances is not forced and depends on the draw type
            (regular / instance / thin instances mesh)`,
    },
    {
        name: "sideOrientation",
        label: "Side Orientation",
        type: "enum",
        default: 0,
        category: "Misc",
        description: `Use this property to change the original side orientation defined at construction time
            Material.sideOrientation will override this value if set
            User will still be able to change the material sideOrientation afterwards if they really need it`,
        enum: [
            {
                label: "Clockwise",
                value: 0,
            },
            {
                label: "Counter Clockwise",
                value: 1,
            },
        ],
    },
    {
        name: "overrideRenderingFillMode",
        label: "Override Rendering Fill Mode",
        type: "number",
        default: null,
        category: "Debug",
        description: "Use this property to override the Material's fillMode value",
    },
    {
        name: "ignoreCameraMaxZ",
        label: "Ignore Camera Max Z",
        type: "boolean",
        default: false,
        category: "Misc",
        description: `Gets or sets a boolean indicating whether to render ignoring the active camera's max z setting. (false by default)
            You should not mix meshes that have this property set to true with meshes that have it set to false if they all write
            to the depth buffer, because the z-values are not comparable in the two cases and you will get rendering artifacts if you do.
            You can set the property to true for meshes that do not write to the depth buffer, or set the same value (either false or true) otherwise.
            Note this will reduce performance when set to true.`,
    },
];
