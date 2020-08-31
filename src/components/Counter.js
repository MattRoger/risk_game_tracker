// import React, { Component } from "react";
import React from "react";

    const Counter = (props)=>{
        let index=props.index

    return (
      <div className="counter">
        <button
          className="counter-action decrement"
        //   onClick={this.decrementScore}
        onClick={()=>props.changeScore(index,-1)}

        >
          -
        </button>
        {/* <span className="counter-score">{this.state.score}</span> */}
        <span className="counter-score">{props.score}</span>
        <button
          className="counter-action increment"
          onClick={()=>props.changeScore(index,1)}

        //   onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
//   }
}
export default Counter;
