import React from "react";
import styled from "styled-components";

const AddButton = ({ onClick }) => {
    return (
      <StyledButton onClick={onClick}>
        <img src="./assets/AddButton.png" alt="Add" style={{ width: '15px', height: '20px' }} />
      </StyledButton>
    );
  };
  
  export default AddButton;

  const StyledButton = styled.button`
  background-color: transparent; 
  border: none; 
  cursor: pointer; 
  padding: 0;
`;