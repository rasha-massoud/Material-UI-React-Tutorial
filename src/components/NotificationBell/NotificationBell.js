import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import IconButton from '@mui/material/IconButton';

const NotificationBell = ({ iconColor, badgeContent }) => {
    return (
        <IconButton color={iconColor} aria-label={notificationsLabel(100)}>
            <Badge badgeContent={badgeContent} color="primary">
                <NotificationsIcon color="action" />
            </Badge>
        </IconButton>
    )
}

export default NotificationBell;
