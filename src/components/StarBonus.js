import React, { Component } from "react";
import ToggleDisplay from "react-toggle-display";


class StarBonus extends Component {
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
          Territories Cards for Troops
          </button>
          <ToggleDisplay show={this.state.show}>
    <table className="card-troops">
      <thead></thead>
      <tbody>
        <tr className="troop-head">
        <th><img src="/images/icons/star.png" className="table-image2"/></th>
          <th><img src="/images/example/troop.png" className="table-image"/></th>
          <th><img src="/images/icons/star.png" className="table-image2"/></th>
          <th><img src="/images/example/troop.png" className="table-image"/></th>
          <th><img src="/images/icons/star.png" className="table-image2"/></th>
          <th><img src="/images/example/troop.png" className="table-image"/></th>         
        </tr>
        <tr>
          <td className="star-col">2</td>
          <td className="troop-col">2</td>

          <td className="star-col">5</td>
          <td className="troop-col">10</td>

          <td className="star-col">8</td>
          <td className="troop-col">21</td>
        </tr>
        <tr>
          <td className="star-col">3</td>
          <td className="troop-col">4</td>

          <td className="star-col">6</td>
          <td className="troop-col">13</td>

          <td className="star-col">9</td>
          <td className="troop-col">25</td>
        </tr>
        <tr>
          <td className="star-col">4</td>
          <td className="troop-col">7</td>

          <td className="star-col">7</td>
          <td className="troop-col">17</td>

          <td className="star-col">10</td>
          <td className="troop-col">30</td>         

        </tr>
      </tbody>
    </table>
    </ToggleDisplay>
    </div>
  );
}
};

export default StarBonus;
