import {Manrope} from "next/font/google";


export const manrope_init = Manrope({
    weight: ["200", "300", "400", "500", "600", "700", "800"], 
    subsets: ["latin"],
    variable: "--manrope-font"
});

export const manrope = manrope_init.variable