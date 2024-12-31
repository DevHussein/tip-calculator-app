import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
    globalCss: {
        body: {
            bg: "paleAqua",
            color: "deepTeal",
            fontFamily: "Space Mono",
        },
    },
    theme: {
        breakpoints: {
            mobile: "375px",
            tablet: "768px",
            laptop: "1024px",
            desktop: "1440px",
        },
        tokens: {
            colors: {
                deepTeal: { value: "#00474B" },
                white: { value: "#FFFFFF" },
                aquamarine: { value: "#26C2AE" },
                slateBlueGray: { value: "#5E7A7D" },
                lightSlateGray: { value: "#9EBBBD" },
                powderBlue: { value: "#F3F9FA" },
                steelGray: { value: "#7F9D9F" },
                darkSage: { value: "#3D6666" },
                dustyTeal: { value: "#547878" },
                paleAqua: { value: "#C5E4E7" },
            },
            fonts: {
                body: { value: ["Space Mono", "monospace"] },
            },
        },
        textStyles: {
            label: {
                description: "Label text style",
                value: {
                    fontFamily: "Space Mono",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "slateBlueGray",
                    lineHeight: "auto",
                    letterSpacing: "0",
                },
            },
            input: {
                description: "Input text style",
                value: {
                    fontFamily: "Space Mono",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "deepTeal",
                    lineHeight: "auto",
                    letterSpacing: "0",
                },
            },
            button: {
                description: "Button text style",
                value: {
                    fontFamily: "Space Mono",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "white",
                    lineHeight: "auto",
                    letterSpacing: "0",
                },
            },
            tipInput: {
                description: "Tip input text style",
                value: {
                    fontFamily: "Space Mono",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "dustyTeal",
                    lineHeight: "auto",
                    letterSpacing: "0",
                },
            }
        },

    }
});

export default createSystem(defaultConfig, config);
