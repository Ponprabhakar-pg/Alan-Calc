import React, {useState} from 'react';

import Output from './Output.jsx';

const Input = (props) => {
    
    const [input,setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        <Output update={event.target[0].value}/>;
        console.log(event.target[0].value);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="input" 
                value={input}
                onChange={(e)=>{setInput(e.target.value)}} 
                />
                
                <input 
                type="submit" 
                value="Calculate" 
                />
            </form>
        </div>
    );
}

export default Input;