// import React from "react";

// function Header(){
//   return (
//     <h1>Lord Vader's Comic Vault</h1>
//   );
// }

// export default Header;

import React from "react";
import header1 from "./../img/header1.jpg"

function Header(){
  const headerStyles = {
    textAlign: "left",
    padding: 30,
    margin: 5,
    backgroundImage:`url(${header1})`,
    backgroundSize: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center top 30%",
    color: "black",
    boxShadow: "0 2px 10px rgba(0,0,0,0.6)"
  }


  return(

    <React.Fragment>
      <div style={headerStyles}>
      <h1>Lord Vader's Comic Vault</h1>
      </div>
      <br />
    </React.Fragment>

  );
}

export default Header;