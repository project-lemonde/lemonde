import {
    Accordion,
    AccordionHeader,
    AccordionItem,
    AccordionPanel,
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogBody,
    DialogContent,
    DialogSurface,
    DialogTitle,
    DialogTrigger,
    Input,
    Label,
    makeStyles,
    Select,
    SpinButton,
    Tooltip,
} from "@fluentui/react-components";
import { useState, type FormEvent } from "react";

type EngineOption = {
    name: string;
    type: "boolean" | "number" | "enum";
    description: string;
    default: unknown;
    enum?: string[];
};

/**
 * @link https://doc.babylonjs.com/typedoc/interfaces/BABYLON.AbstractEngineOptions
 */
const abstractEngineOptions: EngineOption[] = [
    {
        name: "adaptToDeviceRatio",
        type: "boolean",
        description: "Defines whether to adapt to the device's viewport characteristics (default: false)",
        default: false,
    },
    {
        name: "antialias",
        type: "boolean",
        description: "Defines whether MSAA is enabled on the canvas.",
        default: false,
    },
    {
        name: "audioEngine",
        type: "boolean",
        description: "Defines if webaudio should be initialized as well",
        default: false,
    },
    // {
    //     name: "audioEngineOptions",
    //     type: "boolean",
    //     description: "Specifies options for the audio engine",
    //     default: false,
    // },
    {
        name: "deterministicLockstep",
        type: "boolean",
        description:
            "Defines if animations should run using a deterministic lock step See https://doc.babylonjs.com/features/featuresDeepDive/animation/advanced_animations#deterministic-lockstep",
        default: false,
    },
    {
        name: "doNotHandleContextLost",
        type: "boolean",
        description:
            "Defines that engine should ignore context lost events If this event happens when this parameter is true, you will have to reload the page to restore rendering",
        default: false,
    },
    {
        name: "doNotHandleTouchAction",
        type: "boolean",
        description:
            "Defines that engine should ignore modifying touch action attribute and style If not handle, you might need to set it up on your side for expected touch devices behavior.",
        default: false,
    },
    {
        name: "limitDeviceRatio",
        type: "number",
        description:
            "Defines if the engine should no exceed a specified device ratio See https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio",
        default: undefined,
    },
    {
        name: "lockstepMaxSteps",
        type: "number",
        description: "Defines the maximum steps to use with deterministic lock step mode",
        default: undefined,
    },
    {
        name: "premultipliedAlpha",
        type: "boolean",
        description: `Defines whether the canvas should be created in "premultiplied" mode (if false, the canvas is created in the "opaque" mode) (true by default)`,
        default: true,
    },
    {
        name: "stencil",
        type: "boolean",
        description: "Defines whether the stencil buffer should be enabled.",
        default: false,
    },
    {
        name: "timeStep",
        type: "number",
        description: "Defines the seconds between each deterministic lock step",
        default: undefined,
    },
    {
        name: "useExactSrgbConversions",
        type: "boolean",
        description:
            "True if the more expensive but exact conversions should be used for transforming colors to and from linear space within shaders. Otherwise, the default is to use a cheaper approximation.",
        default: false,
    },
    {
        name: "useHighPrecisionMatrix",
        type: "boolean",
        description: "Make the matrix computations to be performed in 64 bits instead of 32 bits. False by default",
        default: false,
    },
];

const webglEngineOptions: EngineOption[] = [
    ...abstractEngineOptions,
    ...[
        {
            name: "failIfMajorPerformanceCaveat",
            type: "boolean",
            description: "Will prevent the system from falling back to software implementation if a hardware device cannot be created",
            default: false,
        },
        {
            name: "forceSRGBBufferSupportState",
            type: "boolean",
            description:
                "If sRGB Buffer support is not set during construction, use this value to force a specific state This is added due to an issue when processing textures in chrome/edge/firefox This will not influence NativeEngine and WebGPUEngine which set the behavior to true during construction.",
            default: false,
        },
        {
            name: "loseContextOnDispose",
            type: "boolean",
            description:
                "Defines if the gl context should be released. It's false by default for backward compatibility, but you should probably pass true (see https://registry.khronos.org/webgl/extensions/WEBGL_lose_context/)",
            default: false,
        },
        {
            name: "useHighPrecisionFloats",
            type: "boolean",
            description: "Defines that engine should compile shaders with high precision floats (if supported). True by default",
            default: true,
        },
        {
            name: "xrCompatible",
            type: "boolean",
            description: "Make the canvas XR Compatible for XR sessions",
            default: false,
        },
    ] as EngineOption[],
];

