import React, { Component } from "react";
import ToggleDisplay from 'react-toggle-display';

class Intro extends Component {
  state = {
   show1:false,
   show2:false,
   hideRules:true,
  };

  handleClickQuick =() =>{
          this.setState({
            show1: !this.state.show1,
            show2:this.state.show2=false,
        });        
  }
  handleClickClassic =() =>{
          this.setState({
              show2: !this.state.show2,
              show1:this.state.show1=false,
        });        
  }

  render() {
    return (
      <>
        <div className="rules-nav">
          <button onClick={this.handleClickQuick}> Quick Play </button>
          <button onClick={this.handleClickClassic}> Classic Play </button>
        </div>
       <ToggleDisplay show={this.state.show1}>

        <div className="quick-game-rules" id="quickRules">
          <h2>Quick Play Game</h2>
          <ol>
            <li>Each Player picks an Army Color.</li>
            <li>
              Roll a Dice to see who goes first! Play will continue clockwise.
            </li>
            <li>
              Shuffle the territory cards and deal them out to all players. Give
              any remaining cards to the players going last
            </li>
            <li>
              All players Look at their cards. For any 1-star card, place one
              troop in that territory; for any 2-star card, place two troops in
              that territory. One troop equals one infantry.
            </li>
            <li>Take back all of the territory cards and shuffle them</li>
          </ol>
        </div>
       </ToggleDisplay>
       <ToggleDisplay show={this.state.show2}>
        <div class="classic-rules" id="classicRules">
          <h2>Classic Play Game</h2>
          <ol>
            <li>Each Player picks an Army Color.</li>
            <li>
              All players should count out a pool of troops, depending on number
              of players. See Chart Below
            </li>
            <li>
              Roll a Dice to see who goes first! Play will continue clockwise.
            </li>
            <li>
              One at a time, in turn order, players each turn take one troop
              from their pool and place in into a territory, claiming it. This
              continues until all 42 territories are claimed.
            </li>
            <li>
              Placing troops from the pool continues, but now players can
              reenforce territories they already claim
            </li>
          </ol>
        </div>
       </ToggleDisplay>
       
      </>
    );
  }
}

export default Intro;
