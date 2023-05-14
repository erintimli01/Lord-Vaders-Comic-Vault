import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Comic(props) {
  const imageStyle = {
    width: "200px",
    height: "300px", 
  };


  return (
    <React.Fragment>
      <Link to={`/comic/${props.id}`}>
      {/* <Link to="./ComicDetails"> */}
      <img src={props.image} alt="Comic" style={imageStyle}/>
      </Link>
      <h3>{props.title}</h3>
      <h4>Condition: {props.condition}</h4>
      <h4>Date: {props.date}</h4>
      <h4>Price: {props.price}</h4>
    </React.Fragment>
  );
}

Comic.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  condition: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
};

export default Comic;