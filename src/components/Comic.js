import React from "react";
import Comic1 from "./../img/Comic1.jpg";
// import PropTypes from "prop-types";

function Comic(props){
  return (
    <React.Fragment>
      <img src={Comic1} alt="Fake Comic" />
      <h3>{props.title}</h3>
      <h4>Condition: {props.condition}</h4>
      <h4>Date: {props.date}</h4>
      <h4>Price: {props.price}</h4>
    </React.Fragment>
  );
}

// Comic.propTypes = {
//   title: PropTypes.string,
//   condition: PropTypes.string,
//   date: PropTypes.string,
//   price: PropTypes.string,
// }

export default Comic;