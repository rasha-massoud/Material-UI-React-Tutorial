import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Input from '@mui/material/Input';
import CommonButton from '../CommonButton/CommonButton';
import { buttonStyles } from '../../pages/Authentication/styles';

const SearchBar = ({ placeholder, onChange }) => {
    return (
        <div>
            <IconButton >
                <SearchIcon />
            </IconButton>
            <Input 
                placeholder={placeholder} 
                onChange={onChange}
            />
            <CommonButton 
                variant='contained'
                sx={buttonStyles}
            >
                Add User 
            </CommonButton>
            <IconButton >
                <RefreshIcon />
            </IconButton>
        </div>
    )
}

export default SearchBar;
