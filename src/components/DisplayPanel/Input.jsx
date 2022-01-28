import React, {useState} from 'react';

import Output from './Output.jsx';

const Input = (props) => {
    
    const [input,setInput] = useState('');
    if(props.value!==undefined){
        if(props.value==='C'){
            setInput(input.slice(0 ,-1));
        }else{
        setInput(input+props.value.toString());
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value);
        let op = eval(input.toString());
        <Output update={op}/>
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