import React from "react";
import Result from "./Result";


const AttackResults = (props) => {
  const battleResults = props.handleBattle();
  let attackResults = [];
  let defenseResults = [];
  if (battleResults) {
    attackResults = battleResults[0];
    defenseResults = battleResults[1];
  }

  console.log(attackResults);
  console.log(defenseResults);
  return (
    <div className="dice-container">
      <div className="attack-roll">          
        {attackResults.map((result) =>(
            <Result class={result.class}  img={result.img} />            
        ))}
        </div>
            
        <div className="defense-roll">
        {defenseResults.map((result) =>(
            <Result class={result.class}  img={result.img} />            
        ))}

           
      </div>
    </div>
  );
};

export default AttackResults;
