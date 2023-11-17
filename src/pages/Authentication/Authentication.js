import Header from "../../components/Header/Header";
import BasicCard from "../../components/BasicCard/BasicCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useState } from "react";
import NewUserModal from "../../components/NewUserModal/NewUserModal";
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";

const Authentication = () => {

    const [open,setOpen] = useState(false);
    const [users, setUsers] = useState([]);
    const [searchResults, setSearchResults] = useState(users);

    const handleSearch = (value) => {
        filterData(value)
    };

    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === '') setUsers(searchResults);
        else {
            const filteredData = searchResults.filter((item) => {
                return Object.keys(item).some((key) => 
                item[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            setUsers(filteredData)
        };
    };

    const addNewUser = (data) => {
        users.push({ ...data });
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div style={{ marginLeft:320}}>
            <Header title='Authentication'/>
            <BasicCard 
                header = {
                    <SearchBar 
                        placeholder={'Search by email address, phone number, or user ID'} 
                        onChange={(event) => handleSearch(event.target.value)}
                        onClick={handleOpen}
                    />
                }
                content = {
                    users.length ? (
                        users.map((user) => (
                            <Box sx={{ marginBottom: '20px' }} key={user.id}>
                                <Typography>User ID: {user.userId}</Typography>
                                <Typography>Email: {user.email}</Typography>
                                <Typography>Phone Number: {user.phoneNumber}</Typography>
                            </Box>
                        ))
                    ) : (
                        <Typography 
                            align="center"
                            sx={{ margin: '40px 16px', color: 'rgba(0, 0, 0, 0.6)', fontSize: '1.3rem'}}
                        >
                            No users for this project yet
                        </Typography>
                    )
                }
            />

            
            <NewUserModal 
                open={open} 
                onClose={handleClose} 
                addNewUser={addNewUser}
            />               

            
        </div>
    )
}

export default Authentication;
