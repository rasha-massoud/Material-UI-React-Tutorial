import Header from "../../components/Header/Header";
import BasicCard from "../../components/BasicCard/BasicCard";
import SearchBar from "../../components/SearchBar/SearchBar";
import BasicModal from "../../components/BasicModal/BasicModal";
import { useState } from "react";

const Authentication = () => {

    const [open,setOpen] = useState(false);
    
    const handleChange = (value) => {
        console.log(value);
    }

    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div style={{ marginLeft:320}}>
            <Header title='Authentication'/>
            <BasicCard 
                header={
                    <SearchBar 
                        placeholder={'Search by email address, phone number, or user ID'} 
                        onChange={(event) => handleChange(event.target.value)}
                        onClick={handleOpen}
                    />
                }
                content={'No users for this project yet.'}
            />

            
            <BasicModal open={open} onClose={handleClose} />               

            
        </div>
    )
}

export default Authentication;
