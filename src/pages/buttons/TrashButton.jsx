import React from "react";
import styled from "styled-components";

const TrashButton = ({ onClick }) => {
    return (
        <StyledButton type="button" onClick={onClick}>
        <img src="./assets/Trash.png" alt="Trash" style={{ width: '40px', height: '40px' }} />
        </StyledButton>
    );
};

export default TrashButton;

const StyledButton = styled.button`
    background-color: transparent; 
    border: none; 
    cursor: pointer; 
    padding: 0;
    margin-right: -5px;
    margin-top: -5px;
`;
