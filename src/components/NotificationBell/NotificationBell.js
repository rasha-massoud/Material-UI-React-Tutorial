import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const NotificationBell = ({ iconColor, badgeContent }) => {
    return (
        <Tooltip title={`You have ${badgeContent} new notifications!`}>
            <IconButton color={iconColor}>
                <Badge badgeContent={badgeContent} color="primary">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
        </Tooltip>

    )
}

export default NotificationBell;
