import Header from "../../components/Header/Header";
import BasicCard from "../../components/BasicCard/BasicCard";
import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";

function Database() {
    return (
        <div style={{ marginLeft:320}}>
            <Header title='Database'/>
            <BasicCard 
                content={<ProgressStepper />}
            />
        </div>
    )
}

export default Database;
