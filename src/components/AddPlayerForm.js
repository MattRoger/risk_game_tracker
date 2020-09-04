import React, { Component } from "react";

const colors = ["red", "blue", "green", "yellow", "grey", "black"];

class AddPlayerForm extends Component {
  state = {
    nameValue: "",
    territoryValue: 0,
    color: colors[0],
  };

  handleNameValueChange = (e) => {
    this.setState({ nameValue: e.target.value });
  };
  handleTerritoryValueChange = (e) => {
    this.setState({ territoryValue: e.target.value });
  };
  handleColor = (e) => {
    this.setState({ color: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.nameValue==""){
      alert("Please Enter A Name")
    }else{
      this.props.addPlayer(
        this.state.nameValue,
        this.state.territoryValue,
        this.state.color
      );
      this.setState({
        nameValue: "",
      });
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="wrapper">
        <p>
          Add the player who rolled the highest dice first, then add each player
          in a clockwise circle
        </p>
        <p>
          For each player, enter a name, the amount of starting territories
          controlled, and select a color.
        </p>
        <label>Enter Player Name</label>
        <input
          type="text"
          value={this.state.nameValue}
          onChange={this.handleNameValueChange}
          placeholder="Enter Player Name"
        />
        <label>Enter Total Territories Controlled</label>
        <input
          type="number"
          value={this.state.territoryValue}
          onChange={this.handleTerritoryValueChange}
          placeholder="Total Territories"
        />
        <label>Select Color</label>
        <select name="color" onChange={this.handleColor}>
          {colors.map((color) => (
            <option value={color} key={color} className={color}>
              {color.toUpperCase()}
            </option>
          ))}
        </select>

        <input type="submit" value="Add Player" className="wrapper" />
      </form>
    );
  }
}
export default AddPlayerForm;
