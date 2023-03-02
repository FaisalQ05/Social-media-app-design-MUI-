import { createTheme } from "@mui/material";
import { green, pink, purple } from "@mui/material/colors";

export const theme=createTheme({
    palette:{
        primary:{
            main:purple[300],
            light:"skyblue"
        },
        secondary:{
            main:pink[400],
            light:pink[200]
        },
        otherColor:{
            main:purple[100]
        }
    }
})