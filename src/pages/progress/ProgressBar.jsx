import React from 'react';
import styled, { keyframes, css } from 'styled-components';


const ProgressBar = ({ totalItems, completedItems }) => {
  return (
    <ProgressBarContainer>
      {Array.from({ length: totalItems }, (_, i) => (
        <Block key={i} filled={i < completedItems} />
      ))}
    </ProgressBarContainer>
  );
};

export default ProgressBar;
const fillAnimation = keyframes`
  from {
    background-color: #EBEBEB;
  }
  to {
    background-color: #D0CFFF;
  }
`;

const ProgressBarContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  background-color: transparent;
  border-radius: 5px;
  margin-top: 10px;
`;

const Block = styled.div`
  flex-grow: 1;
  height: 20px;
  border: 2px solid white;
  box-sizing: border-box;
  ${props => props.filled && css`
    animation: ${fillAnimation} 1s ease-out forwards;
    background-color: #D0CFFF; 
  `}
  background-color: #EBEBEB;
`;