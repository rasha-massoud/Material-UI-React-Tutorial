import { Grid } from "@mui/material";
import { buttonStyles } from "./styles";
import CommonButton from '../../components/CommonButton/CommonButton';
import NotificationBell from "../../components/NotificationBell/NotificationBell";
import Avatar from '@mui/material/Avatar';

const Authentication = () => {

    return (
        <Grid item xs={8}>
            This is the Authentication Page.

            <CommonButton variant='default'>
                Go to docs
            </CommonButton>

            <NotificationBell 
                iconColor='primary' 
            />

            <Avatar 
                src='https://mui.com/static/images/avatar/1.jpg' 
                alt='Profile Picture'
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
