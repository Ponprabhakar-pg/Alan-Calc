import React from 'react';
import GenerateButton from './GenerateButton';
const OperationButtons = (props) => {
    let operators=['+','-','*','/','%','C','='];
    return(
        <div>
            {operators.map((op)=><GenerateButton value={op}/>)}
        </div>
    );
}

export default OperationButtons;