import Header from "../../components/Header/Header";
import BasicCard from "../../components/BasicCard/BasicCard";
import SearchBar from "../../components/SearchBar/SearchBar";

const Authentication = () => {

    const handleChange = (value) => {
        console.log(value);
    }
    
    return (
        <div style={{ marginLeft:320}}>
            <Header title='Authentication'/>
            <BasicCard 
                header={
                    <SearchBar 
                        placeholder={'Search by email address, phone number, or user ID'} 
                        onChange={(event) => handleChange(event.target.value)}
                    />
                }
                content={'No users for this project yet.'}
            />
        </div>
    )
}

export default Authentication;
