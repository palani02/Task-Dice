import { useState } from "react";
import "./App.css";
import React from "react";


function App() {
  const [num, Setnum] = useState(0);
  const [p1, setp1] = useState([]);
  const [p2, setp2] = useState([]);

  const [active, setActive] = useState(true);

  const handleclick = () => {
    const a = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

    if (a === 1 || a === 6) {
      Setnum(0);
      setActive((pre) => !pre);
    }
    // console.log(num);
    if (active) {
      setp1((pre) => [...pre, a]);
    } else {
      setp2((pre) => [...pre, a]);
    }

    // if (a === 1 || a === 6) {
   
    // }else{
    //   console.log(a);
      Setnum(a);
    // }
  };

  return (
    <div>
      <div id="name">DICE GAME<br></br></div>
      <div className="Active-state"><p>Active 🟢</p><br></br><p>In-Active &#128308;</p></div>
      <div className="Root_1">
        <br></br>

        
        <div
          className="players"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div className="p1">
            <div className="Player1">Player One{active && "🟢" } <br></br> <br></br></div>
            <div style={{ display: "flex", gap: "5px" ,}}>
              <div>Dice History : </div>
              {p1.map((data) => {
                return <p>{data}</p>;
              })}
            </div>
            <p>Player 1 Got : {active && num}</p>
          </div>

          <div className="p2">
            <div className="Player2">Player Two{!active && "🟢"} <br></br><br></br></div>
            <div style={{ display: "flex", gap: "10px" }}>
              <div>Dice History : </div>
              {p2.map((data) => {
                return <p>{data}</p>;
              })}
            </div>
            <p>Player 2 Got : {!active && num}</p>
          </div>
        </div>
      </div>
      <img style={{
        width:'100px'
      }} src={`src/assests/dice-six-faces-${num}.png`} alt=""/>
      
      <button className="Roll_btn" onClick={handleclick}>
        ROLL
      </button>
    </div>
   
  );
}

export default App;