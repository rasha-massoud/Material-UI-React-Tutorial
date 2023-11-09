import { createTheme } from "@mui/material/styles"; 

const dashboardTheme = createTheme({
    palette: {
        white: {
            main: 'rgba(255,255,255,1)',
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    fontSize: '0.875rem'
                }
            }
        }
    }
});

export default dashboardTheme;