import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';
import Input from '@mui/material/Input';
import CommonButton from '../CommonButton/CommonButton';
import { buttonStyles } from '../../pages/Authentication/styles';
import { searchBarStyles } from './styles';

const SearchBar = ({ placeholder, onChange }) => {
    return (
        <div style={searchBarStyles.wrapper}>
            <div style={searchBarStyles.leftPart}>

                <IconButton >
                    <SearchIcon />
                </IconButton>
                <Input 
                    style={searchBarStyles.prompt}
                    placeholder={placeholder} 
                    onChange={onChange}
                />
            </div>
            <div style={searchBarStyles.rightPart}>
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
        </div>
    )
}

export default SearchBar;
