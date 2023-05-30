import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "30%",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "5px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  backgroundColor: "white",
};

// const imageStyle = {
//   width: "200px",
//   height: "300px",
// };

const buttonStyle = {
  marginTop: "20px",
  padding: "8px 16px",
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const ComingSoonContainer = styled.div`
  ${containerStyle}
`;

function ActionFigures() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <ComingSoonContainer>
      <h2>Action Figures</h2>
      <p>Coming Soon!</p>
      <button style={buttonStyle} onClick={handleBack}>
        Back
      </button>
    </ComingSoonContainer>
  );
}

ActionFigures.propTypes = {
  comics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      condition: PropTypes.string,
      date: PropTypes.string,
      price: PropTypes.string,
    })
  ),
};

export default ActionFigures;