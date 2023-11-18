import Header from "../../components/Header/Header";
import BasicCard from "../../components/BasicCard/BasicCard";
import ProgressStepper from "../../components/ProgressStepper/ProgressStepper";

const steps = ['Step 1', 'Step 2', 'Step 3'];
const stepDescription = ['Description 1', 'Description 2', 'Description 3'];

function Database() {
    return (
        <div style={{ marginLeft:320}}>
            <Header title='Database'/>
            <BasicCard 
                content={
                    <ProgressStepper 
                        steps={steps}
                        stepDescription={stepDescription}
                    />
                }
            />
        </div>
    )
}

export default Database;
