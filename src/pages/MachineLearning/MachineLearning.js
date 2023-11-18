import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import BasicSnapBar from "../../components/BasicSnapBar/BasicSnapBar";
import CommonButton from "../../components/CommonButton/CommonButton";
import { MachineLearningStyles } from './styles';
import Loading from "../../components/Loading/Loading";

function MachineLearning() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true)

    const severity = "success";
    const message = `This is a ${severity} message`;
    const ButtonText = `Open the ${severity} snapbar`;

    useEffect(()=> {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    },[]);

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
            <Header title='Machine Learning'/>
            { loading ?
                <Loading sx={MachineLearningStyles.button}>
                    <CommonButton 
                        sx={MachineLearningStyles.button}
                        variant="contained" 
                        onClick={handleClick}
                    >
                        {ButtonText}
                    </CommonButton>
                </Loading>
                :
                <CommonButton 
                        sx={MachineLearningStyles.button}
                        variant="contained" 
                        onClick={handleClick}
                    >
                        {ButtonText}
                </CommonButton>
            }

            <BasicSnapBar 
                open={open}
                onClose={handleClose}
                severity={severity}
                message={message}
            />
        </div>
    )
}

export default MachineLearning;

