import { useState } from 'react';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../../components/BasicMenu/BasicMenu';

const NotificationBell = ({ iconColor }) => {
    
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    
    const notifications = [
        {
            id: 0,
            label: 'First Notification'
        },
        {
            id: 1,
            label: 'Second Notification'
        },
    ];
    
    const newNotifications = `You have ${notifications.length} new notifications!`;
    const noNotifications = 'No new notifications';
    
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget)
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
    };

    return (
        <>
            <Tooltip title={ notifications.length ? newNotifications : noNotifications }>
                <IconButton 
                    color={iconColor}
                    onClick={ notifications.length ? handleOpen : null }
                    anchorEl={anchorEl}
                >
                    <Badge badgeContent={notifications.length} color='primary'>
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
            </Tooltip>
            <BasicMenu 
                open={open}
                anchorEl={anchorEl}
                handleClose={handleClose}
                menuItems={notifications}
            />
        </>
    )
}

export default NotificationBell;
