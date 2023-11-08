import { createTheme } from "@mui/material/styles"; 

const DashboardTheme = createTheme({
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

export default DashboardTheme;