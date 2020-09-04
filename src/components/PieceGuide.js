import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";


class PieceGuide extends Component {
    state = {
        show: false,
      };

     handleToggleChart = () =>{
        this.setState((prevState) => {
            return {
              show: !prevState.show,
            };
          });
     } 

    render(){
  return (
      <div className="wrapper">
          <button className="chart-btn" onClick={this.handleToggleChart}>
          Piece Guide
          </button>
          <ToggleDisplay show={this.state.show}>
          <div className="piece-guide">
            <div className="piece-wrapper">
            <h4>1</h4><img src="/images/example/troop.png" className="troop-img"/><h4>= 1 Troop</h4>
            </div>
            <div className="piece-wrapper">
            <h4>5</h4><img src="/images/example/troop.png" className="troop-img"/><h4>= 1</h4><img src="/images/example/calvary.png" className="calvary-img"/>
            </div>
            <div className="piece-wrapper">
            <h4>2</h4><img src="/images/example/calvary.png" className="calvary-img"/><h4>= 1</h4><img src="/images/example/cannon.png" className="cannon-img"/>
            </div>

          </div>
    </ToggleDisplay>
    </div>
  );
}
};

export default PieceGuide;
