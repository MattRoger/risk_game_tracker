import React from "react"

const Results = (props) =>{

    return(
        <div className="round-result">
            <div className={props.class}>
                <img src={props.img} alt={props.img}/>
            </div>
        </div>
    )
}

export default Results;