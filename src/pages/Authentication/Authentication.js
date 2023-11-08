import { useState } from "react";
import { Grid } from "@mui/material";
import { buttonStyles } from "./styles";
import CommonButton from '../../components/CommonButton/CommonButton';
import NotificationBell from "../../components/NotificationBell/NotificationBell";
import BasicMenu from "../../components/BasicMenu/BasicMenu";

const Authentication = () => {
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const [menuItems, setMenuItems] = useState([]);

    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Grid item xs={8}>
            This is the Authentication Page.

            <NotificationBell 
                iconColor='primary' 
                badgeContent={0}
                anchorEl={anchorEl}
                onClick={handleOpen}
            />
            <BasicMenu 
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={menuItems}
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
