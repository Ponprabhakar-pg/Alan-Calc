import React, { useState } from "react";


const Output = ({input}) => {
  console.log();
  //const [output, setOutput] = useState('');
//   if (props.update !== undefined || props.update !== null) {
//     console.log(props.update);
//     setOutput(props.update);
//   }
//  console.log("*");
  return (
    <div>
      <input type="text" name="output" value={input} disabled={true} id="output" />
      
    </div>
  );
};

// const Output = (props) => {
//     console.log(props.update);

//     const [output,setOutput] = useState('');

//     if(props.update===undefined || props.update===null){
//         console.log("*");
//         return(
//             <div>
//                 <input
//                     type="text"
//                     name="output"
//                     defaultValue={output}
//                 />
//             </div>
//         );
//     }
//     if(props.update!==undefined || props.update!==null){
//         console.log(props.update);
//         setOutput(props.update);
//     }
// }

export default Output;