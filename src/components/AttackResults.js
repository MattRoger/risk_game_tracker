import React from "react";
import Result from "./Result";
import Results from "./Result";

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
    <>
      <div>
        {attackResults.map((result) =>(
            <Result class={Results.class}  img={result.img} />            
        ))}
        {defenseResults.map((result) =>(
            <Result class={Results.class}  img={result.img} />            
        ))}

           
      </div>
    </>
  );
};

export default AttackResults;
