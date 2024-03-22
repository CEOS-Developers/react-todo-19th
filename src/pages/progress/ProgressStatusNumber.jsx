import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const ProgressStatusNumber = ({ totalItems, completedCount }) => {
const isCompleted = completedCount === totalItems;

    return (
        <ProgressContainer isCompleted={isCompleted}>
        {completedCount} / {totalItems}
      </ProgressContainer>
  );
};

export default ProgressStatusNumber;

const ProgressContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: auto;
padding: 5px 5px; 
height: 20px;
border-radius: 20px;
border: 2px solid ${({ isCompleted }) => (isCompleted ? '#FB89F0' : 'white')};
color: ${({ isCompleted }) => (isCompleted ? 'white' : '#4A4A4A')};
background-color:  ${({ isCompleted }) => (isCompleted ? '#FB89F0' : 'white')};
font-weight: bold;
font-size: 16px; 
font-weight: bold; 

${({ isCompleted }) => 
  isCompleted && css`
  animation: ${floatAndGrowAnimation} 0.8s ease-in-out infinite; //할일 전부 끝내면 뽕실뽕실..?? 애니메이션효과
`}
`;


const floatAndGrowAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
    font-size: 14px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  }
  50% {
    transform: translateY(-5px);
    font-size: 16px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }
`;
