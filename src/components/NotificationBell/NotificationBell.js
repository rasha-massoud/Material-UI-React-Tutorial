import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const NotificationBell = ({ iconColor, badgeContent, anchorEl, onClick }) => {
    const newNotifications = `You have ${badgeContent} new notifications!`;
    const noNotifications = 'No new notifications';
    
    return (
        <Tooltip title={ badgeContent ? newNotifications : noNotifications }>
            <IconButton 
                color={iconColor}
                onClick={onClick}
                anchorEl={anchorEl}
            >
                <Badge badgeContent={badgeContent} color='primary'>
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Tooltip>

    )
}

export default NotificationBell;
