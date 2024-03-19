import React from "react";
import styled from "styled-components";

const ResetButton = ({ onClick }) => {
    return (
        <StyledButton onClick={onClick}>
            <img src="./assets/Reset.png" alt="Reset" style={{ width: '25px', height: '25px' }} />
        </StyledButton>
    );
};

export default ResetButton;

const StyledButton = styled.button`
    background-color: transparent; 
    border: none; 
    cursor: pointer; 
    padding: 0;
`;
