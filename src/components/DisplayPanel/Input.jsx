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
        // console.log(event.target[0].value);
        //let op = eval(input.toString());
        {input &&
            <div>
                <Output 
                    input={input}
                />
            </div>
        }
        console.log(event.target[0].value);
    }

    const handleChange=(evl)=>{
        console.log(evl)
        let op=evl;
        try{
           op=eval(evl);
        }
        catch(err){
            op=evl;
        }
        finally{
            return op;
        }

    }

    return(
        <>
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
        {input &&
            <div>
                <Output 
                    input={eval(input)}
                />
            </div>
        }

        </>
    );
}

export default Input;