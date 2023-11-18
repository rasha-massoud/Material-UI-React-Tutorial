import { useState } from "react";
import Header from "../../components/Header/Header";
import BasicSnapBar from "../../components/BasicSnapBar/BasicSnapBar";
import BasicCard from "../../components/BasicCard/BasicCard";
import UserTable from "../../components/UserTable/UserTable";

const Storage = () => {
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    return (
        <div style={{ marginLeft:320}}>
            <Header title='Storage'/>
            <BasicCard 
                content={<UserTable onError={() => setOpen(true)} />}
            />
            <BasicSnapBar
                open={open}
                severity="error"
                message="Data couldn't be fetched"
                onClose={handleClose}
            />
        </div>
    )
}

export default Storage;
