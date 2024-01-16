import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const customTheme = extendTheme({
    cssVarPrefix: "",
    colorSchemes: {
        light: {
            palette: {
                "bg-text-input": "#C0C0C0", // Specify color in light mode for "bg-text-input"
                "text": "hsl(200, 15%, 8%)",
                "input": "hsl(0, 0%, 52%)",
                "bg": "hsl(0, 0%, 98%)",
                "element": "hsl(0, 0%, 100%)"
            },
        },
        dark: {
            palette: {
                "bg-text-input": "#0f1a2a", // Specify color in dark mode for "bg-text-input",
                "text": "hsl(0, 0%, 100%)",
                "bg": "hsl(207, 26%, 17%)",
                "element": "hsl(209, 23%, 22%)"
            },
        },
    },
});

export default customTheme;