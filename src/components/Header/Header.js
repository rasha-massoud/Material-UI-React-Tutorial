import CommonButton from '../../components/CommonButton/CommonButton';
import NotificationBell from "../../components/NotificationBell/NotificationBell";
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import HelpIcon from '@mui/icons-material/Help';
import { headerStyles } from './styles';

const Header = ({ title }) => {

    return (
        <div style={headerStyles.wrapper}>
            <div style={headerStyles.firstRow}>
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
            </div>

            <div style={headerStyles.secondRow}>
                <Typography>{title}</Typography>
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
