import { buttonStyles } from "./styles";
import CommonButton from '../../components/CommonButton/CommonButton';
import Header from "../../components/Header/Header";

const Authentication = () => {

    return (
        <div style={{ marginLeft:320}}>
            <Header title='Authentication'/>
            
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
        </div>
    )
}

export default Authentication;
