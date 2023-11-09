import CommonButton from '../../components/CommonButton/CommonButton';
import NotificationBell from "../../components/NotificationBell/NotificationBell";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import Stack from '@mui/material/Stack';
import { headerStyles } from './styles';
import { buttonStyles } from '../../pages/Authentication/styles';

const Header = ({ title }) => {

    return (
        <div style={headerStyles.wrapper}>
            <Stack direction="row" spacing={2} style={headerStyles.firstRow}>
                <CommonButton variant='default' sx={buttonStyles}>
                    Go to docs
                </CommonButton>

                <NotificationBell 
                    iconColor='white' 
                />

                <Avatar 
                    src='https://mui.com/static/images/avatar/1.jpg' 
                    alt='Profile Picture'
                    sx={{ width: 32, height: 32 }}
                />
            </Stack>

            <div style={headerStyles.secondRow}>
                <Typography
                    variant='h3'
                    color='white'
                >
                    {title}
                </Typography>
                <CommonButton variant='outlined'>Web Setup</CommonButton>
                
                <Tooltip title='Help'>
                    <IconButton>
                        <HelpIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </div>
    )
}

export default Header;
