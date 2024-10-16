import React, { act, useReducer } from 'react';

function App() {
  const reducer = (count, dispatch) => {
    switch(dispatch){
        case "increment":return count + 1;
        case "decrement": return count - 1;
        case "Reset":return count=0;
    }
      };
     const [count, dispatch] = useReducer(reducer, 0);
     console.log(count);
     
  return (
    <>
    <h3>Counter Application</h3>
    <div className='Container' >
      
             <h1>{count} </h1>  
             <button onClick={() => dispatch("increment")} className='increment-btn'>Increment</button>    
             <button onClick={() => dispatch("decrement")} className='decrement-btn'>Decrement</button>
             <button onClick={()=>dispatch("Reset")} className='reset-btn'>Reset</button>
      
    </div>
    </>
    
  );
  };
export default App;