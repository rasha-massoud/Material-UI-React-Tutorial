import { createTheme } from "@mui/material/styles"; 

const dashboardTheme = createTheme({
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