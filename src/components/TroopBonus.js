import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";


class TroopBonus extends Component {
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
          Troops for Territories
          </button>
          <ToggleDisplay show={this.state.show}>
    <table>
      <thead></thead>
      <tbody>
        <tr>
          <td>12-14</td>
          <td>15-17</td>
          <td>18-20</td>
          <td>21-23</td>
          <td>24-26</td>
          <td>27-29</td>
          <td>30-32</td>
          <td>33-35</td>
          <td>36-39</td>
          <td>40-42</td>
        </tr>
        <tr>
          <td>+1</td>
          <td>+2</td>
          <td>+3</td>
          <td>+4</td>
          <td>+5</td>
          <td>+5</td>
          <td>+7</td>
          <td>+8</td>
          <td>+9</td>
          <td>+10</td>
        </tr>
      </tbody>
    </table>
    </ToggleDisplay>
    </div>
  );
}
};

export default TroopBonus;
