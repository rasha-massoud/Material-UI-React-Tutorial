import { useState } from "react";
import Header from "../../components/Header/Header";
import BasicSnapBar from "../../components/BasicSnapBar/BasicSnapBar";
import CommonButton from "../../components/CommonButton/CommonButton";
import { storageStyles } from './styles';
import Loading from "../../components/Loading/Loading";

function Storage() {
    const [open, setOpen] = useState(false);

    const severity = "success";
    const message = `This is a ${severity} message`;
    const ButtonText = `Open the ${severity} snapbar`;

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div style={{ marginLeft:320}}>
            <Header title='Storage'/>
            <Loading>
                <CommonButton 
                    sx={storageStyles.button}
                    variant="contained" 
                    onClick={handleClick}
                >
                    {ButtonText}
                </CommonButton>
            </Loading>

            <BasicSnapBar 
                open={open}
                onClose={handleClose}
                severity={severity}
                message={message}
            />
        </div>
    )
}

export default Storage;
