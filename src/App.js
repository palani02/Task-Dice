import {useState } from 'react';
import './App.css';
import React from 'react'

function App() {
const [num,Setnum] = useState(0);
// const [num2,Setnum2] = useState(0);
const [p1,setp1] = useState([]);
// const dice = [1,2,3,4,5,6];
  const handleclick = ()=>{
   const a =  Math.floor(Math.random()*(6-1+1))+1;
   setp1(pre=>([...pre,a]));
   Setnum(a);
  }
  return (
    <div>
         <div className='Root_1'>Dice
          <div className='players'>
            <div className='Player1'>Player-1</div>
            <div style={{display:'flex',gap:'10px'}}>


            {
              p1.map(data=>{
                return <p>{data}</p>
              })
            }
            </div>
            <p>{num}</p>
            <div className='Player2'>Player-2</div>
            </div>
          {/* <button></button> */}
          <div className='images'>
          {num}
         
          <br></br>
          <button className='Roll_btn' onClick={handleclick}>Roll</button>
           </div>
        </div>
      
      <div className='Root_1'></div>
    </div>
  )
}

export default App                       

