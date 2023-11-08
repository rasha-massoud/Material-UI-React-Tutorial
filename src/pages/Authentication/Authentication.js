import { Grid } from "@mui/material";
import { buttonStyles } from "./styles";
import CommonButton from '../../components/CommonButton/CommonButton';
import Header from "../../components/Header/Header";

const Authentication = () => {

    return (
        <Grid item xs={8}>

            <Header title='Authentication'/>
            
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
