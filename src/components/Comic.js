import React from "react";
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
      <img src={props.image} alt="Comic" style={imageStyle}/>
      </Link>
      <Link to={`/comic/${props.id}`}>
      <h3>{props.title}</h3>
      </Link>
      <h4>{props.description}</h4>
      <h4>Price: {props.price}</h4>
    </React.Fragment>
  );
}

Comic.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  condition: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.string,
};

export default Comic;

// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const ComicContainer = styled.div`
//   font-family: 'Bangers', cursive;
// `;

// function Comic(props) {
//   const imageStyle = {
//     width: "200px",
//     height: "300px",
//   };

//   return (
//     <ComicContainer>
//       <Link to={`/comic/${props.id}`}>
//         <img src={props.image} alt="Comic" style={imageStyle} />
//       </Link>
//       <Link to={`/comic/${props.id}`}>
//         <h3>{props.title}</h3>
//       </Link>
//       <h4>{props.description}</h4>
//       <h4>Price: {props.price}</h4>
//     </ComicContainer>
//   );
// }

// Comic.propTypes = {
//   image: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   condition: PropTypes.string,
//   date: PropTypes.string,
//   price: PropTypes.string,
// };

// export default Comic;