import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { modalStyles } from './styles';
import CommonButton from '../CommonButton/CommonButton';

const BasicModal = ({ title, subTitle, validate, content, open, onClose }) => {

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={modalStyles.wrapper}>
                <Typography 
                    id="modal-modal-title" 
                    variant="h6" 
                    component="h2"
                >
                    {title}
                </Typography>
                
                <Typography 
                    id="modal-modal-description" 
                    sx={{ mt: 2 }}
                >
                    {subTitle}
                </Typography>
                {content}
                <Box sx={modalStyles.buttons}>
                    <CommonButton
                        variant="contained"
                        onClick={validate}
                    >
                        Submit
                    </CommonButton>

                </Box>
            </Box>
        </Modal>
    )
}

export default BasicModal;
