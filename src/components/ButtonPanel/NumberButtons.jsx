import React from 'react';
import Input from '../DisplayPanel/Input';
import GenerateButton from './GenerateButton';

const NumberButtons = (props) => {
    let numbersToDisplay=[1,2,3,4,5,6,7,8,9,0,'.'];
    return(
        <div>
            {numbersToDisplay.map((lt)=><GenerateButton value={lt}/>)}
        </div>
       
    );
}

export default NumberButtons;