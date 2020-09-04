import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";

class PlayRules extends Component {
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
        Turn Guide
          </button>
          <ToggleDisplay show={this.state.show}>

      <ol>
        <li>
          Place Troops
            <dd>Each turn the players gets always gets 3 starting troops</dd>
            <dd>Players may turn in any territory cards for troop bonus. See table below.</dd>
            <dd>Players get a troop bonus for territories held. See table below</dd>
            <dd>Players place troops on territories they occupy.</dd>
          </li>
          <li>
            Attack
            <dd>From the player's controlled territory they may attack any opponent connected to that territory by a border or sea-route.</dd>
            <dd>Players may attack with up to three troops at a time, but must leave on to stand guard. See battle guide for more details.</dd>
            <dd>If there are no more defenders, the attacker takes over the territory and may move as many troops from the attacking territory, except for one to stand guard. </dd>
          <dd>Players may attack for as long as they like.</dd>
          </li>
          <li>
          Move Troops
            <dd>After a player is done attacking, they may move troops.</dd>
            <dd>Players may move troops from only 1 territory to another, once per turn.</dd>
            <dd>Players may move as many troops as they would like,  except for one to stand guard.</dd>
            <dd>If you conquer one or more territories, draw a territory card.</dd>
          </li>
          <li>This ends the players turn</li>
      </ol>
      </ToggleDisplay>
    </div>
  )
}
};
export default PlayRules;
