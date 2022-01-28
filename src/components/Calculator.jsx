import React from 'react';
import NumberButtons from './ButtonPanel/NumberButtons';
import OperationButtons from './ButtonPanel/OperationButtons';
import Input from './DisplayPanel/Input'
import Output from './DisplayPanel/Output.jsx';
const Calculator = (props) => {
    return(
        <div className='calculator'>
            <div className='display'><span><Input /></span><br/></div>
            <div className='button'><OperationButtons/><NumberButtons/></div>
        </div>
    );
}

export default Calculator;