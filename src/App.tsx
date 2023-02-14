
import { useState, useMemo } from "react";
import { Grid, useMediaQuery } from "@mui/material";
import { themeSettings } from "./theme/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";

import MyInfo from './components/MyInfo';
import Portfolio from './components/Portfolio';

const App: React.FC = () => {

    const isNonMobileScreens = useMediaQuery("(min-width: 1200px)");            // Mobile/PC

    // Theme
    const mode = "dark"
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);      // Theme

    return (
        <>
        <ThemeProvider theme={theme}>
        <Grid container className="grid__background">
            <Grid item xs={isNonMobileScreens ? 3 : 12}>
                <MyInfo />
            </Grid>
            <Grid item xs={isNonMobileScreens ? 9 : 12}>
                <Portfolio />
            </Grid>
        </Grid>
        </ThemeProvider>
        </>
    );
}

export default App;
