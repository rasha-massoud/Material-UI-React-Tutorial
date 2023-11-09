import { createTheme } from "@mui/material/styles"; 

const dashboardTheme = createTheme({
    palette: {
        white: {
            main: 'rgba(255,255,255,1)',
        }
    },
    typography: {
        h1: {
            fontSize: '1.6rem',
            fontWeight: 600,
            color: '#fff',
            letterSpacing: '0.5px',
            textTransform: 'capitalize',
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
    },
});

export default dashboardTheme;