const webgpuEngineOptions: EngineOption[] = [
    ...abstractEngineOptions,
    ...[
        // deviceDescriptor
        {
            name: "enableAllFeatures",
            type: "boolean",
            description:
                "When requesting the device, enable all the features supported by the adapter. Default: false Note that this setting is ignored if you explicitely set deviceDescriptor.requiredFeatures",
            default: false,
        },
        {
            name: "enableGPUDebugMarkers",
            type: "boolean",
            description: "Defines whether we should generate debug markers in the gpu command lists (can be seen with PIX for eg). Default: false",
            default: false,
        },
        {
            name: "forceFallbackAdapter",
            type: "boolean",
            description:
                "When set to true, indicates that only a fallback adapter may be returned when requesting an adapter. If the user agent does not support a fallback adapter, will cause requestAdapter() to resolve to null. Default: false",
            default: false,
        },
        // glsLangOptions
        {
            name: "powerPreference",
            type: "enum",
            description: "Defines the category of adapter to use. Is it the discrete or integrated device.",
            default: undefined,
            enum: ["low-power", "high-performance"],
        },
        {
            name: "setMaximumLimits",
            type: "boolean",
            description:
                "When requesting the device, set the required limits to the maximum possible values (the ones from adapter.limits). Default: false Note that this setting is ignored if you explicitely set deviceDescriptor.requiredLimits",
            default: false,
        },
        {
            name: "swapChainFormat",
            type: "enum",
            description: "Defines the requested Swap Chain Format.",
            default: undefined,
            enum: [
                "r8unorm",
                "r8snorm",
                "r8uint",
                "r8sint",
                "r16uint",
                "r16sint",
                "r16float",
                "rg8unorm",
                "rg8snorm",
                "rg8uint",
                "rg8sint",
                "r32uint",
                "r32sint",
                "r32float",
                "rg16uint",
                "rg16sint",
                "rg16float",
                "rgba8unorm",
                "rgba8unorm-srgb",
                "rgba8snorm",
                "rgba8uint",
                "rgba8sint",
                "bgra8unorm",
                "bgra8unorm-srgb",
                "rgb9e5ufloat",
                "rgb10a2uint",
                "rgb10a2unorm",
                "rg11b10ufloat",
                "rg32uint",
                "rg32sint",
                "rg32float",
                "rgba16uint",
                "rgba16sint",
                "rgba16float",
                "rgba32uint",
                "rgba32sint",
                "rgba32float",
                "stencil8",
                "depth16unorm",
                "depth24plus",
                "depth24plus-stencil8",
                "depth32float",
                "depth32float-stencil8",
                "bc1-rgba-unorm",
                "bc1-rgba-unorm-srgb",
                "bc2-rgba-unorm",
                "bc2-rgba-unorm-srgb",
                "bc3-rgba-unorm",
                "bc3-rgba-unorm-srgb",
                "bc4-r-unorm",
                "bc4-r-snorm",
                "bc5-rg-unorm",
                "bc5-rg-snorm",
                "bc6h-rgb-ufloat",
                "bc6h-rgb-float",
                "bc7-rgba-unorm",
                "bc7-rgba-unorm-srgb",
                "etc2-rgb8unorm",
                "etc2-rgb8unorm-srgb",
                "etc2-rgb8a1unorm",
                "etc2-rgb8a1unorm-srgb",
                "etc2-rgba8unorm",
                "etc2-rgba8unorm-srgb",
                "eac-r11unorm",
                "eac-r11snorm",
                "eac-rg11unorm",
                "eac-rg11snorm",
                "astc-4x4-unorm",
                "astc-4x4-unorm-srgb",
                "astc-5x4-unorm",
                "astc-5x4-unorm-srgb",
                "astc-5x5-unorm",
                "astc-5x5-unorm-srgb",
                "astc-6x5-unorm",
                "astc-6x5-unorm-srgb",
                "astc-6x6-unorm",
                "astc-6x6-unorm-srgb",
                "astc-8x5-unorm",
                "astc-8x5-unorm-srgb",
                "astc-8x6-unorm",
                "astc-8x6-unorm-srgb",
                "astc-8x8-unorm",
                "astc-8x8-unorm-srgb",
                "astc-10x5-unorm",
                "astc-10x5-unorm-srgb",
                "astc-10x6-unorm",
                "astc-10x6-unorm-srgb",
                "astc-10x8-unorm",
                "astc-10x8-unorm-srgb",
                "astc-10x10-unorm",
                "astc-10x10-unorm-srgb",
                "astc-12x10-unorm",
                "astc-12x10-unorm-srgb",
                "astc-12x12-unorm",
                "astc-12x12-unorm-srgb",
            ],
        },
        // twgslOptions
    ] as EngineOption[],
];

