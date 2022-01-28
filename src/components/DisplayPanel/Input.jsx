import React, {useState} from 'react';

import Output from './Output.jsx';

const Input = ({ip}) => {
    console.log(ip);
    const [input,setInput] = useState('');
    if(ip!==undefined){
        if(ip==='C'){
            setInput(input.slice(0 ,-1));
        }else{
        setInput(input+ip.toString());
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let op=document.getElementById('input').value;
        console.log(op);
        try{
           op=eval(op.toString());
        }
        catch(err){
        }
        finally{
            document.getElementById('output').value=op;
        }
    }

    // const handleChange=(e)=>{
    //     let op=document.getElementById('input').value;
        
    //     console.log(e,"hello");
    //     try{
    //        op=eval(op.toString());
    //     }
    //     catch(err){
    //     }
    //     finally{
    //         document.getElementById('output').value=op;
    //     }

    // }

    return(
        <>
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="input" 
                id="input"
                />
                
                <input 
                type="submit" 
                value="Calculate" 
                />
                
            </form>
        </div>

        {/* {input &&
            <div>
                <Output 
                    input={handleChange(input)}
                />

            </div>
        } */}

        </>
    );
}

export default Input;