import React from 'react';
import Input from '../DisplayPanel/Input';

const GenerateButton = (props) => {
    return(
        <input className='button' type="button" value={props.value} onClick={(e)=>{<Input value={e.target.value}/>}}/>
    );
}

export default GenerateButton;