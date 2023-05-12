import React from "react";
import Comic1 from "./../img/Comic1.jpg"

function Comic(){
  return (
    <React.Fragment>
      <img src={Comic1} alt="Fake Comic" />
      <h3>This is a comic</h3>
      <h4>Price: $10</h4>
    </React.Fragment>
  );
}

export default Comic;