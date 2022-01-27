import React from 'react';
import GenerateButton from './GenerateButton';

const NumberButtons = (props) => {
    return(
        <div>
            <GenerateButton value={1}/>
            <GenerateButton value={2}/>
            <GenerateButton value={3}/>
            <GenerateButton value={4}/>
            <GenerateButton value={5}/>
            <GenerateButton value={6}/><br/>
            <GenerateButton value={7}/>
            <GenerateButton value={8}/>
            <GenerateButton value={9}/>
            <GenerateButton value={0}/>
        </div>
    );
}

export default NumberButtons;