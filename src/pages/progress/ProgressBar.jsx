import React from 'react';
import styled, { keyframes, css } from 'styled-components';


const ProgressBar = ({ totalItems, completedItems }) => {

  const allCompleted = completedItems === totalItems; // 모든 항목이 완료되었는지 여부


  return (
    <ProgressBarContainer>
      {Array.from({ length: totalItems }, (_, i) => (
  <Block key={i} filled={i < completedItems} allCompleted={allCompleted} />      ))}
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
const completeAnimation = keyframes`
  from {
    background-color: #D0CFFF;
  }
  to {
    background-color: #FB89F0; 
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
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #EBEBEB;

  ${props => props.filled && css`
    animation: ${fillAnimation} 1s ease-out forwards; //부드럽게 박스 색깔 채우기
    background-color: #D0CFFF;
  `}
  ${props => props.allCompleted && css`
    animation: ${completeAnimation} 2s ease-out forwards; // 모든 항목이 완료되었을 때 색 변하기
  `}
`;
