import { useState, useEffect } from "react";
import BasicModal from "../BasicModal/BasicModal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { newUserModalStyles } from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const defaultInputValues = {
    userId: '',
    email: '',
    phoneNumber: ''
};

const NewUserModal = ({ open, onClose, addNewUser }) => {

    const [values, setValues] = useState(defaultInputValues);
    const phoneRegex = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    useEffect(() => {
        if (open) setValues(defaultInputValues);
    }, [open])

    const validationSchema = Yup.object().shape( {
        userId: Yup.string()
        .required("User Id is required")
        .min(6, "User ID must be at least 6 characters."),

        email: Yup.string()
        .required("Email is required")
        .email("Email is invalid."),

        phoneNumber: Yup.string()
        .matches(phoneRegex, "Phone number is not valid."),
    })

    const {
        register,
        handleSubmit, 
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    const addUser = (data) => {
        addNewUser(data);
    };

    const handleChange = (value) => {
        setValues(value)
    };

    const getContent = () => {
        return (
            <Box sx={newUserModalStyles.inputFields}>
                <TextField 
                    placeholder="User ID" 
                    name="userId"
                    label="User ID"
                    required
                    {...register('userId')}
                    error={errors.userId ? true : false}
                    helperText={errors.userId?.message}
                    value={values.userId}
                    onChange={(event) => handleChange({ ...values, userId: event.target.value })}
                />
                <TextField 
                    placeholder="Email" 
                    name="email"
                    label="Email"
                    required
                    {...register('email')}
                    error={errors.email ? true : false}
                    helperText={errors.email?.message}
                    value={values.email}
                    onChange={(event) => handleChange({ ...values, email: event.target.value })}
                />
                <TextField 
                    placeholder="Phone number" 
                    name="phoneNumber"
                    label="Phone number"
                    required
                    {...register('phoneNumber')}
                    error={errors.phoneNumber ? true : false}
                    helperText={errors.phoneNumber?.message}
                    value={values.phoneNumber}
                    onChange={(event) => handleChange({ ...values, phoneNumber: event.target.value })}
                />
            </Box>
        )
    }

    return (
        <BasicModal
            open={open}
            onClose={onClose}
            title="New User"
            subTitle="Kindly fill the inputs then hit the submit button"
            content={getContent()}
            validate={handleSubmit(addUser)}
        />
    )
}

export default NewUserModal;
