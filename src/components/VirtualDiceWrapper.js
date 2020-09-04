import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";
import VirtualDiceRoll from "./VirtualDiceRoll "

class VirtualDiceWrapper extends Component{

    state={
        show:false
    }
      handleToggle = () => {
        this.setState((prevState) => {
          return {
            show: !prevState.show,
          };
        });
      };

   
    render(){
        return(
            <div className="wrapper">
              <button className="chart-btn" onClick={this.handleToggle}>
          Virtual Dice Roll
        </button>
        <ToggleDisplay show={this.state.show}>
            <VirtualDiceRoll />
        </ToggleDisplay>
            </div>

        )
    }


}

export default VirtualDiceWrapper;