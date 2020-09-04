import React from "react";
import styled from "styled-components";

const Decrement = styled.button`
  background: #ee2436;
  height: 36px;
  width: 36px;
`;
const Increment = styled.button`
  background: #25374e;
  height:36px;
  width: 36px;
  
`;

const Counter = (props) => {
  let index = props.index;

  return (
    <div className="counter">
      <Decrement
        className="decrement"
        onClick={() => props.changeScore(index, -1)}
      >
         <img src="images/icons/downarrow.png" alt="-"className="counter-btn"/>
      </Decrement>
      <span className="counter-score">{props.score}</span>
      <Increment
        className="increment"
        onClick={() => props.changeScore(index, 1)}
      >
        
         <img src="images/icons/uparrow.png"  alt="+" className="counter-btn"/>
      </Increment>
    </div>
  );
  //   }
};
export default Counter;
