import React from 'react'

    const Header = ()=>{
   
    return (
        <div className="header">
        <h1>Welcome to The <span><img src="/images/riskLogo.png" alt="Risk Logo" className="risk-logo"/></span> Game Tracker</h1>
        </div>
    );

}
export default Header;

// ${process.env.PUBLIC_URL}/${props.image}