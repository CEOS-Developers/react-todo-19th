import React from "react";
import styled from "styled-components";

const DoneButton = ({ onClick }) => {
    return (
        <StyledButton type="button" onClick={onClick}>
        <img src="./assets/Checked.png" alt="Checked" style={{ width: '20px', height: '20px' }} />
        </StyledButton>
    );
};

export default DoneButton;

const StyledButton = styled.button`
    background-color: transparent; 
    border: none; 
    cursor: pointer; 
    transition: transform 0.1s ease;
    &:active {
        transform: scale(0.9);
    }padding: 0;
`;
