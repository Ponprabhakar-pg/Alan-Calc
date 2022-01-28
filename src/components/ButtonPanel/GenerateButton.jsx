import React from 'react';
import Input from '../DisplayPanel/Input';

const GenerateButton = (props) => {
    const handleChange = (event)=>{
        let op=(document.getElementById('input').value).toString();
        if(event.target.value==='C'){
            document.getElementById('input').value=op.slice(0,-1);
        }
        else{
        document.getElementById('input').value=op+event.target.value;
        }
    }
    return(
        <input className='button' type="button" value={props.value}  onClick={handleChange}/>
    );
}

export default GenerateButton;