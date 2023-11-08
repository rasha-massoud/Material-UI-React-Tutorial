import { Grid } from "@mui/material";
import CommonButton from '../../components/CommonButton/CommonButton';

const Authentication = () => {
    const buttonStyles = {
        fontWeight: 600,
        fontSize: '0.875rem',
        textTransform: 'capitalize',
        borderRadius: 2.5,
        '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
                backgroundColor: '#006db3',
            }
        },
        '&.MuiButton-outlined': {
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {
                backgroundColor: 'transparent',
            }
        },

    }

    return (
        <Grid item xs={8}>
            This is the Authentication Page.
            <CommonButton 
                variant='outlined'
                sx={buttonStyles}
            >
                Web Setup 
            </CommonButton>
            <CommonButton 
                variant='contained'
                sx={buttonStyles}
            >
                Add User 
            </CommonButton>
        </Grid>
    )
}

export default Authentication;