const useStyles = makeStyles({
    content: {
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
    },
});

interface CreateProjectDialogProp {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    handleSubmit?: (projectName: string, engine: string, engineOption: any) => void;
}

export function CreateProjectDialog({ handleSubmit }: CreateProjectDialogProp) {
    const styles = useStyles();
    const [projectName, setProjectName] = useState("New Project");
    const [engine, setEngine] = useState("webgl2");
    const advancedOptions = (engine === "webgl2" || engine === "webgl1") ? webglEngineOptions : webgpuEngineOptions;
    const [engineOptions, setEngineOptions] = useState<Record<string, unknown>>({});

    function handleSubmitForm(e: FormEvent) {
        e.preventDefault();
        if (handleSubmit) {
            handleSubmit(projectName, engine, engineOptions);
        }
    }

    return (
        <Dialog modalType="modal" defaultOpen={true}>
            <DialogTrigger disableButtonEnhancement={true}>
                <Button size="large">Create new project</Button>
            </DialogTrigger>

            <DialogSurface aria-describedby={undefined}>
                <form onSubmit={handleSubmitForm}>
                    <DialogBody>
                        <DialogTitle>Create new project</DialogTitle>
                        <DialogContent className={styles.content}>
                            <Label required={true} htmlFor={"project-name"}>
                                Project Name
                            </Label>
                            <Input required={true} id={"project-name"} type="text" value={projectName} onChange={(e) => setProjectName(e.target.value)} />
                            <Label required={true} htmlFor={"engine"}>
                                Engine
                            </Label>
                            <Select required={true} id={"engine"} value={engine} onChange={(e) => setEngine(e.target.value)}>
                                <option value="webgl2" selected={true}>
                                    WebGL 2(recommended)
                                </option>
                                <option value="webgpu">WebGPU(experimental)</option>
                                <option value="webgl1">WebGL 1(deprecated)</option>
                            </Select>
                            <Accordion collapsible={true}>
                                <AccordionItem value="1">
                                    <AccordionHeader size="small">Engine options</AccordionHeader>
                                    <AccordionPanel>
                                        <div>
                                            {advancedOptions.map((opt) => (
                                                <div key={opt.name}>
                                                    {opt.type === "boolean" && (
                                                        <>
                                                            <Checkbox
                                                                id={opt.name}
                                                                name={opt.name}
                                                                defaultChecked={!!opt.default}
                                                                onChange={(e) => setEngineOptions({...engineOptions, [opt.name]: e.target.checked})}
                                                            />
                                                            <Tooltip content={opt.description} relationship="label">
                                                                <Label htmlFor={opt.name}>{opt.name}</Label>
                                                            </Tooltip>
                                                        </>
                                                    )}
                                                    {opt.type === "number" && (
                                                        <>
                                                            <Tooltip content={opt.description} relationship="label">
                                                                <Label htmlFor={opt.name}>{opt.name}</Label>
                                                            </Tooltip>
                                                            <SpinButton
                                                                id={opt.name}
                                                                name={opt.name}
                                                                onInput={(e) => setEngineOptions({...engineOptions, [opt.name]: (e.target as HTMLInputElement).valueAsNumber})}
                                                            />
                                                        </>
                                                    )}
                                                    {opt.type === "enum" && (
                                                        <>
                                                            <Tooltip content={opt.description} relationship="label">
                                                                <Label htmlFor={opt.name}>{opt.name}</Label>
                                                            </Tooltip>
                                                            <Select id={opt.name} name={opt.name} onChange={(e) => setEngineOptions({...engineOptions, [opt.name]: e.target.value})}>
                                                                {opt.enum?.map((value) => (
                                                                    <option key={value} value={value}>
                                                                        {value}
                                                                    </option>
                                                                ))}
                                                            </Select>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        </DialogContent>
                        <DialogActions>
                            <DialogTrigger disableButtonEnhancement={true}>
                                <Button appearance="secondary">Close</Button>
                            </DialogTrigger>
                            <Button type="submit" appearance="primary">
                                Create
                            </Button>
                        </DialogActions>
                    </DialogBody>
                </form>
            </DialogSurface>
        </Dialog>
    );
}
