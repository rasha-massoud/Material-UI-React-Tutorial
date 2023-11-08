import { Grid } from "@mui/material";
import { buttonStyles } from "./styles";
import CommonButton from '../../components/CommonButton/CommonButton';
import NotificationBell from "../../components/NotificationBell/NotificationBell";

const Authentication = () => {

    return (
        <Grid item xs={8}>
            This is the Authentication Page.

            <NotificationBell 
                iconColor='primary' 
            />


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
