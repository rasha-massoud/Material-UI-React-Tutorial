import CommonButton from '../../components/CommonButton/CommonButton';
import NotificationBell from "../../components/NotificationBell/NotificationBell";
import Avatar from '@mui/material/Avatar';

const Header = () => {
    return (
        <div>
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
    )
}

export default Header;
