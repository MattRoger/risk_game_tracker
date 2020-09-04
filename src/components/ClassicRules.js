import React from "react";

const ClassicRules = () => {
  return (
    <div>
      <ol>
        <li>Each Player picks an Army Color.</li>
        <li>
          All players should count out a pool of troops, depending on number of
          players. See Chart Below
        </li>
        <li>
          Roll a Dice to see who goes first! Play will continue clockwise.
        </li>
        <li>
          One at a time, in turn order, players each turn take one troop from
          their pool and place in into a territory, claiming it. This continues
          until all 42 territories are claimed.
        </li>
        <li>
          Placing troops from the pool continues, but now players can reenforce
          territories they already claim
        </li>
      </ol>
      <table>
        <thead></thead>
        <tbody>
          <tr>
            <th>No. of Players</th>
            <th>No. of Starting Troops</th>
          </tr>
          <tr>
            <td>3</td>
            <td>35</td>
          </tr>
          <tr>
            <td>4</td>
            <td>30</td>
          </tr>
          <tr>
            <td>5</td>
            <td>25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default ClassicRules;
