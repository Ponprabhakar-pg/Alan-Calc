import React from 'react';

const GenerateButton = (props) => {
    return(
        <input className='button' type="button" value={props.value}/>
    );
}

export default GenerateButton;