import { createTheme } from "@mui/material/styles"; 

export const DashboardTheme = createTheme({
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