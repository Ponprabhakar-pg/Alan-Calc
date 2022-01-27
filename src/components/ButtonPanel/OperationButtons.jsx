import React from 'react';
import GenerateButton from './GenerateButton';
const OperationButtons = (props) => {
    return(
        <div>
            <GenerateButton value={"+"}/>
            <GenerateButton value={"-"}/>
            <GenerateButton value={"*"}/>
            <GenerateButton value={"/"}/>
            <GenerateButton value={"C"}/>
            <GenerateButton value={"="}/>
        </div>
    );
}

export default OperationButtons;