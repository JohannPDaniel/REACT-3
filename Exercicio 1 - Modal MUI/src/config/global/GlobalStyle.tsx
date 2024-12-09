import { GlobalStyles } from "@mui/material";
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/700.css';


const style = {
    "*": {
        margin: 0,
        padding: 0,
        boxSizing: "Border-box",
        fontFamily: "Poppins, sans-serif"
    }
};

export function GlobalStyle () {
    return <GlobalStyles styles={style} />
}