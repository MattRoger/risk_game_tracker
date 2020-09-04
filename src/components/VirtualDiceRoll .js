import React, { Component } from "react";
import VirtualDiceRollResults from "./VirtualDiceRollResults";
let attack="0"
let defense="0"
class VirtualDiceRoll extends Component {
  state = {
    attackDice: 0,
    defenseDice: 0,
  };

  handleToggleChart = () => {
    this.setState((prevState) => {
      return {
        show: !prevState.show,
      };
    });
  };
  
  handleAttackDice = (e) => {
      attack=e.target.value
      return attack;
  };
  handleDefenseDice = (e) => {
   defense=e.target.value
   return defense
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(attack >0 && defense >0) {
      this.setState({
        attackDice:attack,
        defenseDice:defense,
      })

    }

  };
  



  render() {
    return (
      <div className="wrapper">   
          <div className="selectDice">
            <form className="virtual-dice-form" onSubmit={this.handleSubmit}>
              <label>Attack Dice</label>
              <select  onChange={this.handleAttackDice}>
                <option value={0}>Select Attack Dice</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
              </select>
              <label>Defense Dice</label>
              <select  onChange={this.handleDefenseDice}>
              <option value={0}>Select Defense Dice</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
              </select>
              <input type="submit" value="Roll!" className="chart-btn" />
            </form>
          </div>
          <VirtualDiceRollResults
            attackDice={this.state.attackDice}
            defenseDice={this.state.defenseDice}
        
          />
      </div>
    );
  }
}

export default VirtualDiceRoll;
