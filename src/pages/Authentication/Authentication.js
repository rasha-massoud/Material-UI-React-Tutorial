import { Grid } from "@mui/material";
import CommonButton from '../../components/CommonButton/CommonButton';
import { buttonStyles } from "./styles";

const Authentication = () => {

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
